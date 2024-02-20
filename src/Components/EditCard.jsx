import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editCardAPI } from '../Services/allAPIs';
import { editCardResponseContext } from '../ContextAPI/ContextShare';



function EditCard({ card }) {
  const { editCardResponse, setEditCardResponse } = useContext(editCardResponseContext)
  const [cardData, setCardData] = useState({
    id: card._id,
    itemName: card.itemName,
    cardholderName: card.cardholderName,
    cardNumber: card.cardNumber,
    month: card.month,
    year: card.year,
    cvv: card.cvv
  })

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setCardData({
      id: card._id,
      itemName: card.itemName,
      cardholderName: card.cardholderName,
      cardNumber: card.cardNumber,
      month: card.month,
      year: card.year,
      cvv: card.cvv
    })
    setShow(true)
  }



  const handleClose = () => {
    setShow(false)

  }

  const handleUpdate = async () => {
    const { itemName, cardholderName, cardNumber, month, year, cvv } = cardData

    if (!itemName || !cardholderName || !cardNumber || !month || !year || !cvv) {
      toast.info('Please fill the form completely!!!')
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
          const result = await editCardAPI(cardData.id, cardData, reqHeader)
          console.log(result);
          if (result.status == 200) {
            handleClose()
            setEditCardResponse(result.data)

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
      <button onClick={handleShow} className='btn'><i className="fa-regular fa-pen-to-square text-dark"></i></button>
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
              <input className='form-control' type="text" placeholder="Item name" value={cardData.itemName} onChange={e => setCardData({ ...cardData, itemName: e.target.value })} />
            </div>
            <Form.Label className='fw-bold'>Card Information</Form.Label>
            <div className="mb-3 rounded" >
              <Form.Control type="text" placeholder="Cardholder name" onChange={e => setCardData({ ...cardData, cardholderName: e.target.value })} value={cardData.cardholderName} />
            </div>
            <div className="mb-3 rounded" >
              <Form.Control type="text" placeholder="Card number" onChange={e => setCardData({ ...cardData, cardNumber: e.target.value })}
                value={cardData.cardNumber} />
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
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate} >Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditCard