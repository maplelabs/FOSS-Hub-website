import "../styles/globals.css";
import "uikit/dist/css/uikit.css";
import UIkit from "../components/uikit";
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
 
  const getLayout = Component.getLayout || ((page) =><UIkit><Layout>{page}</Layout></UIkit>)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp;
