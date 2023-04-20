import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import useStore from "../store/AppContext.jsx";

import "./MyNavbar.css";

export const MyNavbar = () => {
  const { store, action } = useStore();
  const { handleShow } = action;
  const { logo } = store;
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="navbarBrand">
            <Link to="/" className="logo">
              <img className="logo" src={logo} />
            </Link>
            <Link to="/" className="branding">
              bike4U
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="button">
              <Link to="customizeBike">PERSONALIZA TU BICI </Link>
            </Nav.Link>

            <Nav.Link className="button">FAVORITOS</Nav.Link>

            <Nav.Link className="button">
              <Link to="aboutus">CONTACTO</Link>
            </Nav.Link>
            <Nav.Link>
              <button className="buttonLogin">
                <i class="fa-solid fa-user" id="loginButton"></i>
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
