import React from 'react'
import { Link } from 'react-router-dom'
export default function DashboardHeader() {
  return (
    <div className='task-header m-0 p-4'>
      <h3 className='p-2 fs-3 text-white'><span className='bi bi-arrow-bar-left'></span> <span className='ms-5'>My Profile</span></h3>  
    </div>
  )
}
