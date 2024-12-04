import React from 'react'
import { Container } from 'react-bootstrap'
export default function IconsApp() {
return (
<div>
<Container className='p-5 mt-5 bg-warning'>
<h1>Notifications <span className='bi bi-bell'><span className='badge badge-sm bg-danger top-0 '>1</span></span></h1> 

<button type="button" className="btn btn-primary position-relative">Inbox
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">99+<span className="visually-hidden">unread messages</span>
</span>
</button>
<br/> <br/>
<button type='button' className='btn btn-danger text-white btn-md'>View Cart <span className='bi bi-cart-plus fs-4'>5</span></button>
</Container>
</div>
)
}
