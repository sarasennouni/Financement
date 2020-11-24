import Head from 'next/head'

import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Synphony</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
    </div>
  )
}