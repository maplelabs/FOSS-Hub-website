/**
 * Files generated using template generator
 */
import Link from "next/link";
import React from "react";

import { UltimateCardinalProps } from "./config";
import VerticalCard from "./components/VerticalCard";
import HorizontalCard from "./components/HorizontalCard";
import styles from "./styles.module.css";

export default function UltimateCardinal({
  title,
  cards,
}: UltimateCardinalProps) {
  return (
    <div id="Cards" className={"uk-width-1-1 " + styles.blogs_section}>
      <div className="uk-section uk-dark">
        <div className="uk-container">
          <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
            <div className="uk-h1 uk-text-bolder uk-margin-small-bottom color-midnight-blue">
              {title}
            </div>
            <div className={styles.view_all} hidden={true}>
              <Link
                className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder"
                href="Cards"
              >
                VIEW ALL
              </Link>
            </div>
          </div>
          <div className="uk-grid">
            {
             cards?.map((blog, index) =>
                  index == 0 ? (
                    <div className="uk-width-1-1" key={blog.slug}>
                      <HorizontalCard
                        key={blog.slug}
                        blog={blog}></HorizontalCard>
                    </div>
                  ) : (
                    <div
                      className="uk-width-1-3@l uk-width-1-2@m uk-width-1@s uk-text-left uk-grid-match uk-margin-medium-top"
                      key={blog.slug}>
                      <VerticalCard blog={blog} key={blog.slug}></VerticalCard>
                    </div>
                  )
                )
              }
          </div>
        </div>
      </div>
    </div>
  );
}
