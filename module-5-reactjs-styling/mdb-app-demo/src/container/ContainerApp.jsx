import React from 'react'
import { MDBContainer,MDBRow,MDBCard,MDBCardHeader,MDBCardBody,MDBSpinner } from 'mdb-react-ui-kit'
export default function ContainerApp() {
return (

<>
<MDBContainer className='mx-auto shadow-lg w-50 mt-5 p-5 bg-light'>
<MDBSpinner grow color='primary'>
<span className='visually-hidden'>Loading...</span>
</MDBSpinner>
<MDBSpinner grow className='' color='secondary'>
<span className='visually-hidden'>Loading...</span>
</MDBSpinner>
<MDBSpinner grow color='primary'>
<span className='visually-hidden'>Loading...</span>
</MDBSpinner>
<MDBSpinner grow className='' color='secondary'>
<span className='visually-hidden'>Loading...</span>
</MDBSpinner><MDBSpinner grow color='primary'>
<span className='visually-hidden'>Loading...</span>
</MDBSpinner>
<MDBSpinner grow className='' color='secondary'>
<span className='visually-hidden'>Loading...</span>
</MDBSpinner>
<MDBRow>
<div className='col-md-4'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-O4_bAKGXNNAkU0aLsAGXvrYmWQxVHqZZbQ&s' alt='login' className='img-fluid' />
</div>
<div className='col-md-8'>
<MDBCard>

<MDBCardHeader className='bg-dark text-white'>Login Form</MDBCardHeader>
<MDBCardBody className='p-4'>
<form>
<div className='form-group mt-2'>
<input type='text' className='form-control' placeholder='Email *' />
</div>

<div className='form-group mt-2'>
<input type='password' className='form-control' placeholder='Password *' />
</div>


<div className='form-group mt-3'>
<input type='submit' className='btn b tn-dark bg-dark text-white' value="Login" />
<b><a href="" className="ms-2">Forget Password ?</a></b>
</div>
</form>
</MDBCardBody>
</MDBCard>
</div>
</MDBRow>
</MDBContainer>
</>
)
}
