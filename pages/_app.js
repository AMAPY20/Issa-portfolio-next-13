import '../styles/globals.css'
// import '../styles/custom.css'
import Layout from '../src/Components/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps}/>
    // <Layout>
    // </Layout>
  )
}
