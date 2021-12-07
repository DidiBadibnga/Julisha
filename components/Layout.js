import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

function Layout({children}) {
   return (
      <>
        <Header />
        <Nav />
        <main>{children}</main>
        <Footer />
      </>
   )
}

export default Layout
