import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import useStore from "../../store/AppContext.jsx";
import useForms from "../../store/useForms.jsx";
import { FormattedMessage } from "react-intl";

import "./ModalForm.css";

const ModalForm = () => {
  const { store, action } = useStore();
  const { show } = store;
  const { handleClose, setShow } = action;
  const { formInput, myHandleInput } = useForms();
  const url = process.env.REACT_APP_API_SEND_EMAIL;

  //FUNCION PARA VALIDAR EL EMAIL
  const validateEmail = (email) => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
  };

  //FUNCION PARA ENVIAR EL EMAIL A NUESTRO CORREO ELECTRONICO Y ENVIAR UNA RESPUESTA AL USUARIO
  const handleSendMessage = () => {
    const { email, message, name } = formInput;

    if (!validateEmail(email)) {
      alert("Por favor ingrese un email valido");
      return;
    }
    if (email === undefined || message === undefined || name === undefined) {
      alert("Por favor rellene todos los campos");
      return; // si los campos no estan definidos, no se envia el email
    } else if (email === "" || message === "" || name === "") {
      alert("Por favor rellene todos los campos");
      return; // si los campos estan vacios, no se envia el email
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message, name }),
    })
      .then((response) => {
        response.json();
        console.log("Mensaje enviado");
      })
      .catch((error) => console.log(error));
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage id="contactModalTittle"></FormattedMessage>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>
                <FormattedMessage id="contactModalName"></FormattedMessage>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formInput[name]}
                placeholder="name"
                autoFocus
                onChange={myHandleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <FormattedMessage id="contactModalEmail"></FormattedMessage>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formInput[name]}
                placeholder="name@example.com"
                onChange={myHandleInput}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <FormattedMessage id="contactModalTextHeader"></FormattedMessage>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formInput[name]}
                rows={3}
                onChange={myHandleInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <FormattedMessage id="buttonCancel"></FormattedMessage>
          </Button>
          <Button variant="success" onClick={handleSendMessage}>
            <FormattedMessage id="buttonSendMessage"></FormattedMessage>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
