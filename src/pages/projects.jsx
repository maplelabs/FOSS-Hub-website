import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ProjectCard from "../components/Project";
function projects() {
  const [repos, setRepos] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    const repoList = JSON.parse(localStorage.getItem("repos")) || []
    setRepos(repoList)
    setFilterList([...new Set(repoList.map(i => i.language).filter(i => i))])

  }, [])

  return (
    <>
      <Layout
        title={`${siteConfig.title}`}
        description="OpenSource @ MapleLabs: Get involved in open source communities, discover projects and learn about MapleLabs opensource program.">

        <main>
          <div className=" uk-section uk-section-muted uk-height-1-1">
            <div className="uk-container">
              <div className="uk-heading-small uk-text-bolder uk-text-left">
                Open Source Projects
              </div>
              <div data-uk-filter="target: .js-filter" className="uk-margin-large-top">

                <ul className="uk-subnav uk-subnav-pill">
                  <li className="uk-active" key='All' data-uk-filter-control=""><a href="#">All</a></li>
                  {filterList.map(lang => <li key={lang} data-uk-filter-control={`[data-lang='${lang}']`}><a href="#">{lang}</a></li>)}
                </ul>

                <div className="js-filter uk-grid-large uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-text-left   uk-grid-row-large" data-uk-grid="masonry:true" >
                  {
                    repos?.map((project) => (
                      <div key={project.id} data-lang={project.language ?? ''} >
                                <ProjectCard project={project} ></ProjectCard>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default projects;
