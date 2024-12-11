import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from './Slider'
import about from '../assets/images/about.jpg'
import person1 from '../assets/images/p1.jpg'
import person5 from '../assets/images/p5.jpg'
import person2 from '../assets/images/p4.jpg'
import person3 from '../assets/images/p3.jpg'
import person4 from '../assets/images/p2.jpg'


export default function Content() {
return (
<>
{/* slider components */}
<Slider />
{/* contents components */}
<div className='portfolio-content bg-white p-5 mx-auto'>
<div className='row'>
<div className='col-md-7'>
<h1>About Me</h1>
<hr align="left" className='border border-1 w-25 border-dark' />
<p className='fs-5'>I am a Professional Frontend Developer</p>
<p>Brijesh Pandey is a INDIA based designer specialising in Web Developement,Web Designing,Web/UI Design, Graphic Design, Branding, Illustration & Photography. He has a worldwide client roster and his work is regulary featured in design related publications. Brijesh Pandey is also a regular speaker at design/tech conferences.</p>
<button type='button' className='btn btn-md btn-success'>Hire Me</button>
<button type='button' className='btn btn-md btn-primary ms-2'>Download CV</button>
</div>
<div className='col-md-5'>
<img src={about} alt='about' className='img-fluid w-75' />
</div>
</div>
{/* services start here */}
<div className='our-services p-0 mt-4 overflow-hidden'>
<h1>Services</h1>
<hr align="left" className='border border-1 w-25 border-dark' />
<div className='row g-3'>

<div className='col-md-4'>
<div className='p-3 border bg-light'>
<h1 className='text-center'><span className='bi bi-globe'></span></h1>
<h2 className='text-center mt-3'>Designing</h2>
<p className='text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>

<div className='col-md-4'>

<div className='p-3 border bg-light'>
<h1 className='text-center'><span className='bi bi-telephone'></span></h1>
<h2 className='text-center mt-3'>Development</h2>
<p className='text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>

<div className='col-md-4'>

<div className='p-3 border bg-light'>
<h1 className='text-center'><span className='bi bi-person'></span></h1>
<h2 className='text-center mt-3'>Marketing</h2>
<p className='text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
</div>

</div>        
</div>

{/* my skills */}

<div className='our-services p-0 mt-4 overflow-hidden'>
<h1>My Skills</h1>
<hr align="left" className='border border-1 w-25 border-dark' />
<div className='row g-5'>
<div className='col-md-6'>
<div className='p-3'>
<p className='text-center mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<div className="progress">

<div
className="progress-bar bg-success"
role="progressbar"
style={{ width: "25%" }}
aria-valuenow={25}
aria-valuemin={0}
aria-valuemax={100}
>Android (25%)</div>
</div>

<div className="progress mt-3">
<div
className="progress-bar bg-info"
role="progressbar"
style={{ width: "85%" }}
aria-valuenow={85}
aria-valuemin={0}
aria-valuemax={100}>Frontend (85%)</div>
</div>
<div className="progress mt-3">
<div
className="progress-bar bg-warning"
role="progressbar"
style={{ width: "92%" }}
aria-valuenow={92}
aria-valuemin={0}
aria-valuemax={100}>Laravel & Node js(92%)</div>
</div>
<div className="progress mt-3">
<div
className="progress-bar bg-danger"
role="progressbar"
style={{ width: "95%" }}
aria-valuenow={95}
aria-valuemin={0}
aria-valuemax={100}>React Js(95%)</div>
</div>

</div>
</div>

<div className='col-md-6'>
<div className='row g-2'>
<div className='col-md-4'>
<div className='p-3'>
<h1 className='text-center'><span className='bi bi-globe text-primary'></span></h1>
<h2 className='text-center mt-3'>10</h2>
</div>
</div>
<div className='col-md-4'>
<div className='p-3'>
<h1 className='text-center'><span className='bi bi-calendar-plus text-danger'></span></h1>
<h2 className='text-center mt-3'>5</h2>
</div>
</div>
<div className='col-md-4'>
<div className='p-3'>
<h1 className='text-center'><span className='bi bi-cake'></span></h1>
<h2 className='text-center mt-3'>10</h2>
</div>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>

</div>
</div>        
</div>

{/* projects */}
<div className='w-100 bg-light p-5'>
<h1>Projects</h1>
<hr align="left" className='border border-1 w-25 border-dark' />
<div className='row g-1'>

<div className='col-md-3'>
<div className='p-2'>
<img src={person1} alt='person1' className='img-fluid w-100' />
</div>
</div>
<div className='col-md-3'>
<div className='p-2'>
<img src={person2} alt='person1' className='img-fluid w-100' />
</div>
</div>
<div className='col-md-3'>
<div className='p-2'>
<img src={person3} alt='person1' className='img-fluid w-100' />
</div>
</div>

<div className='col-md-3'>
<div className='p-2'>
<img src={person4} alt='person1' className='img-fluid w-100' />
</div>
</div>

<div className='col-md-3 mt-2'>
<div className='p-2'>
<img src={person1} alt='person1' className='img-fluid w-100' />
</div>
</div>
<div className='col-md-3 mt-2'>
<div className='p-2'>
<img src={person2} alt='person1' className='img-fluid w-100' />
</div>
</div>
<div className='col-md-3 mt-2'>
<div className='p-2'>
<img src={person3} alt='person1' className='img-fluid w-100' />
</div>
</div>

<div className='col-md-3 mt-2'>
<div className='p-2'>
<img src={person4} alt='person1' className='img-fluid w-100' />
</div>
</div>
</div>
</div>
{/* education & experiance */}
<div className='w-100 bg-light p-5'>
<h1>Experience and Educations</h1>
<hr align="left" className='border border-1 w-25 border-dark' />
<p className='text-center'><button className='btn btn-md btn-primary text-white'><span className='bi bi-chat'></span>Experience</button>
<button className='btn btn-md btn-dark text-white ms-2'><span className='bi bi-earbuds'></span>Education</button>
</p>
<div className='row g-1'>
<div className='col-md-6'>
<h3>Master in Design</h3>
<hr align="left" className='border border-1 w-25 border-dark' />  
<p>Transform your design career in just 12 months with an industry-ready and AI-driven Master of Design degree. Learn how to build world-class products from design leaders at Apple, Pinterest, Cisco, and PayPal. Enrol now!</p>

<h3>Informations Technology</h3>
<hr align="left" className='border border-1 w-25 border-dark' />  
<p>Transform your design career in just 12 months with an industry-ready and AI-driven Master of Design degree. Learn how to build world-class products from design leaders at Apple, Pinterest, Cisco, and PayPal. Enrol now!</p>
</div>
<div className='col-md-6'>
<h3>Bachlor Degree</h3>
<hr align="left" className='border border-1 w-25 border-dark' />  
<p>Transform your design career in just 12 months with an industry-ready and AI-driven Master of Design degree. Learn how to build world-class products from design leaders at Apple, Pinterest, Cisco, and PayPal. Enrol now!</p>

<h3>Diploma in Informations</h3>
<hr align="left" className='border border-1 w-25 border-dark' />  
<p>Transform your design career in just 12 months with an industry-ready and AI-driven Master of Design degree. Learn how to build world-class products from design leaders at Apple, Pinterest, Cisco, and PayPal. Enrol now!</p>
</div>
</div>
</div>
</div>


<div className='container p-5'>
<h3 className='text-white'>Get In Touch</h3>
<hr align="left" className='border border-1 w-25 border-white' />      
<div className='row'>
<div className="col-md-6">
    <form>
        <div className='form-group mt-3'>
            <input type='text' placeholder='Name *' className='form-control bg-secondary' />
        </div>
        
        <div className='form-group mt-3'>
            <input type='text' placeholder='Email *' className='form-control bg-secondary' />
        </div>
    
        <div className='form-group mt-3'>
            <input type='submit' value="Send" className='btn btn-md bg-white text-dark' />
        </div>
    </form>
</div>
<div className="col-md-6">
    <div className='form-group mt-3'>
        <textarea placeholder='write comments here *' className='form-control bg-secondary' cols="8" rows="3"></textarea>
    </div>

</div>
</div>

<hr className="border border-1 border-white" />

<p className="text-white text-center">Copyright @ 2020-2024 all right reserved</p>
</div>

</>
)
}
