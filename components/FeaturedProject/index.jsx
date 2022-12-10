import React, { useEffect } from 'react';
import styles from "../../styles/Home.module.css";
import ProjectCard from '../Project';


export default function FeaturedProject({data}){
    return (
      <div className="uk-width-1-1">
          <div className="uk-section uk-dark">
            <div className="uk-container">
              <div className="uk-flex uk-flex-between uk-margin-large-bottom">
                <div className="uk-h1 uk-text-bolder">
                    Featured Projects
                </div> 
                <div className={styles.view_all}>
                  <button className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder">
                  VIEW ALL
                  </button>
                </div>
              </div>    
              <div className="uk-child-width-1-3@m uk-text-left uk-grid-match" data-uk-grid>
                  {data.map(project=><ProjectCard data={project} key={project.id}></ProjectCard>)}
              </div>
            </div>
          </div>
        </div>
    )
}