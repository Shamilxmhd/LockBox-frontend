import React, { useContext, useState } from 'react'
import EditIdentity from '../Components/EditIdentity'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { deleteIdentityAPI } from '../Services/allAPIs';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeIdentityResponseContext } from '../ContextAPI/ContextShare';


function IdentityView({ identity }) {
  const { removIdentityResponse, setRemoveIdentityResponse } = useContext(removeIdentityResponseContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteIdentity = async (iid) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteIdentityAPI(iid, reqHeader)
        if (result.status == 200) {
          setRemoveIdentityResponse()
        } else {
          toast.warning(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }


  return (
    <>
     <button className='btn'> <td className='fw-bold fs-5' style={{color:'#ED7117'}} onClick={handleShow}>{identity.itemName}</td></button>
      <td></td>
      <td>3 minutes ago</td>
      <td><EditIdentity identity={identity} /><button className='btn' onClick={() => { handleDeleteIdentity(identity?._id) }}><i className="fa-solid fa-trash text-danger"></i></button></td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Item name : {identity.itemName} </Modal.Body>
        <h4 className='ms-3'>Personal Information</h4>
        <Modal.Body>First name : {identity.firstName} </Modal.Body>
        <Modal.Body>Last name : {identity.lastName} </Modal.Body>
        <Modal.Body>Username : {identity.username} </Modal.Body>
        <Modal.Body>Email : {identity.email} </Modal.Body>
        <Modal.Body>Company : {identity.company} </Modal.Body>
        <Modal.Body>Phone : {identity.phone} </Modal.Body>
        <Modal.Body>Passport number : {identity.passportNumber} </Modal.Body>
        <Modal.Body>License number : {identity.licenseNumber} </Modal.Body>
        <h4 className='ms-3'>Contact Information</h4>
        <Modal.Body>Address : {identity.address} </Modal.Body>
        <Modal.Body>City : {identity.city} </Modal.Body>
        <Modal.Body>State : {identity.state} </Modal.Body>
        <Modal.Body>Postal code : {identity.postalCode} </Modal.Body>
        <Modal.Body>Country : {identity.country} </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default IdentityView