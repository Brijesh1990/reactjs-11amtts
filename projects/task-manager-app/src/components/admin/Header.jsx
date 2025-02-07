import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header  text-white p-2'>
    <div className='row'>
        
        <div className='col-md-10 text-white'><Link to="" className='fs-3'>Task Manager Admin</Link></div>
         
        <div className='col-md-2 text-white'><Link to="">Welcome:Admin</Link></div>
    </div>
      
    </div>
  )
}
