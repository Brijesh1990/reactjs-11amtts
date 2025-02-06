import React,{useEffect,useState} from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default function NavbarApp() {
      // display each task
      const[data,setData]=useState(0);
      // fetch all data from task 
      useEffect(()=>{
          axios.get(`http://localhost:8000/tasks`).then((response)=>{
             setData(response.data);    
          })
      })
  return (
    <div>
     
        <Navbar className='nav navbar navbar-expand-md bg-secondary p-2  top-0'>
         <Link to=""><button className='p-2 btn btn-sm   rounded-circle'><span className='bi bi-person-add fs-1 text-warning'></span></button></Link>
         <ul>
            <li><Link to="" className='fs-2 text-white'>Task Manager App</Link></li>
            <li><Link to="" className='fs-5 text-white btn btn-sm btn-warning ms-5'>Add Employee <span className='bi bi-person-add  fs-5'></span></Link></li>
            <li><Link to="/contact-us" className='fs-5 text-white ms-5'>Contact Us <span className='bi bi-person-add  fs-5'></span></Link></li>
            <li><Link to="" className='fs-5 text-white'>Total Task <span className='fs-5 badge badge-sm text-white bg-danger rounded-circle ms-1'>{data.length}</span></Link></li>
         </ul>
        </Navbar>
      
    </div>
  )
}
