import React,{useState,useEffect,useRef} from 'react'
import { Container } from 'react-bootstrap'
import NavbarApp from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams,useNavigate } from 'react-router-dom'
export default function EditData() {
// create a destructuring
const[data,setData]=useState([]);
// create an api  to edit all data
const taskname=useRef("");
const taskdetail=useRef("");
const {id}=useParams();
const navigate=useNavigate();
// call api for edit data
useEffect(()=>{
axios.get(`http://localhost:8000/tasks/${id}`).then((response)=>{
setData(response.data);
// get all data in input
taskname.current.value=response.data.taskname;
taskdetail.current.value=response.data.taskdetail;
})
},[])

// create for update api or data
const addEventUpdateData=(e)=>{
e.preventDefault();
var upd={
taskname:taskname.current.value,
taskdetail:taskdetail.current.value
}
//    update api 
axios.put(`http://localhost:8000/tasks/${id}`,upd).then(()=>{

Swal.fire({
title: "Good job!",
text: "Thanks Your tasks successfully Updated!",
icon: "success"
});

navigate('/');
})
}
return (
<>
<NavbarApp />
{/* content */}
<Container className='w-50 mx-auto p-2 mt-1'>
<h1 className="fs-4">Edit Task Here</h1>
<hr />
<form>
<div className="form-group mb-3">
<label className='text-success'>Edit Taskname *</label>
<input type="text" ref={taskname}  className="form-control" placeholder="New Task" />
</div>

<div className="form-group mb-3">
<label className='text-success'>Edit Task Details *</label>

<textarea ref={taskdetail}  className="form-control" placeholder="Details" />
</div>

<div className="form-group mb-3">

<button type="button" onClick={addEventUpdateData} className="btn btn btn-md btn-warning text-dark">UPDATE Task <span className='bi bi-caret-right-fill'></span></button>
</div>
</form>

</Container>
<Footer />
</>
)
}
