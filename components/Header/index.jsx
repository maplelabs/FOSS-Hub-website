import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import LOGO from '../../public/images/maplelabs_dark.svg';
export default function Header(){
    return (
        <>
        <Head>
          <title>OpenSource @ Maplelabs </title>
          <meta name="description" content="Embracing OpenSource..." />
          <link rel="icon" href="/images/favicon.png" />
        </Head>
        <div data-uk-sticky="start: 0" id="nav" className="nav-bg">
          <nav className="uk-navbar-container uk-navbar-sticky uk-navbar-transparent uk-light uk-width-1-1">
            <div className=" uk-container ">
              <div className="uk-navbar-left">
                <Link href="/" className="uk-navbar-item uk-logo">
                  <Image src={LOGO} width={120} height={50}></Image>
                  <hr className="uk-divider-vertical uk-margin-small-left"></hr>
                  <div className="uk-text-bolder uk-text-default uk-margin-small-left">
                    OPEN SOURCE
                  </div>
                </Link>
              </div>
              <div className="uk-navbar-center">
                <ul className="uk-navbar-nav">
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
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