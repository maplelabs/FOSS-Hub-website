
import GithubService from "../../services/GithubService"
import ProjectCard from "../../components/Project"
export default function Project({repos}){
    return (
        <>
        <div>
            <h2>Open-source Projects</h2>
           
            <div className="uk-section uk-dark">
            <div className="uk-container">
            <div className="uk-child-width-1-3@m uk-text-left uk-grid-match" data-uk-grid>
                  {repos.map(project=><ProjectCard data={project} key={project.id}></ProjectCard>)}
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export async function getServerSideProps(){
    const repos = await GithubService.fetchProjects(true)
    return { props: {repos}}
}