import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useStore from "../store/AppContext.jsx";

import "./MyNavbar.css";

export const MyNavbar = () => {
  const { store, action } = useStore();
  const { handleShow } = action;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            bikes4u
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home" className="button">
              FAVORITOS
            </Nav.Link>
            <Nav.Link href="#features" className="button" onClick={handleShow}>
              CONTACTO
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
