import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editIdentityAPI } from '../Services/allAPIs';
import { editIdentityResponseContext } from '../ContextAPI/ContextShare';

function EditIdentity({ identity }) {
  const { editIdentityResponse, setEditIdentityResponse } = useContext(editIdentityResponseContext)
  const [IdentityData, setIdentityData] = useState({
    id: identity._id,
    itemName: identity.itemName,
    firstName: identity.firstName,
    lastName: identity.lastName,
    username: identity.username,
    email: identity.email,
    company: identity.company,
    phone: identity.phone,
    passportNumber: identity.passportNumber,
    licenseNumber: identity.licenseNumber,
    address: identity.address,
    city: identity.city,
    state: identity.state,
    postalCode: identity.postalCode,
    country: identity.country
  })

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true)
    setIdentityData({
      id: identity._id,
      itemName: identity.itemName,
      firstName: identity.firstName,
      lastName: identity.lastName,
      username: identity.username,
      email: identity.email,
      company: identity.company,
      phone: identity.phone,
      passportNumber: identity.passportNumber,
      licenseNumber: identity.licenseNumber,
      address: identity.address,
      city: identity.city,
      state: identity.state,
      postalCode: identity.postalCode,
      country: identity.country
    })
  };
  const handleClose = () => setShow(false);

  const handleUpdate = async () => {
    const { itemName, firstName, lastName, username, email, company, phone, passportNumber, licenseNumber, address, city, state, postalCode, country } = IdentityData
    if (!itemName || !firstName || !lastName || !username || !email || !company || !phone || !passportNumber || !licenseNumber || !address || !city || !state || !postalCode || !country) {
      toast.info('Please fill the form completely!!!')
    } else {
      const token = sessionStorage.getItem('token')
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        // API CALL
        try {
          const result = await editIdentityAPI(IdentityData.id, IdentityData, reqHeader)
          console.log(result);
          if (result.status == 200) {
            handleClose()
            setEditIdentityResponse(result.data)
          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  return (
    <>
      <button style={{marginRight:'-25px'}}  className='btn' onClick={handleShow}><i className="fa-regular fa-pen-to-square text-dark"></i></button>
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
            <div className="mb-3 rounded">
              <Form.Control type="text" placeholder="Item name" onChange={e => setIdentityData({ ...IdentityData, itemName: e.target.value })} value={IdentityData.itemName} />
            </div>
            <Form.Label className='fw-bold'>Personal Information</Form.Label>
            <div className="mb-3" >
              <div className='d-flex'>
                <Form.Control className='me-5' type="text" placeholder="First name" onChange={e => setIdentityData({ ...IdentityData, firstName: e.target.value })} value={IdentityData.firstName} />
                <Form.Control type="text" placeholder="Last name" onChange={e => setIdentityData({ ...IdentityData, lastName: e.target.value })} value={IdentityData.lastName} />
              </div>
            </div>
            <div className="mb-3" >
              <div className='d-flex'>
                <Form.Control className='me-5' type="text" placeholder="Username" onChange={e => setIdentityData({ ...IdentityData, username: e.target.value })} value={IdentityData.username} />
                <Form.Control type="email" placeholder="Email" onChange={e => setIdentityData({ ...IdentityData, email: e.target.value })} value={IdentityData.email} />
              </div>
            </div>
            <div className="mb-3">
              <div className='d-flex'>
                <Form.Control className='me-5' type="text" placeholder="Company" onChange={e => setIdentityData({ ...IdentityData, company: e.target.value })} value={IdentityData.company} />
                <Form.Control type="text" placeholder="Phone" onChange={e => setIdentityData({ ...IdentityData, phone: e.target.value })} value={IdentityData.phone} />
              </div>
            </div>
            <div className="mb-3">
              <div className='d-flex'>
                <Form.Control className='me-5' type="text" placeholder="Passport number" onChange={e => setIdentityData({ ...IdentityData, passportNumber: e.target.value })} value={IdentityData.passportNumber} />
                <Form.Control type="text" placeholder="License number" onChange={e => setIdentityData({ ...IdentityData, licenseNumber: e.target.value })} value={IdentityData.licenseNumber} />
              </div>
            </div>
            <Form.Label className='fw-bold'>Contact Information</Form.Label>
            <div className="mb-3 rounded">
              <Form.Control type="text" placeholder="Address" onChange={e => setIdentityData({ ...IdentityData, address: e.target.value })} value={IdentityData.address} />
            </div>
            <div className="mb-3 rounded">
              <Form.Control type="text" placeholder="City" onChange={e => setIdentityData({ ...IdentityData, city: e.target.value })} value={IdentityData.city} />
            </div>
            <div className="mb-3 rounded">
              <Form.Control type="text" placeholder="State" onChange={e => setIdentityData({ ...IdentityData, state: e.target.value })} value={IdentityData.state} />
            </div>
            <div className="mb-3 rounded">
              <Form.Control type="text" placeholder="Postal code" onChange={e => setIdentityData({ ...IdentityData, postalCode: e.target.value })} value={IdentityData.postalCode} />
            </div>
            <div className="mb-3 rounded">
              <Form.Control type="text" placeholder="Country" onChange={e => setIdentityData({ ...IdentityData, country: e.target.value })} value={IdentityData.country} />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditIdentity