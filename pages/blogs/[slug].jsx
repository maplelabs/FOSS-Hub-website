import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RecentBlogCard from '../../components/RecentBlogCard';
import BlogService from '../../services/BlogService';
import styles from '../../styles/Blog.module.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export async function getStaticPaths() {
  const files = fs.readdirSync('blogs');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {


  const fileName = fs.readFileSync(`blogs/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  if (!frontmatter.author_avatar) {
    frontmatter.author_avatar = BlogService.getAuthorAvatar(frontmatter.author)
  }
  const blog = BlogService.getRecentBlogs(frontmatter)

  return {
    props: {
      frontmatter,
      content,
      blog
    },
  };
}

export default function Blog({ frontmatter, content, blog }) {
  const [time, setTime] = useState(3);
  const [html, setHtml] = useState();
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setTime(Math.ceil(content.match(/\w+/g).length / 200));
    const renderedHtml = md().use(require('markdown-it-github-headings'), { prefix: 'section-' }).render(content)
    const labelList = content.match(/\n#{1,6}.+/g).map(val => val.replace(/\n#{1,6} /g, ''))
    const sectionList = renderedHtml.match(/id="section-(.*?)"/g).map((val, i) => {
      const id = val.replace(/id="/g, '#').replace('"', '');
      return { id, label: labelList[i] }
    })
    setSections(sectionList)
    setHtml(renderedHtml)
  }, [content])
  return (
    <div>
      <div>
        <img className={styles.banner + ' ' + styles['img-style']} src={frontmatter.banner} alt=''></img>
      </div>
      <div className={`uk-container`}>
        
      <nav aria-label="Breadcrumb">
          <ul className="uk-breadcrumb uk-margin-small-top">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">{frontmatter.title}</Link></li>
          </ul>
        </nav>
        <div className='uk-flex uk-position-relative'>
        <div className='uk-width-4-5@l uk-margin-medium-right'>
        <h1 className={' uk-text-bolder uk-margin-small-bottom uk-padding uk-padding-remove-left uk-padding-remove-top '}>{frontmatter.title}</h1>
        <div className={styles.blog_content + ' uk-padding uk-padding-remove-left uk-padding-remove-top '} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
       
        <div className={styles.sidebar_right + ' uk-visible@l uk-width-2-5@l'}>
          <div>
            {blog.length > 0 &&
              <><h2 className='uk-text-bolder'>Recent Posts</h2>
                <ul className="uk-nav uk-nav-default">
                  {blog.map((data) => <li key={data.slug} className='uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top'><RecentBlogCard blog={data} /></li>
                  )}
                </ul></>
            }
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

Blog.getLayout = function getLayout(blogs) {
  return (
    <>
      <Header showNavItems={false} />
      <main>{blogs}</main>
      <Footer />
    </>
  )
}
