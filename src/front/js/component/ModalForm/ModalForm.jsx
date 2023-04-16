import React, { useState } from "react";
import useStore from "../../store/AppContext.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "./ModalForm.css";

const ModalForm = () => {
  const { store, action } = useStore();
  const {
    logo,
    show,
    nameContact,
    emailContact,
    cityContact,
    mensaggeContact,
  } = store;
  const {
    handleClose,
    handleNameContact,
    handleEmailContact,
    handleCityContact,
    handleMensagge,
    setShow,
  } = action;

  const handleLog = () => {
    console.log(`email`, emailContact);
    console.log(`name`, nameContact);
    console.log(`city`, cityContact);
    console.log(`mensaje`, mensaggeContact);
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleEmailContact}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                onChange={handleNameContact}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="city"
                autoFocus
                onChange={handleCityContact}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tell us your doubts</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleMensagge} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="ligth" onClick={handleLog}>
            <img src={logo} width={40} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
