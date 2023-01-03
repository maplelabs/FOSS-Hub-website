
import GithubService from "../../services/GithubService"
import ProjectCard from "../../components/Project"
import Breadcrumb from "../../components/Breadcrumb"
import Layout from "../../components/Layout"
import React, { useEffect } from "react"
export default function Project({ repos }) {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    setProjects(repos)
  }, [])
  let tags = []
  let langs = []
  repos.map((i) => { langs.push(...i.languages); tags.push(...i.topics) })
  let filteredLang = new Set()
  let filteredTags = new Set()
  langs.forEach((i) => !filteredLang.has(i) && filteredLang.add(i))
  tags.forEach((i) => !filteredTags.has(i) && filteredTags.add(i))
  tags = [...filteredTags]
  const filterList = [...filteredLang]
  const [langCheck, setLangCheck] = React.useState([]);
  const [tagCheck, setTagCheck] = React.useState([])

  useEffect(() => {
    const filter = () => {
      let filteredRepos = [];
      let result = [];
      tagCheck.length ? tagCheck.map(i => {
          filteredRepos.push(repos.filter((repo) => repo.topics.includes(i)))
      }) : (filteredRepos = repos);
      filteredRepos = [].concat(...filteredRepos)

      langCheck.length ? langCheck.map(i => {
          result.push(filteredRepos.filter((repo) => repo.languages.includes(i)))
      }) : (result = filteredRepos)
      let list = new Set()

      result = [].concat(...result)
      result.forEach((i) => !list.has(i) && list.add(i))
      setProjects([...list])
    }
    filter();
  }, [langCheck, tagCheck])

  const handleChange = (e) => {

    const { value, checked, name } = e.target;

    console.log(`${value} is ${checked}`);
    if (name === 'languages') {
      if (checked) {
        setLangCheck([...langCheck, value]);
      }
      else {
        setLangCheck(langCheck.filter((e) => e !== value));
      }
    }
    else if (name === 'tags') {
      if (checked) {
        setTagCheck([...tagCheck, value]);
      }
      else {
        setTagCheck(tagCheck.filter((e)=> e !== value));
      }
    }
  };

  return (
    <>
      <div className="uk-flex uk-flex-between">
        <div className="uk-heading-small uk-text-bolder uk-text-left">
          Projects
        </div>
        <div className="uk-margin">
          <form className="uk-search uk-search-default">
            <span className="uk-search-icon-flip" uk-search-icon="true"></span>
            <input className="uk-search-input" type="search" placeholder="Search for project" />
          </form>
        </div>
      </div>

      <ul className="uk-subnav uk-subnav-pill uk-text-bold">
      <li>
          <button type="button" className="uk-text-bold">All  Tags <span uk-icon="chevron-down"></span></button>
          <div uk-dropdown="pos: bottom-left; mode: click">
            <form className="uk-nav uk-dropdown-nav uk-text-bold">
              <div className="uk-margin-small">
                {/* <input
                  className="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  name="tags"
                  value="All"
                  onChange={handleChange}
                /> */}
                <label>
                  All Tags
                </label>
              </div>
              {tags.map(lang => <div className="uk-margin-small">
                <input
                  className="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  name="tags"
                  value={lang}
                  onChange={handleChange}
                />
                <label>
                  {lang}
                </label>
              </div>)}

            </form>
          </div>
        </li>
        <li>
          <button type="button" className="uk-text-bold">All  Languages <span uk-icon="chevron-down"></span></button>
          <div uk-dropdown="pos: bottom-left; mode: click">
            <form className="uk-nav uk-dropdown-nav uk-text-bold">
              <div className="uk-margin-small">
                {/* <input
                  className="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  name="languages"
                  value="All"
                  onChange={handleChange}
                /> */}
                <label>
                  All Languages
                </label>
              </div>
              {filterList.map(lang => <div className="uk-margin-small">
                <input
                  className="uk-checkbox uk-margin-small-right"
                  type="checkbox"
                  name="languages"
                  value={lang}
                  onChange={handleChange}
                />
                <label>
                  {lang}
                </label>
              </div>)}
            </form>
          </div>
        </li>
      </ul>
      <div data-uk-filter="target: .js-filter" className="uk-margin-small-top">

        {/* <ul className="uk-subnav uk-subnav-pill uk-text-bold">
           <li className="uk-active " key='All' data-uk-filter-control=""><a href="#">All</a></li>
          {filterList.map(lang => <li key={lang} className="uk-margin-small" data-uk-filter-control={`[data-lang*='${lang}']`}><a href="#">{lang}</a></li>)} 
          <li >
            <button type="button" className="uk-text-bold">All Categories<span uk-icon="chevron-down"></span></button>
          </li>
          <li>
            <button type="button" className="uk-text-bold">All Tags  <span uk-icon="chevron-down"></span></button>
            <div uk-dropdown="mode: click; pos: bottom-center">
              <ul className="uk-nav uk-dropdown-nav uk-text-bold">
                <li className="uk-active " key='All' data-uk-filter-control=""><label >All Tags</label></li>
                {tags.map(tag => <li key={tag} className="uk-margin-small" uk-filter-control={`filter: [data-tag*='${tag}']; group: data-tag`}><label><input className="uk-checkbox uk-margin-small-right" type="checkbox" />{tag}</label></li>)}
              </ul>

            </div>
          </li>
          <li>
            <button type="button" className="uk-text-bold">All  Languages <span uk-icon="chevron-down"></span></button>
            <div uk-dropdown="pos: bottom-center; mode: click">
              <ul className="uk-nav uk-dropdown-nav uk-text-bold">
                <li className="uk-active " key='All' data-uk-filter-control=""><a href="#">All Languages</a></li>
                {filterList.map(lang => <li key={lang} className="uk-margin-small" uk-filter-control={`filter: [data-lang*='${lang}']; group: lang`}><a href="#">{lang}</a></li>)}
              </ul>
            </div>

          </li>
          <li>
            <button type="button" className="uk-text-bold">All  Languages <span uk-icon="chevron-down"></span></button>
            <div uk-dropdown="pos: bottom-center; mode: click">
              <ul className="uk-nav uk-dropdown-nav" >
                <li className="uk-active " key='All' data-uk-filter-control=""> <label>All Languages</label></li>
                {filterList.map(lang => <li key={lang} className="uk-margin-small" uk-filter-control={`filter: [data-lang*='${lang}']; group: lang`}><label><input className="uk-checkbox uk-margin-small-right" type="checkbox" />{lang}</label></li>)}

              </ul>
            </div>
          </li>
        </ul> */}
       
        <div className="js-filter uk-grid-medium uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-text-left " data-uk-grid="masonry:true" uk-height-match="target: > div > div > .uk-card; row: true">
          {
            projects?.map((project) => (
              <div key={project.id} data-lang={project.languages.join(' ') ?? ''} data-tag={project.topics.join(' ') ?? ''}>
                <ProjectCard data={project} key={project.id}></ProjectCard>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

Project.getLayout = function getLayout(project) {
  return (
    <Layout>
      <Breadcrumb link='/projects' heading='Project' child={project}></Breadcrumb>
    </Layout>
  )
}

export async function getStaticProps() {
  const repos = await GithubService.fetchProjects(true)
  return { props: { repos } }
}