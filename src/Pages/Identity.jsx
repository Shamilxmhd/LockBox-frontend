import React, { useState } from 'react'
import Aside from '../Components/Aside'
import { Button, Form } from 'react-bootstrap'
import IdentityImage from '../assets/Images/Identity.png'
import Modal from 'react-bootstrap/Modal';







function Identity() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='d-flex'>
      <Aside />
      <div className='text-center' style={{ marginLeft: '', padding: '20px' }}>
        <h1></h1>
        <hr />
        <h1 className=''>Identites</h1>
        <hr />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center ' style={{ height: '500px', width: '52.1rem' }}>
        <img style={{ width: '100px', height: '100px' }} src={IdentityImage} alt="no image" />
        <p style={{ fontSize: '20px', fontWeight: '900' }}>Fill online forms faster</p>
        <p>Add Identity card so that Locker can autofill online forms on behalf of you.</p>
        <Button onClick={handleShow} >Add Identity Card</Button>
        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Identity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="text" placeholder="Item name" />
              </Form.Group>
              <Form.Label className='fw-bold'>Personal Information</Form.Label>
              <Form.Group className="mb-3" controlId="formBasicName">
                <div className='d-flex'>
                  <Form.Control className='me-5' type="text" placeholder="First name" />
                  <Form.Control type="text" placeholder="Last name" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <div className='d-flex'>
                  <Form.Control className='me-5' type="text" placeholder="Username" />
                  <Form.Control type="email" placeholder="Email" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <div className='d-flex'>
                  <Form.Control className='me-5' type="text" placeholder="Company" />
                  <Form.Control type="number" placeholder="Phone" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <div className='d-flex'>
                  <Form.Control className='me-5' type="number" placeholder="Passport number" />
                  <Form.Control type="number" placeholder="License number" />
                </div>
              </Form.Group>
              <Form.Label className='fw-bold'>Contact Information</Form.Label>
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="text" placeholder="City" />
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="text" placeholder="State" />
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="number" placeholder="Postal code" />
              </Form.Group>
              <Form.Group className="mb-3 rounded" controlId="formBasicName">
                <Form.Control type="text" placeholder="Country" />
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

export default Identity