/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import md from 'markdown-it';
import { AnnualFishProps } from './config';
import styles from './styles.module.css';
import RecentBlogCard from './components/RecentBlogCard'

export default function AnnualFish({ content, frontMatter, recentBlogs }: AnnualFishProps) {
    const [html, setHtml] = useState();
    //const [time, setTime] = useState(3);
    useEffect(() => {
        //setTime(Math.ceil(content.match(/\w+/g).length / 200));
        const renderedHtml = md().render(content)
        setHtml(renderedHtml)
    }, [content])
    return <div>
        <div>
            <img className={styles.banner + ' ' + styles['img-style']} src={frontMatter.thumbnail} alt=''></img>
        </div>
        <div className={`uk-container`}>

            <nav aria-label="Breadcrumb">
                <ul className="uk-breadcrumb uk-margin-small-top">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">{frontMatter.title}</Link></li>
                </ul>
            </nav>
            <div className='uk-flex uk-position-relative'>
                <div className='uk-width-4-5@l uk-margin-medium-right'>
                    <h1 className={' uk-text-bolder uk-margin-small-bottom uk-padding uk-padding-remove-left uk-padding-remove-top '}>{frontMatter.title}</h1>
                    <div className={styles.blog_content + ' uk-padding uk-padding-remove-left uk-padding-remove-top '} dangerouslySetInnerHTML={{ __html: html }} />
                </div>

                <div className={styles.sidebar_right + ' uk-visible@l uk-width-2-5@l'}>
                    <div>
                        {recentBlogs.length > 0 &&
                            <><h2 className='uk-text-bolder'>Recent Posts</h2>
                                <ul className="uk-nav uk-nav-default">
                                    {recentBlogs.map((data) => <li key={data.slug} className='uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top'><RecentBlogCard blog={data} /></li>
                                    )}
                                </ul>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

}
