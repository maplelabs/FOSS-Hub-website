import Link from 'next/link';

import { RecentBlogCardProps } from '../../config';
import styles from '../../styles.module.css';

export default function RecentBlogCard({ blog }:RecentBlogCardProps) {
    return (
        <>
            <div className="uk-card uk-margin-small-bottom" uk-grid>
                <div className="uk-card-media-left uk-cover-container uk-flex">
                <img src={blog.thumbnail} alt="" className={styles["recent_thumbnail"]} />
                    <div className="uk-padding-small uk-margin-small-left uk-padding-remove-vertical uk-padding-remove-right">
                    <h5 className="uk-margin-remove uk-text-bold">{blog.title}</h5>
                    <div className="uk-margin-small-top uk-text-uppercase">
                        <div className="uk-text">{new Date(blog.date).toLocaleDateString('en-US', {day: 'numeric',month: 'short',year: 'numeric'})}</div>
                        <Link href={`${blog.path}/${blog.slug}`}><button className={`uk-text-bold uk-button uk-button-link uk-margin-small-bottom ${styles['color_blue']}`}>Read Article <span uk-icon="arrow-right"></span></button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
