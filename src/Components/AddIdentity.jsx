import React, { useContext, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addIdentityAPI } from '../Services/allAPIs';
import { addIdentityResponseContext } from '../ContextAPI/ContextShare';


function AddIdentity() {

  const { addIdentityResponse, setAddIdentityResponse } = useContext(addIdentityResponseContext)
  const [IdentityData, setIdentityData] = useState({
    itemName: '', firstName: '', lastName: '', username: '', email: '', company: '', phone: '', passportNumber: '', licenseNumber: '', address: '', city: '', state: '', postalCode: '', country: '', createdAt: new Date()
  })
  console.log(IdentityData);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setIdentityData({
      itemName: '', firstName: '', lastName: '', username: '', email: '', company: '', phone: '', passportNumber: '', licenseNumber: '', address: '', city: '', state: '', postalCode: '', country: '', createdAt: new Date()
    })
  };

  const handleShow = () => setShow(true);

  const handleAddIdentity = async () => {
    const { itemName, firstName} = IdentityData
    if (!itemName || !firstName) {
      toast.info('Please fill the required fields!!!')
    } else {
      const token = sessionStorage.getItem('token')
      console.log(token);
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        // api call 
        try {
          const result = await addIdentityAPI(IdentityData, reqHeader)
          console.log(result);
          if (result.status == 200) {
            console.log(result.data);
            handleClose()
            setAddIdentityResponse(result.data)
          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(result);
        }
      }
    }
  }

  return (

    <>
      <div className=''>
        <Button onClick={handleShow} >Add Identity Card</Button>
        {/* Modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Add Identity
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <FloatingLabel className="mb-3 rounded" label={<span>Item name<span style={{ color: 'red' }}>*</span></span>}>
                <Form.Control type="text" placeholder="Item name" onChange={e => setIdentityData({ ...IdentityData, itemName: e.target.value })} value={IdentityData.itemName} />
              </FloatingLabel>
              <Form.Label className='fw-bold'>Personal Information</Form.Label>
              <div className="mb-3">
                <div className='d-flex'>
                  <FloatingLabel label={<span>First name<span style={{ color: 'red' }}>*</span></span>} className='me-5'> <Form.Control type="text" placeholder="First name" onChange={e => setIdentityData({ ...IdentityData, firstName: e.target.value })} value={IdentityData.firstName} /></FloatingLabel>
                  <FloatingLabel label="Last name" > <Form.Control type="text" placeholder="Last name" onChange={e => setIdentityData({ ...IdentityData, lastName: e.target.value })} value={IdentityData.lastName} /></FloatingLabel>
                </div>
              </div>
              <div className="mb-3"  >
                <div className='d-flex'>
                  <FloatingLabel label="Username" className='me-5'><Form.Control type="text" placeholder="Username" onChange={e => setIdentityData({ ...IdentityData, username: e.target.value })} value={IdentityData.username} /></FloatingLabel>
                  <FloatingLabel label="Email"><Form.Control type="email" placeholder="Email" onChange={e => setIdentityData({ ...IdentityData, email: e.target.value })} value={IdentityData.email} /></FloatingLabel>
                </div>
              </div>
              <div className="mb-3" >
                <div className='d-flex'>
                  <FloatingLabel label="Company" className='me-5'> <Form.Control type="text" placeholder="Company" onChange={e => setIdentityData({ ...IdentityData, company: e.target.value })} value={IdentityData.company} /></FloatingLabel>
                  <FloatingLabel label="Phone"><Form.Control type="text" placeholder="Phone" onChange={e => setIdentityData({ ...IdentityData, phone: e.target.value })} value={IdentityData.phone} /></FloatingLabel>
                </div>
              </div>
              <div className="mb-3">
                <div className='d-flex'>
                  <FloatingLabel label="Passport number" className='me-5'> <Form.Control type="text" placeholder="Passport number" onChange={e => setIdentityData({ ...IdentityData, passportNumber: e.target.value })} value={IdentityData.passportNumber} /></FloatingLabel>
                  <FloatingLabel label="License number"> <Form.Control type="text" placeholder="License number" onChange={e => setIdentityData({ ...IdentityData, licenseNumber: e.target.value })} value={IdentityData.licenseNumber} /></FloatingLabel>
                </div>
              </div>
              <Form.Label className='fw-bold'>Contact Information</Form.Label>
              <FloatingLabel label="Address" className="mb-3 rounded">
                <Form.Control type="text" placeholder="Address" onChange={e => setIdentityData({ ...IdentityData, address: e.target.value })} value={IdentityData.address} />
              </FloatingLabel>
              <FloatingLabel label="City" className="mb-3 rounded">
                <Form.Control type="text" placeholder="City" onChange={e => setIdentityData({ ...IdentityData, city: e.target.value })} value={IdentityData.city} />
              </FloatingLabel>
              <FloatingLabel label="State" className="mb-3 rounded">
                <Form.Control type="text" placeholder="State" onChange={e => setIdentityData({ ...IdentityData, state: e.target.value })} value={IdentityData.state} />
              </FloatingLabel>
              <FloatingLabel label="Postal code" className="mb-3 rounded">
                <Form.Control type="text" placeholder="Postal code" onChange={e => setIdentityData({ ...IdentityData, postalCode: e.target.value })} value={IdentityData.postalCode} />
              </FloatingLabel>
              <FloatingLabel label="Country" className="mb-3 rounded">
                <Form.Control type="text" placeholder="Country" onChange={e => setIdentityData({ ...IdentityData, country: e.target.value })} value={IdentityData.country} />
              </FloatingLabel>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" onClick={handleAddIdentity}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ToastContainer theme='colored' />
    </>
  )
}

export default AddIdentity