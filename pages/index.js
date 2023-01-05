import Head from 'next/head'
import Navbar from '../src/Components/Navbar'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import About from './About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Issa Halabi</title>
        <meta name="description" content="Issa Halabi | Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        {/* <About/> */}
      </main>
    </>
  )
}
