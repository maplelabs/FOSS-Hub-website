import "../styles/globals.css";
import "uikit/dist/css/uikit.css";
import uikit from "uikit";
import UIkit from "../components/uikit";
import Script from "next/script";
import Image from "next/image";
import LOGO from "../public/images/maplelabs_dark.svg";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const el = uikit.util.$("#intro-section");
    const nav = uikit.util.$("#nav");
    var sticky = uikit.sticky(nav);
    uikit.scrollspy(el, { repeat: true, delay: 100 });
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
    <>
      <UIkit>
        <div id="nav" className="">
          <nav className="uk-navbar-container uk-navbar-sticky uk-navbar-transparent uk-light uk-width-1-1">
            <div className=" uk-container ">
              <div className="uk-navbar-left">
                <a href="" className="uk-navbar-item uk-logo">
                  <Image src={LOGO} width={120} height={50}></Image>
                  <hr className="uk-divider-vertical uk-margin-small-left"></hr>
                  <div className="uk-text-bolder uk-margin-small-left">
                    OPEN SOURCE
                  </div>
                </a>
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
        <Component {...pageProps} />
      </UIkit>
      {/* <Script src='https://cdn.jsdelivr.net/npm/uikit@3.15.16/dist/js/uikit.js' /> */}
    </>
  );
}

export default MyApp;
