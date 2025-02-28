import React from 'react'
import account from '../../task1.png'
import { Link } from 'react-router-dom'
import Header from '../Header'
export default function Login() {
  return (
   <>  
   <div  className='task-dashboard w-50 mx-auto bg-white'>
   <Header />
    <div className='task-content p-5 mt-5'>
    <div className='row'>
        <div className='col-md-5'> <img src={account} alt='task' className='img-fluid w-75' /></div>
        <div className='col-md-7'> 
        <h3>Login Form</h3>
        <hr className='w-25' /> 
        <form>
          
            <div className='form-group mt-2'>
                <input type='text' placeholder='Email *' className='form-control' />
            </div>
            
            <div className='form-group mt-2'>
                <input type='password' placeholder='Password *' className='form-control' />
            </div>
            
            <div className='form-group mt-2'>
                <input type='submit' className='btn btn-md btn-primary text-white' />  <b><Link to="/forgetpassword">Forget password ?</Link></b>    
                
            </div>

            <div className='form-group mt-2'>
            <b>Don't have an account ? <Link to="/register">Create Account</Link></b>    
            </div>


        </form>
        </div>
    </div>
     
  
    </div>
    </div>
    </>

  )
}
