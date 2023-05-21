import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useStore from "../../store/AppContext.jsx";

const invitedModal = () => {
    const navigate = useNavigate();
    const { store, action } = useStore();
    const {useForms,setUserInfo, utils}=action;
    const {formInput, myHandleInput}=useForms();
    const {height, bike_type}=formInput;
    const { askInfo } = store;
    const { setAskInfo } = action;
    
    
    const handleClose = () => setAskInfo(false);
    const go = () => navigate('/customizeBike');
    
    const handleisIvitedUser = async () => {
        const body = {
            size : height,
            bike_type,
        }
        setUserInfo(body);
        go()
        handleClose();
        
  }

  return (
    <>
      <Modal show={askInfo} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Introduzca sus Caracteristicas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect" className="form-label">
                Seleccione su altura
              </Form.Label>
              <select
                onChange={myHandleInput}
                name="height"
                className="form-select"
                aria-describedby="selectSize"
              >
                <option>Elige tu altura</option>
                <option value={"s"}>150-160 cm</option>
                <option value={"s"}>161-170 cm</option>
                <option value={"m"}>171-180 cm</option>
                <option value={"l"}>181-190 cm</option>
                <option value={"l"}>+ 190 cm</option>
              </select>
              <Form.Label htmlFor="disabledSelect" className="form-label">
                Seleccione su peso
              </Form.Label>
              <select
                onChange={myHandleInput}
                className="form-select"
                name="weight"
                aria-describedby="selectWeight"
              >
                <option>Elige tu peso</option>
                <option>30-40 kg</option>
                <option>41-50 kg</option>
                <option>51-60 kg</option>
                <option>61-70 kg</option>
                <option>71-80 kg</option>
                <option>81-90 kg</option>
                <option>91-100 kg</option>
                <option>+100 kg</option>
              </select>
              <Form.Label className="form-label" id="typeOfBike">
                Tipo de bicicleta
              </Form.Label>
              <select
                onChange={myHandleInput}
                className="form-select"
                name="bike_type"
                aria-describedby="typeOfBike"
              >
                <option>Elige tu tipo de bicicleta</option>
                <option value={"road"}>Carretera</option>
                <option value={"mtb"}>Montaña</option>
                <option value={"urban"}>Urban</option>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="customizeBikeBtn2" onClick={handleClose}>
            Close
          </Button>
          <Button className="customizeBikeBtn2" onClick={handleisIvitedUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default invitedModal;
