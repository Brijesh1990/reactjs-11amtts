import React from 'react'
import task from '../../task.png'
import pagenotfound from '../../pagenotfound.gif'
import { Link } from 'react-router-dom'
import Header from '../Header'
export default function PageNotFound() {
  return (
   <>  
    <div  className='task-dashboard w-50 mx-auto bg-white'>
   <Header />
    <div className='task-content p-5 mt-5'>
     <img src={pagenotfound} alt='task' /> 
     <Link to="/"><button type='button' className='btn btn-md w-75 mx-auto bg-primary text-white fs-4 ms-5'>Click to Home Page</button></Link>
    </div>
    </div>
    </>

  )
}
