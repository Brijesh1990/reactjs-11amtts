import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>welcome to About page</h1>
      <li>
        <Link to='/'>Home</Link>
        {/* <a href='/'>Home</a> */}
      </li>
        
    </div>
  )
}
