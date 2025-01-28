import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavbarApp() {
return (
<div>
<Container className='mt-5 p-5 w-75 mx-auto'>
<Navbar className="nav navbar navbar-expand-md bg-dark text-white">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/add-task">Add Task</Link></li>
<li><Link to="/manage-task">Manage Task</Link></li>   
</ul>
</Navbar>
</Container>
</div>
)
}
