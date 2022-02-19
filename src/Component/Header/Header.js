import React from "react";
import {  Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user ,logOut,admin} = useAuth();
  return (
    <div>
      <Navbar  bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="logo container "
              src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="container">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/home"
              >
                Home
              </NavLink>

              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/product"
              >
                Product
              </NavLink>
              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="m-2 text-decoration-none text-uppercase"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </Nav>
            <Form className="d-flex">
              {
                user.email?
                
                  
         <div>
                    <div className="dropdown">
                    <button className="  btn  dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-columns"></i> DashBoard
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item fw-normal" to="#"> <i className="fas fa-user-circle"></i> Hi , {user.displayName}</Link></li>
                      <li><Link className="dropdown-item" to="/manage">My Order</Link></li>
                      <li><Link className="dropdown-item" to="/payment">Pay </Link></li>
                      <li><Link className="dropdown-item" to="/review">Review</Link></li>
                      
                        
                      {
                          admin && <div>
                            <li><Link className="dropdown-item" to="/admin">Make Admin</Link></li>
                      <li><Link className="dropdown-item" to="/addService">Add Service</Link></li>
                        </div>
                      }
                      
                      <li><Link  onClick={logOut} className="dropdown-item fw-bolder" to="#">Log Out</Link></li>
                       </ul>
        </div>
                  </div>
                  :
                  <Link to="/login" className="btn  btn-outline-primary mx-3">
                LogIn
              </Link>
              }
            </Form>
            <Form className="d-flex">
            
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
