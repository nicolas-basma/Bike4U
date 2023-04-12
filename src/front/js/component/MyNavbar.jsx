import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "./MyNavbar.css";
import MyDropdown from "./MyDropdow.jsx";

export const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bikes</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <MyDropdown />
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
