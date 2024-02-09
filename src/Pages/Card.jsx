import React from 'react'
import Aside from '../Components/Aside'
import WalletImage from '../assets/Images/Wallet.png'
import { Button,Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function Card() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='d-flex'>
      <Aside />
      <div style={{ padding: '20px' }}>
        <h1></h1>
        <hr />
        <h1 className=''>Cards</h1>
        <hr />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center ' style={{ height: '500px', width: '60rem' }}>
        <img style={{ width: '100px', height: '100px' }} src={WalletImage} alt="no image" />
        <p style={{ fontSize: '20px', fontWeight: '900' }}>Simplify online shopping</p>
        <p>Add payment card to autofill when shopping online</p>
        <Button onClick={handleShow}>Add Payment Card</Button>

        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="text" placeholder="Item name" />
              </Form.Group>
              <Form.Label className='fw-bold'>Card Information</Form.Label>
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="password" placeholder="Cardholder name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <div className='d-flex'>
                  <Form.Control className='me-5' type="number" placeholder="Expiration month" />
                  <Form.Control type="year" placeholder="Expiration year" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="password" placeholder="Security Code (CVV)" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>

  )
}

export default Card