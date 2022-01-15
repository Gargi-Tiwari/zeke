import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import  Slideshow  from '../components/Slideshow'
import Promise from '../components/Promise'
import Categories from '../components/Categories'
import Items from '../components/Items'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="gradient-bg-welcome">
      <Head>
        <title>ZEKE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Slideshow/>
      <Promise/>
      <Items/>
      <Categories/>
      <Footer/>

     
    </div>
  )
}
