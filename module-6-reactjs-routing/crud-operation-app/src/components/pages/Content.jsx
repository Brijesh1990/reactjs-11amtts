import React from 'react'
import task from '../../task.png'
import { Link } from 'react-router-dom'
export default function Content() {
  return (
    <div className='task-content p-5 mt-5'>
     <img src={task} alt='task' /> 
     <Link to="/login"><button type='button' className='btn btn-md w-75 mx-auto bg-primary text-white fs-4 ms-5'>Sign In</button></Link>
     <Link to="/register"><button type='button' className='btn btn-md w-75 mx-auto bg-danger mt-3 text-white fs-4 ms-5'>Sign Up</button></Link>
 
    </div>
  )
}
