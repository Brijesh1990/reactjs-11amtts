import React from 'react'
import { Container } from 'react-bootstrap'
export default function Navbar() {
  return (
    <>
        <section id="portfolio-navbar">
            <Container className='p-4'>
                <h1 className='text-center text-white logo'><span className='bi bi-gem fs-1 text-white text-center'></span> Vishwa Portfolio</h1>
            </Container>
        </section>
    </>
  )
}
