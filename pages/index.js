import Head from "next/head";
import Image from "next/image";
import FeaturedProject from "../components/FeaturedProject";
import IntroSection from "../components/IntroSection";
import githubService from "../services/GithubService";
import styles from "../styles/Home.module.css";
// import 'uikit/dist/js/uikit.js'
// import projectImg from '../public/images/favicon.ico'

export default function Home({featuredProjects}) {
  console.log(featuredProjects);
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
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const featuredProjects = await   githubService.fetchFeaturedProjects();
  // Pass data to the page via props
  return { props: {  featuredProjects } }
}