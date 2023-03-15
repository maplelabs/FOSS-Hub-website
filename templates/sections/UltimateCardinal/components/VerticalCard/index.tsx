import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '../../config';

export default function VerticalCard({ blog }: CardProps) {
  return (
    <>
      <div>
        <div className="uk-card uk-card-default uk-card-hover">
          <div className="uk-card-media-top">
            <img src={blog.thumbnail} width="1800" height="1200" alt="" />
          </div>
          <div className="uk-card-body uk-margin-medium-bottom">
            <h4 className="uk-text-bolder">{blog.title}</h4>
            <p>{blog.description}</p>
            <div className="uk-position-bottom uk-padding uk-padding-remove-bottom uk-margin-medium-bottom uk-flex uk-flex-between">
              <Link href={`blogs/${blog.slug}`}>
                <button className="uk-text-bold uk-button uk-button-link">
                  Read More <span uk-icon="arrow-right"></span>
                </button>
              </Link>
              <div>
                <Image
                  src={blog.authorAvatar}
                  width={40}
                  height={40}
                  className="uk-border-circle"
                  alt={blog.author}
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
