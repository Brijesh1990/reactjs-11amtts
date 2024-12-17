import React from "react";
import { Container,Row } from "react-bootstrap";
export default function Content()
{
  return (
    <>
        <Container fluid className="p-5 shadow">
            <Row>
                <div className="col-md-4 p-5"> 
                 <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-500.gif" className="img-fluid" />
                 </div>
                <div className="col-md-8 p-5"> 
                <h1>Welcome to Home Page</h1></div>
               
            </Row>
        </Container>
    </>
  )  
}