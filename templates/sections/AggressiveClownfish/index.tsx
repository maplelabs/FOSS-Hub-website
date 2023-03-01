/**
 * Files generated using template generator
 */
import React from 'react';

import { AggressiveClownfishProps } from './config';
import styles from './styles.module.css';

export default function AggressiveClownfish({
  title1,
  title2,
  description,
  button,
  backgroundImage
}: AggressiveClownfishProps) {
  return (
  <div className={styles.container}>
    <div className={`${styles["intro-section"]}`}>
      <div
        className={`uk-section uk-light uk-background-cover uk-height-1-1 uk-padding-small uk-padding-remove-horizontal
            ${styles["intro-background"]}`} style={{backgroundImage: `url("${backgroundImage}")`}}>
        <div className="uk-container uk-container uk-flex">
          <div
            id="intro-section"
            className={
              "uk-padding uk-padding-remove-horizontal uk-flex uk-flex-column uk-flex-center uk-height-1-1 " +
              styles["content-height"]
            }>
            <div className="uk-heading-small color-white uk-margin-remove-bottom">
              {title1}
            </div>
            <div className="uk-heading-small uk-margin-remove-top uk-text-bolder color-white">
              {title2}
            </div>
            <div className="uk-text uk-width-4-5">
              {description}
            </div>
            <div className="uk-padding uk-padding-remove-horizontal">
              <a
                className="uk-button uk-button-primary uk-button uk-text-bold color-black"
                href={button.url}
                target="_blank"
                rel="noopener noreferrer">
                {" "}
                <span
                  uk-icon={button.icon}
                  className="uk-margin-small-right uk-icon"></span>
                {button.text}
              </a>
            </div>
          </div>
          <div className="uk-width-1-1"></div>
        </div>
      </div>
    </div>
  </div>)
}