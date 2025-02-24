import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
export default function Header() {  
const { logOut, user } = useUserAuth();
const navigate = useNavigate();
const handleLogout = async () => {
  try {
   await logOut();
   navigate("/login");
  } catch (error) {
   console.log(error.message);
  }  
};
  return (
    <div className='header  text-white p-2'>
    <div className='row'>
        
        <div className='col-md-6 text-white'><Link to="" className='fs-3'>Task Manager Admin</Link></div>
         
        <div className='col-md-3 text-white'><Link to="">Welcome: {user && user.email}</Link></div>

        <div className='col-md-3 text-white'><Link to=""><button className='btn btn-sm btn-danger' onClick={handleLogout}>Logout</button></Link></div>
    </div>
      
    </div>
  )
}
