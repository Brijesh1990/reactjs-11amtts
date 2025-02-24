import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
 return (
  <div>
   <nav className='bg-dark text-white p-2 nav navbar navbar-expand-md'>
   <Link className='navbar-brand'>Redux App samples</Link>
   <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about-us">About</Link></li>
    <li><Link to="/contact-us">Contact</Link></li>
   </ul>
   </nav>
  </div>
 )
}