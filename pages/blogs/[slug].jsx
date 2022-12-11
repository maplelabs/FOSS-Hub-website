import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UIkit from 'uikit';
import BlogService from '../../services/BlogService';
import styles from '../../styles/Blog.module.css'


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
    if(!frontmatter.author_avatar){
        frontmatter.author_avatar=BlogService.getAuthorAvatar(frontmatter.author)
    }
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }
  
  export default function Blog({ frontmatter, content }) {
    const [time,setTime]= useState(3);
    const [html,setHtml]= useState();
    const [sections,setSections]= useState([]);
    useEffect(()=>{
        setTime(Math.ceil(content.match(/\w+/g).length/200));
        const renderedHtml= md().use(require('markdown-it-github-headings'),{prefix:'section-'}).render(content)
        const labelList = content.match(/\n#{1,6}.+/g).map(val=>val.replace(/\n#{1,6} /g,''))
        const sectionList = renderedHtml.match(/id="section-(.*?)"/g).map((val,i) => {
            const id=val.replace(/id="/g,'#').replace('"','');
            return {id,label:labelList[i]}
        })
        setSections(sectionList)
        setHtml(renderedHtml)
    },[content])
    return (
        <div className= {styles.blog_bg+' uk-padding-large uk-padding-remove-horizontal'}>
            <div className={`uk-container-small uk-container uk-position-relative uk-margin-top `}>
                <h1 className='uk-text-bolder'>{frontmatter.title}</h1>
                <div className='uk-flex uk-flex-between uk-flex-middle'>
                    <div className='uk-flex uk-flex-middle '>
                          <Image src={frontmatter.author_avatar} width={40} height={40} className='uk-border-circle' style={{border:'1px solid #D9D9D9'}}/>
                          <div className='uk-text-bold uk-margin-small-left'>{frontmatter.author}</div>
                        </div>
                    <div>{time} min read</div>
                </div>
                <img src={frontmatter.banner} className='uk-width-1-1 uk-margin-top'></img>
                <div className={styles.blog_content+' uk-margin-large-top'} dangerouslySetInnerHTML={{ __html: html }} />
                <div className={styles.sidebar_right+' uk-visible@l'}>
                <div data-uk-sticky="offset: 150" class="uk-sticky uk-active uk-sticky-below uk-sticky-fixed">
                    <ul class="uk-nav uk-nav-default" data-uk-scrollspy-nav="closest: li; scroll: true; offset: 120">
                        {sections.map(section=>(
                            <li key={section}><a href={section.id}>{section.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        
      </div>
    );
}
