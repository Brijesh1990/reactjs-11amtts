import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (
    <div>
       <Container className='w-50 mx-auto mt-3'>
        <Navbar className='nav navbar navbar-expand-md bg-secondary p-4'>
         <Link to=""><button className='p-3 btn btn-sm btn-warning text-dark'><span className='bi bi-grid'></span></button></Link>
         <ul>
            <li><Link to="" className='fs-2 text-white'>Task Manager</Link></li>
         </ul>
        </Navbar>
       </Container>
    </div>
  )
}
