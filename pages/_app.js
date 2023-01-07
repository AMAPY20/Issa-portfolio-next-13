import "../styles/globals.css"
import "../styles/custom.css"
import "../styles/main.css"
import "../styles/plugins.css"
import 'animate.css';
import Navbar from "../src/Components/Navbar/Navbar"
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar/> */}
      <Component {...pageProps} />
    </>
  )

}
