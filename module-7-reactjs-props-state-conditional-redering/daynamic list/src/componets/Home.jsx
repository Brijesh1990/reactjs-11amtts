import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>welcome to home page</h1>
      <li>
        <Link to='/About'>About</Link>
        {/* <a href='/About'>About</a> */}
      </li>
        
    </div>
  )
}
