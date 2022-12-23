import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LOGO from '../../public/images/maplelabs_dark.svg';
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
          <div className=" uk-container ">
          <div className="uk-navbar-left">
              <Link href="/" className="uk-navbar-item uk-logo">
                <Image src={navbarLogo.src} width={120} height={50} alt={navbarLogo.alt}></Image>
                <hr className="uk-divider-vertical uk-margin-small-left"></hr>
                <div className="uk-text-bolder uk-text-default uk-margin-small-left">
                  OPEN SOURCE
                </div>
              </Link>
            </div> 
          
            <div className={"uk-navbar-right uk-hidden@m " + styles.navbar_right}>
              <ul className="uk-navbar-nav">
                <li>
                  <a uk-navbar-toggle-icon='true' href="#"></a>
                  <div className="uk-dropbar uk-dropbar-top" style={{background: "linear-gradient(rgb(40, 44, 56), rgb(61, 65, 74))"}}  uk-drop="stretch: x; mode: click;  target: !.uk-navbar-container; animation: slide-top; animate-out: true; duration: 700">
                    <ul className="uk-nav uk-navbar-dropdown-nav ">
                      <li>
                        <Link href="projects">Projects</Link>
                      </li>
                      <li>
                        <Link href="blogs">Blogs</Link>
                      </li>
                      <li>
                        <a href="#">Learn</a>
                      </li>
                      <li>
                        <a href="#">Getting Started</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-center uk-visible@m ">
            {/* <div className="uk-navbar-center uk-visible uk-hidden@s"> */}
              <ul className='uk-navbar-nav'>
                <li>
                  <Link href="projects">Projects</Link>
                </li>
                <li>
                  <Link href="blogs">Blogs</Link>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
                <li>
                  <a href="#">Getting Started</a>
                </li>
              </ul>
            </div>           
          </div>
        </nav>
      </div>
    </>
  )
}