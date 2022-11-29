import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import Services from '../services/services';

function HomepageHeader() {
 // const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="uk-background-fixed uk-background-cover uk-background-center-center bg">
        <div className="container uk-flex uk-flex-between uk-height-1-1">
          <div className='uk-flex uk-flex-center uk-flex-column uk-flex-top uk-height-1-1 '>
            <div className='uk-heading-medium color-white'><i>Embracing</i> Collabration.</div>
            <div className='uk-heading-medium uk-text-bolder color-white'><i>Embracing</i> Open&nbsp;Source.</div>
            {/* <h1 className='uk-text-bold color-white'>Embracing Open Source</h1> */}
          </div>
          <a className='uk-visible@m uk-flex uk-flex-center uk-flex-column uk-align-center uk-height-1-1' href='https://github.com/maplelabs' target="blank">
            <div className='uk-overlay uk-position-center-right uk-padding-remove'>
              <div className="uk-card uk-card-primary uk-card-body uk-height-medium uk-card-large">
                <span className='uk-text-center uk-card-title'><span uk-icon="icon: github; ratio: 5"></span>
                  <h2 className="uk-card-title">MapleLabs</h2>
                </span>
                <div className="uk-position-bottom-right uk-overlay uk-padding-small uk-link-heading"> <span uk-icon="icon:sign-out; ratio: 1.5"></span></div>

              </div>
            </div>
          </a>
          <a className='uk-hidden@m uk-flex uk-flex-center uk-flex-column uk-align-center uk-height-1-1' href='https://github.com/maplelabs' target="blank">
            <div className='uk-overlay uk-position-bottom uk-padding-remove'>
              <div className="uk-card uk-card-primary uk-card-body  uk-card-small">
                <p className='uk-text-left uk-card-title uk-margin-remove'><span uk-icon="icon: github; ratio: 2"></span>
                  <span className="uk-card-title  uk-margin-left">MapleLabs</span>
                </p>
                <div className="uk-position-center-right uk-overlay uk-padding-small uk-link-heading"> <span uk-icon="icon:sign-out; ratio: 1.5"></span></div>

              </div>
            </div>
          </a>

        </div>
      </div>


    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  Services()

  return (
    <>
      <Layout
        title={`${siteConfig.title}`}
        description="OpenSource @ MapleLabs: Get involved in open source communities, discover projects and learn about MapleLabs opensource program.">
        <HomepageHeader />
        <main className='uk-height-1-1'>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
