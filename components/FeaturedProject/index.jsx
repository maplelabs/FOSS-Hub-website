import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from "../../styles/Home.module.css";
import ProjectCard from '../Project';
import ProjectsTable from '../ProjectsTable';


export default function FeaturedProject({data}){
  const [tabularView, setTabularView] = React.useState(true);
    return (
      <div id='projects' className="uk-width-1-1">
          <div className="uk-section uk-dark" style={{marginBottom:'-20px'}}>
            <div className="uk-container">
              <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
                <div className="uk-h1 uk-text-bolder uk-margin-small-bottom color-midnight-blue">
                    Featured Projects
                </div> 
                <div className={styles.view_all} hidden={true}>
                  <Link className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder" href='projects'>
                  VIEW ALL
                  </Link>
                </div>
                <div>
                <button
                  className="tabView"
                  type="button"
                  uk-icon={tabularView ? "icon: list" : "icon:thumbnails"}
                  onClick={() => setTabularView(!tabularView)}
                ></button>
                </div>
              </div>
              {tabularView ? ( 
              <div className="uk-child-width-1-4@m uk-text-left uk-grid uk-grid-small uk-grid-match" data-uk-grid>
                  {data.map(project=><ProjectCard data={project} key={project.id}></ProjectCard>)}
              </div> ) : (
                <ProjectsTable data={data} key={data.id}></ProjectsTable>
              )}
            </div>
          </div>
        </div>
    )
}