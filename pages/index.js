import FeaturedProject from "../components/FeaturedProject";
import IntroSection from "../components/IntroSection";
import githubService from "../services/GithubService";
import blogService from "../services/BlogService";
import styles from "../styles/Home.module.css";
import BlogsSection from "../components/BlogsSection";
import TopContributors from "../components/TopContributors";
import GettingStartedCard from "../components/GettingStartedCard";
import { useEffect } from "react";
import uikit from "uikit";

// import 'uikit/dist/js/uikit.js'
// import projectImg from '../public/images/favicon.ico'

export default function Home({featuredProjects,featuredBlogs,topContributors}) {
  useEffect(() => {
    const el = uikit.util.$("#intro-section");
    const nav = uikit.util.$("#nav");
    var sticky = uikit.sticky(nav);
    uikit.scrollspy(el, { repeat: true, delay: 50 });
    uikit.util.on(el, "outview", function () {
      console.log("out");
      // uikit.toggle(nav,{cls:'nav-bg',target:'#nav',mode:'true'})
      nav.classList.add("nav-bg");
      // nav.classList.add('')
    });
    uikit.util.on(el, "inview", function () {
      console.log("in");
      nav.classList.remove("nav-bg");
    });
  }, []);
  return (
    <div >
      <main className={styles.main}>
        <IntroSection></IntroSection>
        <FeaturedProject data={featuredProjects}></FeaturedProject>
        <GettingStartedCard></GettingStartedCard>
        <BlogsSection data={featuredBlogs}></BlogsSection>
        <TopContributors data={topContributors}></TopContributors>
      </main>
    </div>
  );
}


export async function getStaticProps({res}) {
  const featuredBlogs =  blogService.getFeaturedBlogs()
  const [featuredProjects,topContributors] = await githubService.getHomePageData();
  // const topContributors = await   githubService.getTopFiveContributors();

  // Pass data to the page via props
  return { props: {  featuredProjects , featuredBlogs, topContributors} }
}