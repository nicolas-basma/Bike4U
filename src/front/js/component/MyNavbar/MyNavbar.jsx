import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

import "./MyNavbar.css";
import MyUserLoginDropdown from "../MyUserLoginDropdown/MyUserLoginDropdown.jsx";
import MyLanguageDropdown from "../MyLanguageDropdown/MyLanguageDropdown.jsx";

const MyNavbar = () => {
  const { store, action } = useStore();
  const { handleShow } = action;
  const { logo } = store;

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container fluid="md">
          <Navbar.Brand className="logo">
            <Link to="/" className="branding">
              <img src={logo} width={100} />
            </Link>
            <Link to="/" className="branding">
              bike4u
            </Link>
          </Navbar.Brand>
          
          <div className="myDiv d-flex d-inline">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="bg-black rounded onTop">
              <Link to="/customizebike">
                <Nav.Item className="btn button">
                  <FormattedMessage id="myNavbarButtomCustomizeBike"></FormattedMessage>
                </Nav.Item>
              </Link>
              <Link to="/favorites">
                <Nav.Item className="btn button">
                  <FormattedMessage id="myNavbarButtomFavourites"></FormattedMessage>
                </Nav.Item>
              </Link>
              <Link to="/aboutus">
                <Nav.Item className="btn button">
                  <FormattedMessage id="myNavbarButtomContact"></FormattedMessage>
                </Nav.Item>
              </Link>
                          
              <MyUserLoginDropdown />
              <MyLanguageDropdown />

            </Nav>
          </Navbar.Collapse>
          
         
          
          
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;