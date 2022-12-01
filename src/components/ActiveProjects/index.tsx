import getRepos from '../../services/services';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../Project';

export default function ActiveProjects(): JSX.Element {
    const [activeRepo, setActiveRepo] = useState([])

    useEffect(() => {
        (async () =>{
        let repos;
        if(localStorage.getItem("repos")){
            repos = JSON.parse(localStorage.getItem("repos"))
           
        } else {
            repos = await getRepos();
            localStorage.setItem('repos',JSON.stringify(repos));
        }     
        repos = repos.filter((repo: any) => 
            repo.topics.includes('featured') || repo.topics.includes('contributions-welcome')
        );
        setActiveRepo(repos)
    })();
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
    </>)
}
