import React from 'react'
import Header from './components/topshrms/Header'
import Navbar from './components/topshrms/Navbar'
import Content from './components/topshrms/Content'
import Footer from './components/topshrms/Footer'
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
