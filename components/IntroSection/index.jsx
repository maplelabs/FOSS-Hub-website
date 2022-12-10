import  React, { useEffect } from 'react';
import UIkit from 'uikit';
import styles from "../../styles/Home.module.css";


export default function IntroSection(){
    useEffect(()=>{
        // const el = UIkit.util.$('#intro-section')
        // UIkit.scrollspy(el,{repeat: true, delay: 100});
        // return ()=>{
        //     UIkit.scrollspy.$destroy()
        // }
      },[])
    return (
<div >
          <div
            className={
              "uk-section uk-light uk-background-cover uk-height-1-1 " +
              styles["intro-background"]
            }
          >
            <div className="uk-container uk-container uk-flex">
              <div id="intro-section"
                className="uk-flex uk-flex-column uk-flex-center uk-height-1-1 "
                style={{ height: "70vh" }}
              >
                <div className="uk-heading-small color-white">
                  Embracing Collabration.
                </div>
                <div className="uk-heading-small uk-margin-remove-top uk-text-bolder color-white">
                  Embracing Open&nbsp;Source.
                </div>
                <div className="uk-text color-white">
                  We at MapleLabs believe open source solves real-world
                  problems. We are a passionate, open-minded and focused group
                  of software enthusiasts pushing boundaries with an aim to
                  create unpralleled software experience.
                </div>
                <div className="uk-padding uk-padding-remove-horizontal">
                  <button className="uk-button uk-button-primary uk-button">
                    {" "}
                    <span
                      uk-icon="github"
                      className="uk-margin-small-right uk-icon"
                    ></span>
                    Maplelabs on GitHub
                  </button>
                </div>
              </div>
              <div className="uk-width-1-1"></div>
            </div>
          </div>
        </div>
    )
}