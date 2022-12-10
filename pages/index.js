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
      <Head>
        <title>OpenSource @ Maplelabs </title>
        <meta name="description" content="Embracing OpenSource..." />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={styles.main}>
      
        <IntroSection></IntroSection>
        <FeaturedProject data={featuredProjects}></FeaturedProject>
        <BlogsSection data={featuredBlogs}></BlogsSection>
        <TopContributors data={topContributors}></TopContributors>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const featuredProjects = await   githubService.fetchFeaturedProjects();
 const featuredBlogs =  blogService.getFeaturedBlogs()
 const topContributors = await   githubService.getTopFiveContributors();

  // Pass data to the page via props
  return { props: {  featuredProjects ,featuredBlogs,topContributors} }
}