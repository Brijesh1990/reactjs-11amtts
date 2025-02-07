import React,{useState,useRef,useEffect} from 'react'
import NavbarApp from './Navbar'
import Footer from './Footer'
import { Container,Row } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
export default function ContactApp() {
// destructring of data
// display each task
const[data,setData]=useState(0);
// add contact us data and send email in admin email address in api ......http://localhost:8000/contact-us
// stored all serviceId | publicId | templateId from email js
const serviceId="service_k4bodyj";
const templateId="template_95b13bh";
const publicId="pTcb6q47xuRiZaSQm";
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const subject=useRef("");
const comment=useRef("");
const navigate=useNavigate();
// const {id}=useParams();
// create a eventFormHandeler function for add task when we onsubmit on form
const addTaskFormHandeler=(e)=>{
e.preventDefault();
// send email using email js services
emailjs.sendForm(serviceId,templateId,e.target,publicId);
var insert={
name:name.current.value,
email:email.current.value,
phone:phone.current.value,
subject:subject.current.value,
comment:comment.current.value
}
// applied axios for post data to stored in db.json in tasks api

axios.post(`http://localhost:8000/contact-us`,insert).then(()=>{
// pass a insert data or task message via Swal
Swal.fire({
title: "Good job!",
text: "Thanks Your details will be emailed on admin our admin will contact with you Soon!",
icon: "success"
});

navigate('/contact-us');
e.target.reset();
})
}

return (
<div>
<NavbarApp />
{/* content */}
<Container className='w-75  p-3 mt-5 bg-white top-0'>
<Row>
<div className='col-md-4'>
<h3>Our office Address</h3>
<hr />

<p><b>Office Address :</b>101, Aditya Complex, Jalaram 2 Street Number 2, above Sbi Bank, Near Indira Circle, Jala Ram Nagar, Rajkot, Gujarat 360005</p>   
<p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6799314943046!2d70.77238027412226!3d22.29011104326695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1738302507858!5m2!1sen!2sin" width="100%" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe></p>
</div>
<div className='col-md-8'>
<h1 className='fs-4'>Contact Us</h1>
<hr />
<form onSubmit={addTaskFormHandeler}>

<div className="input-group mb-3">
<span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
<input type="text" name="name" ref={name} className="form-control" placeholder="Name *" aria-label="Username" aria-describedby="basic-addon1" />
</div>


<div className="input-group mb-3">
<span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
<input type="text" ref={email} name="email" className="form-control" placeholder="Email *" aria-label="Username" aria-describedby="basic-addon1" />
</div>


<div className="input-group mb-3">
<span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
<input type="text" ref={phone} name="phone" className="form-control" placeholder="Phone *" aria-label="Username" aria-describedby="basic-addon1" />
</div>


<div className="input-group mb-3">
<span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
<input type="text" ref={subject} name="subject" className="form-control" placeholder="Subject *" aria-label="Username" aria-describedby="basic-addon1" />
</div>


<div className="input-group mb-3">
<span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
<textarea ref={comment} name="comment" className="form-control" placeholder="Comment" aria-label="Details" aria-describedby="basic-addon1" />
</div>

<div className="input-group mb-3">

<button type="submit" className="btn btn btn-md btn-warning text-dark">Send <span className='bi bi-caret-right-fill'></span></button>
</div>
</form>
</div>
</Row>
</Container>
<Footer />
</div>
)
}
