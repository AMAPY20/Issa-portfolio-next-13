<<<<<<< HEAD
import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })
=======
import Head from 'next/head'
import Navbar from '../src/Components/Navbar'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import About from './About'
>>>>>>> 3b90588cfe2440be5d92b485f251520dcc4bfdc6

export default function Home() {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}></main>
=======
        <title>Issa Halabi</title>
        <meta name="description" content="Issa Halabi | Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        {/* <About/> */}
      </main>
>>>>>>> 3b90588cfe2440be5d92b485f251520dcc4bfdc6
    </>
  )
}
