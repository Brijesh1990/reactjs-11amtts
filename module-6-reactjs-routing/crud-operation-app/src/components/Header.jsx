import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='task-header m-0 p-4'>
      <h1 className='p-2 fs-1 text-white'>Task  <br /> <span className='fs-3 ms-4'>Management</span></h1>
      <p className='ms-4 text-white p-2'>Since 2012, over 15,000,000 teams have been using Bitrix24 to manage their tasks and projects.
      Get the ultimate "get things done" tool for your company. </p>

      <Link to="/" className='ms-4 text-white fs-4'>Go to Home <span className='bi bi-house'></span></Link>
       
    </div>
  )
}
