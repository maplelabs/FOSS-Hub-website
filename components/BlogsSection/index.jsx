import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from "../../styles/Home.module.css";
import BlogCard from '../BlogCard';
import HorizontalBlogCard from '../HorizontalBlogCard';

export default function BlogsSection({ data }) {
  return (
    <div id='blogs' className={"uk-width-1-1 " + styles.blogs_section}>
      <div className="uk-section uk-dark">
        <div className="uk-container">
          <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
            <div className="uk-h1 uk-text-bolder uk-margin-small-bottom color-midnight-blue">
              Blogs
            </div>
            <div className={styles.view_all} hidden="true">
              <Link className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder" href='blogs'>
                VIEW ALL
              </Link>
            </div>
          </div>
          {data.length > 3 ?
            <>
              <HorizontalBlogCard blog={data[0]}></HorizontalBlogCard>
              <div className="uk-child-width-1-3@l uk-child-width-1@s uk-text-left uk-grid-match" data-uk-grid>
                {data.slice(1).map((blog) =>
                  <BlogCard blog={blog} key={blog.slug}></BlogCard>)}
              </div>
            </> : <> {data.map((blog) => <HorizontalBlogCard blog={blog}></HorizontalBlogCard>)}
            </>
          }
        </div>
      </div>
    </div>
  )
}