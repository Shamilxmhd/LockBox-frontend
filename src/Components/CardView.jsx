import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import EditCard from './EditCard';


function CardView({ card }) {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <>
      <td onClick={handleShow}>{card.itemName}</td>
      <td>{card.cardholderName}</td>
      <td>3 minutes ago</td>
      <td><EditCard card={card} /><i className="fa-solid fa-trash text-danger"></i></td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>itemName : {card.itemName}</Modal.Body>
        <Modal.Body>Cardholder name :{card.cardholderName} </Modal.Body>
        <Modal.Body>Card number : {card.cardNumber}</Modal.Body>
        <Modal.Body>Expiration month : {card.month}</Modal.Body>
        <Modal.Body>Expiration year: {card.year}</Modal.Body>
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