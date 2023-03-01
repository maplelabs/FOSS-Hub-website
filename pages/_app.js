import '../styles/globals.css';
import 'uikit/dist/css/uikit.css';
import UIkit from '../components/uikit';
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <UIkit>{page}</UIkit>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
