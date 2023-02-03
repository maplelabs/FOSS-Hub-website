import Link from "next/link"
import Image from "next/image"
export default function HorizontalBlogCard({ blog }) {
    return (
<>
<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
            <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
              <img src={blog.frontMatter.thumbnail} alt="" data-uk-cover />
              <canvas width="600" height="300"></canvas>
            </div>
            <div>
              <div className="uk-card-body">
                <h3 className="uk-card-title uk-text-bolder">{blog.frontMatter.title}</h3>
                <p>{blog.frontMatter.description}</p>
                <Link href={`blogs/${blog.slug}`}><button className='uk-text-bold uk-button uk-button-link'>Read More <span uk-icon="arrow-right"></span></button></Link>
                <div className='uk-flex uk-flex-middle uk-margin-top'>
                  <Image src={blog.frontMatter.author_avatar} width={40} height={40} className='uk-border-circle' style={{ border: '1px solid #D9D9D9' }} />
                  <div className='uk-text-bold uk-margin-small-left'>{blog.frontMatter.author}</div>
                </div>
              </div>
            </div>
          </div></>
    )
}