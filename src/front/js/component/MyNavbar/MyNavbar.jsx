import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import useStore from "../../store/AppContext.jsx";

import "./MyNavbar.css";

export const MyNavbar = () => {
  const { store, action } = useStore();
  const { handleShow } = action;
  const { logo } = store;
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="logo">
            <Link to="/" className="branding">
              <img src={logo} width={100} />
            </Link>
            <Link to="/" className="branding">
              bike4u
            </Link>
          </Navbar.Brand>
          <Nav className="">
            <Link to="/customizebike">
              <Nav.Item className="button">PERSONALIZA TU BICI</Nav.Item>
            </Link>
            <Nav.Item className="button">FAVORITOS</Nav.Item>
            <Nav.Item className="button">
              <Link className="button" to="aboutus">
                CONTACTO
              </Link>
            </Nav.Item>
            <Nav.Item className="button">LOGIN</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
