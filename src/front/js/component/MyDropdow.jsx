import React from "react";
import { Dropdown } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";

const MyDropdown = () => {
  return (
    <>
      <Dropdown align={"end"}>
        <Dropdown.Toggle variant="dark" id="dropdown-menu-align-end">
          <UseAnimations animation={menu4} strokeColor="white" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Galery</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Contact Us</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default MyDropdown;
