import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { title, tagline, favicon, description, navbarLogo } from '../../maplelabs.config';
import styles from '../../styles/Home.module.css'
export default function Header() {
  return (
    <>
      <Head>
        <title>{title} </title>
        <meta name="description" content={tagline} />
        <link rel="icon" href={favicon} />
      </Head>
      <div data-uk-sticky="start: 0" id="nav" className="nav-bg">
        <nav className="uk-navbar-container uk-navbar-sticky uk-navbar-transparent uk-light uk-width-1-1">
          <div className=" uk-container " data-uk-navbar>
          <div className="uk-navbar-left">
              <Link href="/" className="uk-navbar-item uk-logo">
                <Image src={navbarLogo.dark} width={310} height={40} alt={navbarLogo.alt} className='dark-img'></Image>
                <Image src={navbarLogo.light} width={310} height={40} alt={navbarLogo.alt} className='light-img'></Image>
                {/* <hr className="uk-divider-vertical uk-margin-small-left"></hr>
                <div className="uk-text-bolder uk-text-default uk-margin-small-left">
                  OPEN SOURCE
                </div> */}
              </Link>
            </div> 
            <div className="uk-navbar-right uk-visible@m ">
            {/* <div className="uk-navbar-center uk-visible uk-hidden@s"> */}
              <ul className='uk-navbar-nav'>
                <li>
                  {/* <Link href="projects">Projects</Link> */}
                  <a href="#projects" data-uk-scroll='offset:80'>Projects</a>
                </li>
                {/* <li>
                  <a href="#">Learn</a>
                </li> */}
                <li>
                  <a href="#getstarted" data-uk-scroll='offset:80'>Getting Started</a>
                </li>
                <li>
                  {/* <Link href="blogs">Blogs</Link> */}
                  <a href="#blogs" data-uk-scroll='offset:80'>Blogs</a>
                </li>
              </ul>
            </div>           
          </div>
        </nav>
      </div>
    </>
  )
}