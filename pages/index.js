import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import { useState,useEffect } from 'react'
import ProductsList from '../components/ProductsList'
import { server } from '../config'
import Banner from '../components/banner'
import { db, storage } from '../firebase/firebase'
import { onSnapshot,collection, query, orderBy } from '@firebase/firestore'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Julisha</title>
        <meta name="description" content="Plateforme de petites annonces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      {/* Product section */}
      <ProductsList />
    
    </div>
  )
      }
/*export const getServerSideProps = async (context) => {


  return {
    props:{
      posts
    }
  }
}
*/