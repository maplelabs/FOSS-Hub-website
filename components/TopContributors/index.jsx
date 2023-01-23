import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function TopContributors({ data }) {
  return (
    <div className={"uk-width-1-1 " + styles.top_contrib_overlay}>
      <div className="uk-section ">
        <div className="uk-container">
          <div className="uk-flex uk-flex-left uk-margin-large-bottom uk-light">
            <div>
              <div className="uk-h1 uk-text-bolder">Top Contributors</div>
              <div className="uk-width-2-3 uk-text-primary">
                Meet our contributers who believe in the notion that open source
                brings the best out in people. Join us in building the future
                with open source.
              </div>
            </div>
          </div>

          <div
            className="uk-grid-column-small uk-grid-row-medium uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s uk-text-left"
            data-uk-grid
          >
            {data.map((user) => (
              <div key={user.login}>
                <div className="uk-card uk-card-small uk-card-default uk-card-body uk-dark  uk-margin-small-right">
                  <Image
                    className="uk-border-circle"
                    width="40"
                    height="40"
                    src={user.avatar_url}
                    alt={user.login}
                    style={{ border: "1px solid #D9D9D9" }}
                  />
                  <h3 className="uk-card-title uk-text-bolder uk-margin-small-top">
                    {user.name || user.login}
                  </h3>
                  <p className=" uk-margin-remove-top">{user._repo[0]}</p>
                  <Link href={user.html_url} target='_blank'>
                  <button className="uk-button uk-button-link uk-button uk-link uk-text-primary">
                    {" "}
                    <span
                      uk-icon="github"
                      className="uk-margin-small-right"
                    ></span>
                    View on GitHub
                  </button></Link>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
