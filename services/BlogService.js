import Axios from 'axios'
import fs from 'fs'
import matter from 'gray-matter';

class BlogService {
    blogs
    constructor(){
        this.blogs = fs.readdirSync('blogs');
        
    }
    getBlogs(){
        const blogs = this.blogs.map((fileName) => {
            const slug = fileName.replace('.md', '');
            const readFile = fs.readFileSync(`blogs/${fileName}`, 'utf-8');
            const { data: frontMatter } = matter(readFile);
            return {
              slug,
              frontMatter,
            };
        });
        return blogs
    }

    getFeaturedBlogs(){
       const blogs = this.getBlogs().filter(blog=>blog.frontMatter.featured || blog.frontMatter.starred)
       return blogs
    }
}

export default new BlogService()