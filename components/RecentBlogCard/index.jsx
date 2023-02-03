import Link from "next/link"
export default function RecentBlogCard({ blog }) {
    return (
        <>
            <div className="uk-card uk-margin-small-bottom" uk-grid>
                <div className="uk-card-media-left uk-cover-container uk-flex">
                <img src={blog.frontMatter.thumbnail} alt="" uk-cover width={178}  />
                    <div className="uk-padding-small uk-margin-small-left uk-padding-remove-vertical uk-padding-remove-right">
                    <h5 className="uk-margin-remove uk-text-bold" style={{lineHeight:'1.3'}}>{blog.frontMatter.title}</h5>
                    <div className="uk-text">{new Date(blog.frontMatter.date).toDateString()}</div>
                    <Link href={`/blogs/${blog.slug}`}><button className='uk-text-bold uk-button uk-button-link color-blue uk-margin-small-bottom'>Read More <span uk-icon="arrow-right"></span></button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
