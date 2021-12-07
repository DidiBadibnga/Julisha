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
import Banner from '../components/Banner'
import { db, storage } from '../firebase/firebase'
import { onSnapshot,collection, query, orderBy } from '@firebase/firestore'
export default function Home() {
  const [annonces, setAnnonces] = useState([])
  useEffect(() => {
    const collectionRef = collection(db, 'annonces')

  const q = query(collectionRef, orderBy('timestamp', 'desc'))
  const unsubcribe = onSnapshot(q, (querySnapshot) => {
    setAnnonces(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime()})))
  })
  
  return unsubcribe;

  }, [])
  console.log(annonces)
  return (
    <div>
      <Head>
        <title>Julisha</title>
        <meta name="description" content="Plateforme de petites annonces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      {/* Product section */}
      <ProductsList title="Les plus recents"/>
    
    </div>
  )
      }