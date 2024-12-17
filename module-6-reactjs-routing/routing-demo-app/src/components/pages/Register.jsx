import React from 'react'
import { Container,Row } from "react-bootstrap";
import Header from '../Header';
import Navbar from '../Navbar';
export default function Register() {
  return (
    <>
          <Header />
          <Navbar />
           <Container fluid className="p-5 shadow">
               <Row>
                   <div className="col-md-4 p-5"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK3hf9kn0o4wSBzq7j2FvUpPgzZOjL58O7A&s" className='img-fluid' />
                    </div>
                   <div className="col-md-8 p-5"> 
                   <h1>Create Your account </h1>
                   <form>
                    <div className='form-group mt-3 w-75'>
                        <input type='text' placeholder='Name *' className='form-control' />
                    </div>
                    <div className='form-group mt-3 w-75'>
                        <input type='text' placeholder='Email *' className='form-control' />
                    </div>
                    <div className='form-group mt-3 w-75'>
                        <input type='text' placeholder='Password *' className='form-control' />
                    </div>
                    <div className='form-group mt-3 w-75'>
                        <input type='text' placeholder='Phone *' className='form-control' />
                    </div>
                    <div className='form-group mt-3 w-75'>
                        <input type='text' placeholder='Address *' className='form-control' />
                    </div>
                    <div className='form-group mt-3 w-75'>
                        <input type='text' value="Register" className='btn btn-lg btn-dark text-white' />
                    </div>
                   </form>

                   </div>
                  
               </Row>
           </Container>
       </>
  )
}
