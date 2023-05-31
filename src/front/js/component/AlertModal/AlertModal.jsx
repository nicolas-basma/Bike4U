import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useStore  from '../../store/AppContext.jsx';

const AlertModal = (message) => {
    const { store, action } = useStore();
    const { handleCloseAlert,} = action;
    const {showAlert} = store;

  return (
    <>
      <Modal show={showAlert} onHide={handleCloseAlert}>
        <Modal.Header closeButton>
          <Modal.Title>Bike4U</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button className="customizeBikeBtn" onClick={handleCloseAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;