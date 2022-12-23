import "../styles/globals.css";
import "uikit/dist/css/uikit.css";
import uikit from "uikit";
import UIkit from "../components/uikit";
import Script from "next/script";
import Image from "next/image";
import LOGO from "../public/images/maplelabs_dark.svg";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const el = uikit.util.$("#intro-section");
    const nav = uikit.util.$("#nav");
    // var sticky = uikit.sticky(nav);
    // uikit.scrollspy(el, { repeat: true, delay: 100 });
    // uikit.util.on(el, "outview", function () {
    //   console.log("out");
    //   // uikit.toggle(nav,{cls:'nav-bg',target:'#nav',mode:'true'})
    //   nav.classList.add("nav-bg");
    //   // nav.classList.add('')
    // });
    // uikit.util.on(el, "inview", function () {
    //   console.log("in");
    //   nav.classList.remove("nav-bg");
    // });
  }, []);
  const getLayout = Component.getLayout || ((page) =><UIkit><Layout>{page}</Layout></UIkit>)
  return getLayout(<Component {...pageProps} />)
  // return (
  //   <>
  //     <UIkit>
  //       <Layout>
  //       <Component {...pageProps} />
  //       </Layout>
  //     </UIkit>
  //     {/* <Script src='https://cdn.jsdelivr.net/npm/uikit@3.15.16/dist/js/uikit.js' /> */}
  //   </>
  // );
}

export default MyApp;
