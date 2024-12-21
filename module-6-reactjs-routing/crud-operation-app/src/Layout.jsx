import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Content from './components/pages/Content'
export default function Layout() {
  return (
    <>
      <div  className='task-dashboard w-50 mx-auto bg-white'>
        {/* header */}
        <Header />
        {/* content */}
        <Content />
      </div>
    </>
  )
}
