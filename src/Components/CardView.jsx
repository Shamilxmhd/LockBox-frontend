import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import EditCard from './EditCard';
import { deleteCardAPI } from '../Services/allAPIs';
import { toast } from 'react-toastify';
import { removeCardResponseContext } from '../ContextAPI/ContextShare';

function CardView({ card }) {



  const { removeCardResponse, setRemoveCardResponse } = useContext(removeCardResponseContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteCard = async (cid) => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteCardAPI(cid, reqHeader)
        if (result.status == 200) {
          setRemoveCardResponse()
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
      <td className='fw-bold fs-4' style={{ color: '#ED7117', cursor: 'pointer' }}
        onClick={handleShow}>{card.itemName}</td>
      <td>{card.cardholderName}</td>
      <td>{new Date(card.createdAt).toLocaleTimeString()}</td>
      <td><EditCard card={card} /><button className='btn' onClick={() => { handleDeleteCard(card?._id) }}><i className="fa-solid fa-trash text-danger"></i></button></td>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>itemName : {card.itemName}</Modal.Body>
        <Modal.Body>Cardholder name : {card.cardholderName} </Modal.Body>
        <Modal.Body>Card number : {card.cardNumber}</Modal.Body>
        <Modal.Body>Expiration month : {card.month}</Modal.Body>
        <Modal.Body>Expiration year : {card.year}</Modal.Body>
        <Modal.Body>Security Code (CVV) : {card.cvv}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CardView