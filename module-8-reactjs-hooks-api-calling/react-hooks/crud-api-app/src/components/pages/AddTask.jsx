import React,{useState,useEffect,useRef} from 'react'
import { Container } from 'react-bootstrap'
import NavbarApp from './Navbar'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function AddTask() {
// display all dropdown data via api
const[data1,setPriority]=useState("");
const[data2,setReminder]=useState("");
const[data3,setDescriptions]=useState("");
// fetch data of api of Priority
useEffect(()=>{
axios.get(`http://localhost:8000/priority`).then((response)=>{
setPriority(response.data);
})
})
// fetch data of api of Reminder
useEffect(()=>{
axios.get(`http://localhost:8000/set-reminder`).then((response)=>{
setReminder(response.data);
})
})

// fetch data of api of Priority
useEffect(()=>{
axios.get(`http://localhost:8000/task-descriptions`).then((response)=>{
setDescriptions(response.data);
})
})

// add all data via api or add task 
const taskname=useRef("");
const addeddate=useRef("");
const priority=useRef("");
const reminder=useRef("");
const descriptions=useRef("");
const navigate=useNavigate();

// create a addEventHandeler Function to add Task
const AddTaskHandeler=(e)=>
{
e.preventDefault();
var insert={

taskname:taskname.current.value,
addeddate:addeddate.current.value,
priority:priority.current.value,
reminder:reminder.current.value,
descriptions:descriptions.current.value
}

// call api 
axios.post(`http://localhost:8000/tasks`,insert).then(()=>{
// pass a message for addedd successfully data
Swal.fire({
title: "Thanks for Added Your task!",
icon: "success",
draggable: true
});

navigate('/manage-task');

e.target.reset();
})
}


return (
<div>
<NavbarApp />
<Container className='w-75 mt-0 p-5 mx-auto'>

<div className='row'>
<div className='col-md-4'>
<h3>Task</h3>
<p>Task management is the process of successfully carrying out the initiation, planning, tracking, and closure of one or many tasks, making it a pivotal </p>
</div>
<div className='col-md-8 shadow p-3'>
<h3>Add Task Form</h3>
<form onSubmit={AddTaskHandeler}>
<div className='form-group mt-2'>
<input type='text' ref={taskname} placeholder='Task Name *' className='form-control' />
</div>

<div className='form-group mt-2'>
<input type='date' ref={addeddate} placeholder='Task Date*' className='form-control' />
</div>


<div className='form-group mt-2'>
<select ref={priority}  placeholder='Task Priority *' className='form-control'>
<option value="">-select Priority-</option>
{data1 && data1.map((item1)=>{
return(
<>
<option value={item1.name}>{item1.name}</option>
</>
)
})}

</select>
</div>


<div className='form-group mt-2'>
<select ref={reminder}  placeholder='Set Reminder *' className='form-control'>
<option value="">-select Set Reminder-</option>
{data2 && data2.map((item2)=>{
return(
<>
<option value={item2.reminder}>{item2.reminder}</option>
</>
)
})}
</select>
</div>


<div className='form-group mt-2'>
<select ref={descriptions}  placeholder='Task Descriptions *' className='form-control'>
<option value="">-select Descriptions-</option>
{data3 && data3.map((item3)=>{
return(
<>
<option value={item3.desc}>{item3.desc}</option>
</>
)
})}
</select>
</div>
<div className='form-group mt-2'>
<input type='submit' className='btn btn-lg btn-dark text-white rounded' value="Add Task" />
</div>

</form>
</div>
</div>
</Container>
</div>
)
}
