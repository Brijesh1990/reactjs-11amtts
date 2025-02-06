import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function Navbar() {
     // count the data
     const[count,setCount]=useState(0);
     useEffect(()=>{
        // call api 
        axios.get(`http://localhost:4000/add-items`).then((response)=>{
            setCount(response.data);
        })

    })
  return (
    <div>
      <Container className='p-3 nav navbar bg-dark text-white'>
        <ul>
        <li><Link to="/" className='navbar-brand'>Crud App</Link></li>
        <li><Link to="/add-items" className='navbar-brand'>Add Items</Link></li>
        <li><Link to="/" className='navbar-brand'>Manage Items</Link></li>
        <li><Link to="/" className='navbar-brand'>Total Items <span className='badge badge-sm bg-danger text-white'>{count.length}</span> </Link></li>
        </ul>
      </Container>
    </div>
  )
}
