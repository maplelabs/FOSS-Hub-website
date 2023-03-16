import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import CONFIG from '../../service.config';
import { BlogConfig } from './config';

export const COLORS = [
  { bg: '#F8C02F', fg: '#000' },
  { bg: '#FE345A', fg: '#FFF' },
  { bg: '#6EB057', fg: '#000' },
  { bg: '#4A79D4', fg: '#FFF' },
  { bg: '#E78E3C', fg: '#000' },
  { bg: '#0362A7', fg: '#FFF' },
  { bg: '#F25875', fg: '#000' },
  { bg: '#101010', fg: '#FFF' },
  { bg: '#F46FBF', fg: '#000' },
  { bg: '#8F49C7', fg: '#FFF' },
];

class BlogService {
  blogs = {};
  config: BlogConfig;
  constructor() {
    this.config = CONFIG.blogs;
    this.config.dirPaths.map((dir) => {
      this.blogs[dir] = fs.readdirSync(path.join(process.cwd(), dir));
    });
  }
  getBlogs() {
    const blogs = Object.entries(this.blogs)
      .map(([dir, blogs]: [string, Array<string>], i) => {
        return blogs.map((fileName) => {
          const slug = fileName.replace('.md', '');
          const readFile = fs.readFileSync(
            path.join(process.cwd(), `${dir}/${fileName}`),
            'utf-8'
          );
          const { data: frontMatter } = matter(readFile);
          if (!frontMatter.authorAvatar) {
            frontMatter.authorAvatar = BlogService.getAuthorAvatar(
              frontMatter.author,
              i
            );
          }
          return {
            path: dir,
            slug,
            frontMatter,
          };
        });
      })
      .flat(1)
      .sort((a, b) =>
        new Date(b.frontMatter.date) > new Date(a.frontMatter.date) ? 1 : -1
      );
    return blogs;
  }

  getFeaturedBlogs() {
    const blogs = this.getBlogs().filter((blog) => blog.frontMatter.featured);
    return blogs;
  }

  static getAuthorAvatar(name, i = Math.floor(Math.random() * 3)) {
    return `https://ui-avatars.com/api/?background=${COLORS[i % 3].bg}&color=${
      COLORS[i % 3].fg
    }&name=${name}&size=128&font-size=0.4`;
  }

  getRecentBlogs(currentBlog) {
    const blogs = this.getBlogs()
      .filter((blog) => blog.frontMatter.title !== currentBlog.title)
      .slice(0, 3);
    const recentBlogs = blogs.map((blog) => ({
      slug: blog.slug,
      title: blog.frontMatter.title,
      thumbnail: blog.frontMatter.thumbnail,
      date: blog.frontMatter.date,
      path: blog.path,
    }));
    return recentBlogs;
  }

  getBlogContents(blogPath) {
    const fileName = fs.readFileSync(`${blogPath}.md`, 'utf-8');
    const { data: frontMatter, content } = matter(fileName);
    if (!frontMatter.authorAvatar) {
      frontMatter.authorAvatar = BlogService.getAuthorAvatar(
        frontMatter.author
      );
    }
    return { frontMatter, content };
  }
}

export default new BlogService();
