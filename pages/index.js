import Head from 'next/head'
import Homes from '../src/Sections/Homes'
// import { Inter } from '@next/font/google'

export default function Home() {
  // const inter = Inter({ subsets: ["latin"] })

  return (
    <>
      <Head>
        <title>Issa Halabi</title>
        <meta name="description" content="Issa Halabi | Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homes/>
      </main>
    </>
  )
}
