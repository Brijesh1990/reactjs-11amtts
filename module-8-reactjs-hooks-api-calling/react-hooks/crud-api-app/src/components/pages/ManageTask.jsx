import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarApp from './Navbar'
import axios from 'axios'
export default function ManageTask() {
// display all task data via api
const[data,setTask]=useState("");
// fetch data of api of Tasks
useEffect(()=>{
axios.get(`http://localhost:8000/tasks`).then((response)=>{
setTask(response.data);
})
},[data])
return (
<div>
<NavbarApp />
<Container className='w-75 mt-0 p-5 mx-auto'>
<div className='row'>

<div className='col-md-12 shadow'>
<h3>Manage All Task</h3>
<table className='table table-responsive'>
<tr>
<th>TaskName</th>
<th>TaskDate</th>
<th>Priority</th>
<th>Reminder</th>
<th>Descriptions</th>
<th>Action</th>
</tr>
{data && data.map((item)=>{
return (
<>
<tr>
<td>{item.taskname}</td>
<td>{item.addeddate}</td>
<td>{item.priority}</td>
<td>{item.reminder}</td>
<td>{item.descriptions}</td>
<td><div style={{minWidth:"100px"}}><Link to="/"><span className='bi bi-trash text-danger'></span></Link> | <Link to="/"><span className='bi bi-pencil text-primary'></span></Link></div></td>
</tr>
</>
)
})}
</table>
</div>
</div>
</Container>
</div>
)
}
