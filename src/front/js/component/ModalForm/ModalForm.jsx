import React from "react";
import useStore from "../../store/AppContext.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "./ModalForm.css";

const ModalForm = () => {
  const { store, action } = useStore();
  const { show, contact } = store;
  const { handleClose, handleContact, setShow } = action;

  const handleLog = () => {
    console.log(contact);
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                onChange={(e) => handleContact(e.target.value, "name")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => handleContact(e.target.value, "email")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="city"
                onChange={(e) => handleContact(e.target.value, "city")}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Tell us your doubts</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => handleContact(e.target.value, "message")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleLog}>
            Send Mensagge
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
