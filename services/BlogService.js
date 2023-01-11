import fs from 'fs'
import matter from 'gray-matter';
import path from 'path';

const COLORS=[
    {bg:'F8C02F',fg:'4E2E07'},
    {bg:'0362A7',fg:'FFF'},
    {bg:'FE345A',fg:'FFF'}
]
class BlogService {
    blogs
    constructor(){
        this.blogs = fs.readdirSync(path.join(process.cwd(), 'blogs'));
        
    }
    getBlogs(){
        const blogs = this.blogs.map((fileName,i) => {
            const slug = fileName.replace('.md', '');
            const readFile = fs.readFileSync(path.join(process.cwd(),`blogs/${fileName}`), 'utf-8');
            const { data: frontMatter } = matter(readFile);
            if(!frontMatter.author_avatar){
                frontMatter.author_avatar=`https://ui-avatars.com/api/?background=${COLORS[i%3].bg}&color=${COLORS[i%3].fg}&name=${frontMatter.author}&size=128&font-size=0.4`
            }
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

    getAuthorAvatar(name){
        const i = Math.floor(Math.random() * 3)
        return `https://ui-avatars.com/api/?background=${COLORS[i%3].bg}&color=${COLORS[i%3].fg}&name=${name}&size=128&font-size=0.4`
    }

}

export default new BlogService()