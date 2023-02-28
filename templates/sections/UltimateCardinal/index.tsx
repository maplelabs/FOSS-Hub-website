/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React from 'react';

import { UltimateCardinalProps } from './config';
import VerticalCard from './VerticalCard';
import HorizontalCard from './HorizontalCard';
import styles from './styles.module.css';

export default function UltimateCardinal({
    title,
    Blogs
}:UltimateCardinalProps) {
    return (
        <div id='blogs' className={"uk-width-1-1 " + styles.blogs_section}>
          <div className="uk-section uk-dark">
            <div className="uk-container">
              <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
                <div className="uk-h1 uk-text-bolder uk-margin-small-bottom color-midnight-blue">
                  {title}
                </div>
                <div className={styles.view_all} hidden={true}>
                  <Link className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder" href='blogs'>
                    VIEW ALL
                  </Link>
                </div>
              </div>
              {true ?
                <>
                  <HorizontalCard key={Blogs[0].slug} blog={Blogs[0]}></HorizontalCard>
                  <div className="uk-child-width-1-3@l uk-child-width-1@s uk-text-left uk-grid-match" data-uk-grid>
                    {Blogs.slice(1).map((blog) =>
                      <VerticalCard blog={blog} key={blog.slug}></VerticalCard>)}
                  </div>
                </> : <> {Blogs.map((blog) => <HorizontalCard key={blog.slug} blog={blog}></HorizontalCard>)}
                </>
              }
            </div>
          </div>
        </div>
      )
}
