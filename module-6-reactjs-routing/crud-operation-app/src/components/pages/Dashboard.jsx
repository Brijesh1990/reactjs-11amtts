import React from 'react'
import account from '../../account.jpg'
import { Link } from 'react-router-dom'
import pen from '../../pen.png'
import DashboardHeader from '../DashboardHeader'
import Navigation from '../Navigation'
import Footer from '../Footer'
export default function Dashboard() {
  return (
   <>  
   <div  className='task-dashboard w-50 mx-auto bg-white'>
   <DashboardHeader />
   <Navigation />
   {/* dashboard content */}
   <div className='dashboard-content p-5'>
      <h1 className='text-center text-white'>Your Tasks</h1>
      <hr className='w-25 mx-auto border-white' />
      {/* display tasks */}
      <div className='row'>
        <div className='col-md-5 ms-5'>
        <div className='card'>
         <img src={pen} className='img-fluid' /> 
         <div className='card-body bg-dark text-white'>
            <h3 className='text-center fs-5'>React js</h3>
            <h3 className='text-center fs-6'>AsignTo:Brijesh</h3>
            <h3 className='text-center fs-6'>AddedDate:20-12-2024</h3>
         </div>  
        </div>    
        </div>
        <div className='col-md-5 ms-5'>
        <div className='card'>
         <img src={pen} className='img-fluid' /> 
         <div className='card-body bg-dark text-white'>
            <h3 className='text-center fs-5'>React js</h3>
            <h3 className='text-center fs-6'>AsignTo:Brijesh</h3>
            <h3 className='text-center fs-6'>AddedDate:20-12-2024</h3>
         </div>  
        </div>    
        </div>
      </div>
    </div>
    <Footer />
    </div>
  
    </>

  )
}
