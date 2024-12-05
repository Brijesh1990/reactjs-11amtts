import React from "react";
import { Nav, NavbarBrand } from "react-bootstrap";
export default function Navbar() {
  return (
    <div>
      <Nav className="bg-dark nav navbar navbar-expand-md p-2">
        <ul className="navbar-links">
          <li>
            <a href="">
              <span className="bi bi-house"></span> Dashboard
            </a>
          </li>
          <li className="dropdown">
            <a href="" className="dropdown-toggle" data-bs-toggle="dropdown">
              MyRequest
            </a>
            <ul className="dropdown-menu" style={{ width: "180px" }}>
              <li>
                <a href=""> Add Request</a>
              </li>
              <li>
                <a href=""> Leave Request</a>
              </li>
              <li>
                <a href=""> Manage Leave</a>
              </li>
            </ul>
          </li>
          <li>
            <a href=""> Report</a>
          </li>

          <li>
            <a href="">
              <span className="bi bi-info-circle"></span> Help
            </a>
          </li>
        </ul>
      </Nav>
    </div>
  );
}
