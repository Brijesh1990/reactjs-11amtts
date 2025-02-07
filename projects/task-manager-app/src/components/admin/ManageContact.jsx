
import React,{useState,useEffect} from 'react'
import Header from './Header';
import { Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ManageContact() {
// destructured of data
 // display each task
 const[data,setData]=useState("");
 const navigate=useNavigate();
 // fetch all data from task 
 useEffect(()=>{
     axios.get(`http://localhost:8000/contact-us`).then((response)=>{
        setData(response.data);    
     })
 })
return (
<>
<Header />
<Row>
<div className='col-md-3'>
<Sidebar />
</div>
<div className='col-md-9 p-5'>
<h2 className='mt-3'>Manage All Contact us Data</h2>
<hr />
<table id="example" className='table table-responsive'>
    <thead>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Subject</th>
        <th>Phone</th>
        <th>Comment</th>
        <th>Action</th>
    </tr>
    </thead>

    <tbody>
  {data && data.map((row)=>{
    return(
    <>
    <tr>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.phone}</td>
        <td>{row.subject}</td>
        <td>{row.comment}</td>
        <td><button type='button' onClick={()=>{navigate(`/admin-login/delete-contact/${row.id}`)}} className='btn btn-sm btn-danger bg-danger text-white'><span className='bi bi-trash'></span></button></td>
    </tr>
    </>
  )})}
  
  </tbody>

  <tfoot>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Subject</th>
        <th>Phone</th>
        <th>Comment</th>
        <th>Action</th>
        </tr>
    </tfoot>
   
</table>

</div>
</Row>

</> 
)
}
