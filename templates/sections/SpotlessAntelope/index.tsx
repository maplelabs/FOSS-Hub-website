/**
 * Files generated using template generator
 */
import React from "react";

import { SpotlessAntelopeProps } from "./config";
import Image from "next/image";
import styles from "./styles.module.css";

export default function SpotlessAntelope({
  id,
  title,
  subtitle,
  description,
  button,
  image
}: SpotlessAntelopeProps) {
  return (
    <div id={id} className="uk-width-1-1">
      <div
        className={`uk-section uk-background-cover uk-height-1-1 uk-padding-remove-horizontal ${styles["get-started-section"]}`}
      >
        <div className=" uk-container" style={{ position: "relative" }}>
          <div
            className={`uk-card uk-card-default uk-card-body uk-width-1-1 uk-child-width-1-2@m uk-child-width-1-1@s ${styles["get-started-section-card"]}`}
          >
            <div style={{ position: "relative", zIndex: 10 }}>
            <div className={`uk-h1 uk-text-bolder ${styles['color_midnight-blue']}`}>
                {title}
              </div>
              <p className={styles['color_nickel']}>{subtitle}</p>
              <hr className="uk-margin-remove-bottom" />
              <h3 className="uk-card-title uk-text-bold">{description}</h3>
              <button
                onClick={() => window.open(button.url, "_blank")}
                className="uk-button uk-button-primary  uk-text-bold"
                style={{ backgroundColor: "#0362A7", fontSize: "16px" }}
              >
                {button.text}
              </button>
            </div>
            <div className={`uk-position-bottom-right uk-visible@m ${styles['height_350']} `}>
              <Image
                src={`${image.url}`}
                fill={true}
                alt={"image"}
              ></Image>
            </div>
            <div className={`${styles['height_350']} uk-hidden@m`}></div>
            <div className={`uk-position-bottom uk-hidden@m ${styles['height_350']}`}>
              <Image
                src={`${image.url}`}
                fill={true}
                alt={"image"}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
