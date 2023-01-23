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
