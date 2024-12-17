import React from "react";
import { Container,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Header()
{
  return (
    <>
        <Container fluid className="p-5 shadow">
            <Row>
                <div className="col-md-3 p-3"> Call Us:(+9173357217) </div>
                <div className="col-md-7 p-3"> <input type="text" placeholder="search anything here......" className="form-control"/> </div>
                <div className="col-md-2 p-3"> <Link to="/create-account"><button type="button" className="btn btn btn-sm btn-dark text-white">Create Account</button></Link> </div>
            </Row>
        </Container>
    </>
  )  
}