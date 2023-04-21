import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import useStore from "../../store/AppContext.jsx";

import "./MyNavbar.css";
import MyUserLoginDropdown from "../MyUserDropdown/MyUserDropdown.jsx";

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
              <Nav.Item className="btn button">PERSONALIZA TU BICI</Nav.Item>
            </Link>
            <Nav.Item className="btn button">FAVORITOS</Nav.Item>
            <Nav.Item className="btn button">
              <Link className="button" to="aboutus">
                CONTACTO
              </Link>
            </Nav.Item>
            <MyUserLoginDropdown />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;

//<Nav.Item className="button dropdown-toggle" data-bs-toggle="myUserLoginDropdown" aria-expanded="false" data-bs-auto-close="outside">LOGIN</Nav.Item>
