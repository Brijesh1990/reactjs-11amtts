import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
       <Nav className="nav navbar navbar-expand-md bg-dark p-3">
        <Link to="/" className='navbar-brand text-white fs-4 ms-4'>Flipkart App</Link>
        <ul className='navbar-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About</Link></li>
            <li><Link to='/our-services'>Services</Link></li>
            <li><Link to='/feedback'>Feedback</Link></li>
            <li><Link to='/contact-us'>Contact</Link></li>
        </ul>
       </Nav>
    </div>
  )
}
