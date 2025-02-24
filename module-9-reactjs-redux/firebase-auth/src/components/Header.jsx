import React from 'react'
import {Container,Row,Button} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";

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
user
?
<div>
<Container className='p-4'>
<Row>
<div className='col-md-3'>Call Us :(+91)9998003879</div>
<div className='col-md-4 ms-0'>
<input type='text' placeholder='search anything here' className='form-control' />
</div>
<div className='col-md-5'><b className='mt-4 text-center'>Welcome : {user && user.email}   
<Button variant="" className='ms-4 bg-danger text-white btn-danger btn-sm' onClick={handleLogout}>Log out</Button></b>
</div>
</Row>
</Container>
</div>
:

<div>
<Container className='p-4'>
<Row>
<div className='col-md-3'>Call Us :(+91)9998003879</div>
<div className='col-md-4 ms-0'>
<input type='text' placeholder='search anything here' className='form-control' />
</div>
<div className='col-md-3'><Link to='/login'><button type='button' className='btn btn-dark bg-dark text-white ms-4'>CreateAccount</button></Link></div>  
</Row>
</Container>
</div> 


)
}