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
  const { handleShow, setLang } = action;
  const { logo, lang } = store;

  const handleSelect = (eventKey) => setLang(eventKey);

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

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
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

              <Link className="button" to="/aboutus">
                <Nav.Item className="btn button">
                  <FormattedMessage id="myNavbarButtomContact"></FormattedMessage>
                </Nav.Item>
              </Link>
              <MyUserLoginDropdown />
            </Nav>
          </Navbar.Collapse>
          <MyLanguageDropdown />
          
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;