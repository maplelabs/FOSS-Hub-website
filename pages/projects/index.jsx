
import GithubService from "../../services/GithubService"
import ProjectCard from "../../components/Project"
export default function Project({repos}){
    let langs = []
    repos.map((i) => langs.push(...i.languages))
    let filteredLang = new Set()
    langs.forEach((i) => !filteredLang.has(i) && filteredLang.add(i))
    const filterList = [...filteredLang]
    return (
        <>
        <div className=" uk-section uk-section-muted uk-height-1-1">
            <div className="uk-container">
              <div className="uk-heading-small uk-text-bolder uk-text-left">
                Open Source Projects
              </div>
              <div data-uk-filter="target: .js-filter" className="uk-margin-large-top">

                <ul className="uk-subnav uk-subnav-pill uk-text-bold">
                  <li className="uk-active " key='All' data-uk-filter-control=""><a href="#">All</a></li>
                  {filterList.map(lang => <li key={lang} className="uk-margin-small" data-uk-filter-control={`[data-lang*='${lang}']`}><a href="#">{lang}</a></li>)}
                </ul>

                <div className="js-filter uk-grid-medium uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-text-left " data-uk-grid="masonry:true" uk-height-match="target: > div > div > .uk-card; row: true">
                  {
                    repos?.map((project) => (
                      
                      <div key={project.id} data-lang={project.languages.join(' ') ?? ''} >
                                <ProjectCard data={project} key={project.id}></ProjectCard>
                      </div>
                    ))
                    }
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

 export async function getStaticProps(){
    const repos = await GithubService.fetchProjects(true)
    return { props: {repos}}
}