import React from "react";
import useStore from "../../store/AppContext.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useForms from "../../store/useForms.jsx";

import "./ModalForm.css";

const ModalForm = () => {
  const { store, action } = useStore();
  const { show } = store;
  const { handleClose, setShow } = action;
  const { handleInput, formInput } = useForms();

  const handleLog = () => {
    console.log(formInput);
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
                name="name"
                placeholder="your name"
                autoFocus
                onChange={(e) => handleInput(e.target.value, "name")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                onChange={(e) => handleInput(e.target.value, "email")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="city"
                onChange={(e) => handleInput(e.target.value, "city")}
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
                onChange={(e) => handleInput(e.target.value, "message")}
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
