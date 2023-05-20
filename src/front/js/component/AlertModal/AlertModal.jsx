import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useStore  from '../../store/AppContext.jsx';

const AlertModal = () => {
    const { store, action } = useStore();
    const { handleCloseAlert,} = action;
    const {showAlert} = store;

  return (
    <>
      <Modal show={showAlert} onHide={handleCloseAlert}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAlert}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;