import React from "react";
import { Container, Row } from "react-bootstrap";
import topslogo from "../../assets/images/logo-header.png";
import brijesh from "../../assets/images/brijesh.png";
export default function Header() {
  return (
    <>
      <Container fluid className="p-1 bg-white shadow">
        <Row>
          <div className="col-md-9">
            <img src={topslogo} alt="logo" className="img-fluid mt-3" />
          </div>
          <div className="col-md-3">
            <ul className="header-links">
              <li className="dropdown">
                <a
                  href=""
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src={brijesh}
                    alt="brijesh"
                    className="img-fluid brijesh-img rounded-circle"
                  />
                  Brijesh Pandey
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="">
                      <span className="bi bi-person"></span> My Profile
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="bi bi-lock"></span> Change Password
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="bi bi-power"></span> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </>
  );
}
