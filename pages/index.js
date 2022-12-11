import Head from "next/head";
import Image from "next/image";
import FeaturedProject from "../components/FeaturedProject";
import IntroSection from "../components/IntroSection";
import githubService from "../services/GithubService";
import blogService from "../services/BlogService";
import styles from "../styles/Home.module.css";
import BlogsSection from "../components/BlogsSection";
import TopContributors from "../components/TopContributors";

// import 'uikit/dist/js/uikit.js'
// import projectImg from '../public/images/favicon.ico'

export default function Home({featuredProjects,featuredBlogs,topContributors}) {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
      
        <IntroSection></IntroSection>
        <FeaturedProject data={featuredProjects}></FeaturedProject>
        <BlogsSection data={featuredBlogs}></BlogsSection>
        <TopContributors data={topContributors}></TopContributors>
      </main>
    </div>
  );
}
export async function getServerSideProps({res}) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=599'
  )
  const featuredBlogs =  blogService.getFeaturedBlogs()
  const [featuredProjects,topContributors] = await githubService.getHomePageData();
  // const topContributors = await   githubService.getTopFiveContributors();

  // Pass data to the page via props
  return { props: {  featuredProjects , featuredBlogs, topContributors} }
}