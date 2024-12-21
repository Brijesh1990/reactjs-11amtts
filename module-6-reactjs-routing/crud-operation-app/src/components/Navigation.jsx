import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
  return (
    <div className='container-fluid p-5 bg-white navigation'>
    <h1 className='ms-2'>Hi, <span className='add-task-anim'>Sushil Kumar</span></h1>
    <p className='ms-2 text-dark'>Here your Tasks</p>
    {/* navigations */}
    <nav className='w-75 mx-auto navbar-expand-md bg-dark p-3 rounded-5'>
      <ul className='nav-links'>
        <li><Link to=""><span className='bi bi-pencil fs-2 text-danger'></span></Link></li>
        <li><Link to=""><span className='bi bi-check-circle fs-2 text-danger'></span></Link></li>
        <li><Link to=""><span className='bi bi-check-square fs-2 text-danger'></span></Link></li>
      </ul>
    </nav>
    </div>
  )
}
