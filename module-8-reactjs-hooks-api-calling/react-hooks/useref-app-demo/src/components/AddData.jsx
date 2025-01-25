import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
// axios : axios is a libraries i.e used to Post | get | put | delete | update data from any URL 
// useRef():This is a type of hook
//  this is used to take reference from user input
//  This hook is used to add data via useRef()
import { useNavigate } from 'react-router-dom';
import imgLoader from '../loader.gif'
import Swal from 'sweetalert2';
export default function AddData() {
//add data in data.json using useRef 
const photo=useRef("");
const name=useRef("");
const age=useRef("");
const salary=useRef("");
const department=useRef("");
const navigate=useNavigate();
// create a addEventHandeling function to add data
const addDataForm=(e)=>{
    e.preventDefault();
    var insert={

        photo:photo.current.value,
        name:name.current.value,
        age:age.current.value,
        salary:salary.current.value,
        department:department.current.value
    }

    // stored data here via axios.post();
    axios.post(`http://localhost:8000/employee`,insert).then(()=>{
        // pass a message

        Swal.fire({
            title: "Wow",
            text: "Thanks for adding employee Data",
            icon: "success"
          });

          navigate('/');

    })

}

// loader destructruing od data
const[loader,setLoader]=useState(true);
// load loader
useEffect(()=>{
    setTimeout(()=>{
        setLoader(false);
    },2500)
})

  return (
    loader? 
    <>
    <img src={imgLoader} alt='img' className='img-fluid w-75' />
    </>
    :
    <div>
     <div className='container p-5 mt-5'>
       <h1> <button type='button' className='ms-0 btn btn-lg btn-primary'>Add Employee Data</button></h1>
        <h2>Add Employee Data<button type='button' className='ms-5 btn btn-sm btn-danger float-end'>Export Data</button></h2>
        <form method='post' onSubmit={addDataForm}>
        <div className='form-group mt-3'>
            <input type='text' ref={photo} placeholder='Photo' className='form-control' />
        </div>
        
        <div className='form-group mt-3'>
            <input type='text' ref={name} placeholder='Name' className='form-control' />
        </div>
        
        <div className='form-group mt-3'>
            <input type='text' ref={age} placeholder='Age' className='form-control' />
        </div>
        
        <div className='form-group mt-3'>
            <input type='text' ref={salary} placeholder='Salary' className='form-control' />
        </div>
        
        <div className='form-group mt-3'>
            <input type='text' ref={department} placeholder='Department' className='form-control' />
        </div>

        
        <div className='form-group mt-3'>
            <input type='submit'  className='btn btn-lg btn-dark text-white' />
        </div>

        </form>
     </div> 
    </div>
  )
}
