import React from 'react'
import { Container,Row } from "react-bootstrap";
import Header from '../Header';
import Navbar from '../Navbar';
export default function Feedback() {
  return (
    <>
           <Header />
           <Navbar />
           <Container fluid className="p-5 shadow">
               <Row>
                   <div className="col-md-4 p-5"> 
                    <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-500.gif" className="img-fluid" />
                    </div>
                   <div className="col-md-8 p-5"> 
                   <h1>Our Feedback </h1>
                   </div>
                  
               </Row>
           </Container>
       </>
  )
}
