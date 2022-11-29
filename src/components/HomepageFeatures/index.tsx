import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ActiveProjects from '../ActiveProjects'
import Contributors from "../TopContributors/index";
import Blog from "../Blog";


type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Featured Open Source Projects",
    description: (
      <>
        <p className={styles.p}>
          Many MapleLabs products and services are built on open source software.
          Explore some of the projects we lead and contribute to below.
        </p>
        <Link className="button button--primary" to='/projects'>
          View All Projects
        </Link>
      </>
    ),
  },

];

function Feature({ title, description }: FeatureItem) {
  return (
    <>
      <div className="padding-horiz--md">
        <div className="text--center padding-vert--lg">
          <h2><strong>{title}</strong></h2>
          {description}
        </div>
      </div>
    </>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className="uk-section  ">
        <div className="uk-container">
          <h1 className="uk-text-bolder uk-text-center">
          At MapleLabs we contribute back
          </h1>
          <div className=" uk-text-center">
          We at MapleLabs believe open source solves real-world problems. We are a passionate, open-minded and focused group of software enthusiasts pushing boundaries with an aim to create unpralleled software experience.
          </div>
        </div>
      </section>
      <ActiveProjects></ActiveProjects>
      <Blog></Blog>
      <Contributors></Contributors>
    </>
  );
}
