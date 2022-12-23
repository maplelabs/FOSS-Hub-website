import Link from "next/link"
import Image from "next/image"

export default function BlogCard({ blog }) {
    return (
        <>
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src={blog.frontMatter.thumbnail} width="1800" height="1200" alt="" />
                    </div>
                    <div class="uk-card-body">
                        <h4 className="uk-text-bolder">{blog.frontMatter.title}</h4>
                        <p>{blog.frontMatter.description}</p>
                        <Link href={`blogs/${blog.slug}`}><button className='uk-text-bold uk-button uk-button-link'>Read More <span uk-icon="arrow-right"></span></button></Link>
                        <div className='uk-flex uk-flex-middle uk-margin-top'>
                            <Image src={blog.frontMatter.author_avatar} width={40} height={40} className='uk-border-circle' style={{ border: '1px solid #D9D9D9' }} />
                            <div className='uk-text-bold uk-margin-small-left'>{blog.frontMatter.author}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
