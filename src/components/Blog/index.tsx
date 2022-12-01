
import React from 'react';
import data from '../../data/blogs-data'

export default function Blog(): JSX.Element {
    return (<>
        <section className="uk-section ">
            <div className="uk-container">
                <h1 className="uk-text-bolder uk-text-center uk-margin-large-bottom">
                    Latest Blogs
                </h1>
                <div className="uk-slider-container-offset" uk-slider="center: true">

                    <div className="uk-position-relative " tabIndex={-1}>

                        <ul className="uk-slider-items uk-child-width-1 uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid" uk-height-match="target: > li > .uk-card">
                            {data && data.map((blog)=>(
                            <li key={blog.id}>
                                <a className="uk-card uk-card-default uk-card-hover uk-card-body uk-link-toggle uk-padding-remove" //target="_blank"rel="noopener noreferrer"
                                    href={blog.url}>
                                    <div className="uk-card-media-top">
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h2 className="uk-card-title uk-link-heading">{blog.title}</h2>
                                        <p className='uk-margin-medium-bottom'>{blog.description}</p>
                                    </div>
                                    <div className="uk-position-bottom-left uk-overlay uk-overlay-default uk-padding-small">
                                    {blog.authorImage ? 
                                            <img
                                                className="uk-comment-avatar uk-margin-right uk-border-cicle uk-box-shadow-medium"
                                                uk-tooltip={`title: '${blog.authorName}'; pos: bottom`}
                                                src={blog.authorImage}
                                                width="40"
                                                height="40"
                                                alt=""
                                            /> : <span uk-icon="icon: user; ratio: 1.5">&nbsp;</span>
                                    }
                                            <span className='uk-padding-small'>{blog.authorName}</span>
                                    </div>
                                    <div className="uk-position-bottom-right uk-overlay uk-overlay-default uk-padding-small">
                                        <span
                                            className="uk-link-heading"
                                            uk-icon="icon:sign-out; ratio:1.2"
                                        ></span>
                                    </div>
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                </div>
                <div className='uk-align-right uk-margin-medium-top'>
                    <a className="uk-button uk-button-text uk-link-toggle" target="_blank" href="https://maplelabsblr.sharepoint.com/"><span className='uk-link-heading'>View All Blogs <span uk-icon="arrow-right"></span></span></a>
                </div>
            </div>
        </section>
    </>)
}
