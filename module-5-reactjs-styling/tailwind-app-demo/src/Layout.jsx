import React from 'react'
import Header from './components/pages/Header'
import Navbar from './components/pages/Navbar'
import Content from './components/pages/Content'
import Footer from './components/pages/Footer'
export default function Layout() {
  return (
    <div>
       <Header />
       <Navbar />
       <Content />
       <Footer />
    </div>
  )
}
