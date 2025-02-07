import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
         {/* content */}
      <Container className='w-50  p-3 mt-5 bg-white top-0'>
      <div className='row'>
      <div className='col-md-4'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7sYxASPkjlolGjGvGoxnP-CCF7S-1kfHsQ&s' className='img-fluid' /></div>
      <div className='col-md-8'>
      <h1 className='fs-4'>Admin Login</h1>
      <hr />
      <form>
      <div className="input-group mb-3">
      <span className="input-group-text bi bi-inbox" id="basic-addon1"></span>
      <input type="text"  className="form-control" placeholder="Enter email *" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
      <span className="input-group-text bi bi-lock" id="basic-addon1"></span>
      <input type="text"  className="form-control" placeholder="Enter Password *" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div className="input-group mb-3">
    
      <button type="submit" className="btn btn btn-md btn-warning text-dark">Login <span className='bi bi-caret-right-fill'></span></button>
      <b className='ms-2'><Link to="">Forget Password ?</Link></b>
      </div>
      </form>
     </div>
     </div>
 
      </Container>
    </div>
  )
}
