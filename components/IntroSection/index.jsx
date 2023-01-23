import  React, { useEffect } from 'react';
import UIkit from 'uikit';
import styles from "../../styles/Home.module.css";
import { textInintroSection1, textInintroSection2, introSectionDescription, githubUrl, organizationName } from '../../maplelabs.config';

export default function IntroSection(){

    return (
      <div className={styles.container}>
<div className={styles['intro-section']}>
          <div
            className={
              "uk-section uk-light uk-background-cover uk-height-1-1 uk-padding-small uk-padding-remove-horizontal " +
              styles["intro-background"]
            }
          >
            <div className="uk-container uk-container uk-flex">
              <div id="intro-section"
                className="uk-flex uk-flex-column uk-flex-center uk-height-1-1 "
                 style={{ height: "65vh" }}
              >
                <div className="uk-heading-small color-white">
                  {textInintroSection1}
                </div>
                <div className="uk-heading-small uk-margin-remove-top uk-text-bolder color-white">
                  {textInintroSection2}
                </div>
                <div className="uk-text color-white">
                  {introSectionDescription}
                </div>
                <div className="uk-padding uk-padding-remove-horizontal">
                  <a className="uk-button uk-button-primary uk-button uk-text-bold" href={githubUrl} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <span
                      uk-icon="github"
                      className="uk-margin-small-right uk-icon"
                    ></span>
                    {organizationName} on GitHub
                  </a>
                </div>
              </div>
              <div className="uk-width-1-1"></div>
            </div>
          </div>
        </div>
        </div>
    )
}