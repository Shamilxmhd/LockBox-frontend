import React from 'react'
import { useState } from 'react';
import WalletImage from '../assets/Images/Wallet.png'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';


function AddCard() {
  const [cardData, setCardData] = useState({
    itemName: '', cardholderName: '', month: '', year: '', cvv: ''
  })
  console.log(cardData);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
              <div className="mb-3 rounded" >
                <Form.Control type="text" placeholder="Item name" onChange={e => setCardData({ ...cardData, itemName: e.target.value })} value={cardData.itemName} />
              </div>
              <Form.Label className='fw-bold'>Card Information</Form.Label>
              <div className="mb-3 rounded" >
                <Form.Control type="text" placeholder="Cardholder name" onChange={e => setCardData({ ...cardData, cardholderName: e.target.value })} value={cardData.cardholderName} />
              </div>
              <div className="mb-3" >
                <div className='d-flex'>
                  <Form.Control className='me-5' type="text" placeholder="Expiration month" onChange={e => setCardData({ ...cardData, month: e.target.value })} value={cardData.month} />
                  <Form.Control type="year" placeholder="Expiration year" onChange={e => setCardData({ ...cardData, year: e.target.value })} value={cardData.year} />
                </div>
              </div>
              <div className="mb-3 rounded" >
                <Form.Control type="password" placeholder="Security Code (CVV)" onChange={e => setCardData({ ...cardData, cvv: e.target.value })} value={cardData.cvv} />
              </div>
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
    </>
  )
}

export default AddCard