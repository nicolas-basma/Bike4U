import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import "./MyNavbar.css";

export const MyNavbar = () => {
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <Link to="/">bike4u</Link>
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home" className="button">
              FAVORITOS
            </Nav.Link>
            <Nav.Link href="#features" className="button">
              <Link to="aboutus">CONTACTO</Link>
            </Nav.Link>
            <Nav.Link href="#pricing" className="button">
              LOGIN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
