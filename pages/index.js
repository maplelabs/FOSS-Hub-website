import FeaturedProject from '../components/FeaturedProject';
import IntroSection from '../components/IntroSection';
import githubService from '../services/GithubService';
import blogService from '../services/BlogService';
import styles from '../styles/Home.module.css';
import BlogsSection from '../components/BlogsSection';
import TopContributors from '../components/TopContributors';
import GettingStartedCard from '../components/GettingStartedCard';
import { useEffect } from 'react';
import uikit from 'uikit';
import FeaturedVideos from '../components/FeaturedVideos';
import BlockIcon from '../components/BlockIcon';

// import 'uikit/dist/js/uikit.js'
// import projectImg from '../public/images/favicon.ico'

export default function Home({
  featuredProjects,
  featuredBlogs,
  topContributors,
}) {
  let errMsg;
  featuredProjects.includes('AxiosError: Request failed with status code 404')
    ? (errMsg = 'Error: Request failed with status code 404')
    : featuredProjects.includes(
        'AxiosError: Request failed with status code 403'
      )
    ? (errMsg = 'Github API exceeds the limit')
    : (errMsg = '');
  useEffect(() => {
    const el = uikit.util.$('#intro-section');
    const nav = uikit.util.$('#nav');
    var sticky = uikit.sticky(nav);
    uikit.scrollspy(el, { repeat: true, delay: 0 });
    uikit.util.on(el, 'outview', function () {
      console.log('out');
      nav.classList.add('nav-bg');
      nav.classList.remove('nav-bg-dark');
      // nav.classList.add('')
    });
    uikit.util.on(el, 'inview', function () {
      console.log('in');
      nav.classList.add('nav-bg-dark');
      nav.classList.remove('nav-bg');
    });
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <IntroSection></IntroSection>
        <FeaturedProject data={featuredProjects}></FeaturedProject>
        <GettingStartedCard></GettingStartedCard>
        <BlogsSection data={featuredBlogs}></BlogsSection>
        <TopContributors data={topContributors}></TopContributors>
        <FeaturedVideos />
      </main>
    </div>
  );
}

export async function getStaticProps({ res }) {
  const featuredBlogs = blogService.getFeaturedBlogs();
  const [featuredProjects, topContributors] =
    await githubService.getHomePageData();
  // const topContributors = await   githubService.getTopFiveContributors();

  // Pass data to the page via props
  return { props: { featuredProjects, featuredBlogs, topContributors } };
}
