import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function Header() {
  return (
       <>
       <section id='portfolio-header'>
        <Container className='p-3'>
            <Row>
                <div className='col-md-9'>
                    <ul className='header-links'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Contact me</a></li>
                    </ul>
                </div>
                <div className='col-md-3 text-white'>
                    <span className='bi bi-facebook fs-4 ms-1'></span>
                    <span className='bi bi-instagram fs-4 ms-1'></span>
                    <span className='bi bi-twitter fs-4 ms-1'></span>
                    <span className='bi bi-whatsapp fs-4 ms-1'></span>
                </div>
            </Row>
        </Container>
        </section>
       </>
  )
}
