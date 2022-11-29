import React, { useEffect, useState } from 'react';
import ProjectCard from '../Project';

export default function ActiveProjects(): JSX.Element {
    const [activeRepo, setActiveRepo] = useState([])

    useEffect(  () => {
        let repos = JSON.parse(localStorage.getItem('repos')) ||[]
        repos = repos.map((repo: any) => {
            return repo.name == "github-audit" ||
                repo.name == "log-generator" ||
                repo.name == "FOSS-Projects"
                ? { ...repo, active: true }
                : { ...repo, active: false };
        });
        if (repos.length > 0) {
            repos.map((repo: any) => {
                if (repo.active) {
                    setActiveRepo((prev) => [...prev, repo]);
                }
            });
        }
    }, []);
    
    return (<>
        <section className="uk-section uk-section-muted ">
            <div className="uk-container">
                <h1 className="uk-text-bolder uk-text-center">
                    Featured Projects
                </h1>
                <div className="uk-grid-large uk-child-width-expand@m uk-text-left  uk-grid-match uk-padding uk-padding-remove-horizontal" data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 0; repeat: true" >
                    {
                        activeRepo?.map((project: any) => (
                            <div key={project.id}>
                                <ProjectCard project={project} ></ProjectCard>
                            </div>
                        ))
                    }
                </div>
                <div className='uk-align-right '>
                    <a className="uk-button uk-button-text uk-link-toggle" href="/projects"><span className='uk-link-heading'>View Projects <span uk-icon="arrow-right"></span></span></a>

                </div>

            </div>
        </section>
        {/* <div className="container">
            <div className="row">
                {activeRepo.length > 0 && activeRepo.map((props: any) => (


                    <div className="col col--4" key={props.id}>
                        <div className={clsx("col-demo card-demo")}>
                            <div className={styles.card}>
                                <div className="card__header">
                                    <Link to={props.html_url} target="_blank" rel="noopener noreferrer" className={styles.heading}>{props.name.toUpperCase()}</Link>
                                    {props.language &&
                                    <p className={styles.language}>{props.language}</p>}
                                </div>
                                <div className="card__body">
                                    <p className={styles.description}>
                                        {props.description ? props.description : 'No Description'}
                                        <br></br>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}
    </>)
}
