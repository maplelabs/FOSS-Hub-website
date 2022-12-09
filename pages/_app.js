import '../styles/globals.css'
import 'uikit/dist/css/uikit.css'
// import 'uikit/dist/js/uikit.js'
import UIkit from '../components/uikit'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (<>
  <UIkit>
    <Component {...pageProps} />
  </UIkit>
  {/* <Script src='https://cdn.jsdelivr.net/npm/uikit@3.15.16/dist/js/uikit.js' /> */}
  </>
  )
}

export default MyApp
