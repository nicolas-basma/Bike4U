import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import useStore from "../../store/AppContext.jsx";

import "./MyNavbar.css";
import MyUserLoginDropdown from "../MyUserLoginDropdown/MyUserLoginDropdown.jsx";

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
              <Nav.Item className="btn button">
                <FormattedMessage id="myNavbarButtomCustomizeBike"></FormattedMessage>
                
              </Nav.Item>
            </Link>
            <Nav.Item className="btn button">
            <FormattedMessage id="myNavbarButtomFavourites"></FormattedMessage>
            </Nav.Item>
            <Link className="button" to="/aboutus">
              <Nav.Item className="btn button">
              <FormattedMessage id="myNavbarButtomContact"></FormattedMessage>
              </Nav.Item>
            </Link>
            <MyUserLoginDropdown />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
