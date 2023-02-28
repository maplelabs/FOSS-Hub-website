import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VerticalCard({ blog }) {
    return (
      <>
        <div>
          <div class="uk-card uk-card-default uk-card-hover">
            <div class="uk-card-media-top">
              <img
                src={blog.thumbnail}
                width="1800"
                height="1200"
                alt=""
              />
            </div>
            <div class="uk-card-body uk-margin-medium-bottom">
              <h4 className="uk-text-bolder">{blog.title}</h4>
              <p>{blog.description}</p>
              <div class="uk-position-bottom uk-padding uk-padding-remove-bottom uk-margin-medium-bottom uk-flex uk-flex-between">
                <Link href={`blogs/${blog.slug}`}>
                  <button className="uk-text-bold uk-button uk-button-link">
                    Read More <span uk-icon="arrow-right"></span>
                  </button>
                </Link>
                <div>
                  <Image
                    src={blog.author_avatar}
                    width={40}
                    height={40}
                    className="uk-border-circle"
                    style={{ border: '1px solid #D9D9D9' }}
                  />
                  {/* <div className='uk-text-bold uk-margin-small-left'>{blog.frontMatter.author}</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }