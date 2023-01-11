import BlogCard from "../../components/BlogCard"
import Breadcrumb from "../../components/Breadcrumb"
import Layout from "../../components/Layout"
import blogService from "../../services/BlogService"

export default function Blogs({ blog }) {
   
    return (
        <>
            <div className="uk-flex uk-flex-between">
                <div className="uk-heading-small uk-text-bolder uk-text-left">
                    Blog
                </div>
                <div className="uk-margin">
                    <form className="uk-search uk-search-default">
                        <span className="uk-search-icon-flip" uk-search-icon="true"></span>
                        <input className="uk-search-input" type="search" placeholder="Search for article" />
                    </form>
                </div>
            </div>
            <div className="uk-child-width-1-3@l uk-child-width-1@s uk-text-left uk-grid-match" data-uk-grid>
                {blog.map(blog =>
                   <BlogCard blog={blog} key={blog.slug}></BlogCard>
                )}
            </div>
        </>)
}

Blogs.getLayout = function getLayout(blogs) {
    return (
        <Layout>
            <Breadcrumb link='/blogs' heading='Blog' child={blogs}></Breadcrumb>
        </Layout>
    )
}


export async function getStaticProps() {

    const blog = blogService.getBlogs()

    return { props: { blog } }
}