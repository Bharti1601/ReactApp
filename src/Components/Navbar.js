import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/ContactPage">
              ContactPage
            </NavLink>
            <NavLink className="nav-link" to="/AboutUs">
              AboutUs
            </NavLink>
            <NavLink className="nav-link" to="/SignoutPage">
              LogOut
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
