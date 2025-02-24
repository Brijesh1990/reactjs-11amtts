import React from 'react'
import {Container,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header() {
return (
<div>
 <Container className='p-4'>
<Row>
<div className='col-md-3'>Call Us :(+91)9998003879</div>

<div className='col-md-5 ms-4'>
<input type='text' placeholder='search anything here' className='form-control' />
</div>

<div className='col-md-3'><Link to='/login'><button type='button' className='btn btn-dark bg-dark text-white ms-4'>CreateAccount</button></Link></div>
</Row>
</Container>
</div>
)
}