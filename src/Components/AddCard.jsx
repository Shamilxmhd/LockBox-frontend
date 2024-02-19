import React, { useContext } from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCardAPI } from '../Services/allAPIs';
import { addCardResponseContext } from '../ContextAPI/ContextShare';


function AddCard() {
  const { addCardResponse, setAddCardResponse } = useContext(addCardResponseContext)
  const [cardData, setCardData] = useState({
    itemName: '',
    cardholderName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: ''
  })
  console.log(cardData);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setCardData({
      itemName: '',
      cardholderName: '',
      cardNumber: '',
      month: '',
      year: '',
      cvv: ''
    })
  };
  const handleShow = () => setShow(true);


  const handleAddCard = async () => {

    const { itemName, cardholderName, cardNumber, month, year, cvv } = cardData
    if (!itemName || !cardholderName || !cardNumber || !month || !year || !cvv) {
      toast.info('please fill the form completely!!!')

    } else {


      // req header
      const token = sessionStorage.getItem('token')
      console.log(token);
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        // api call
        try {
          const result = await addCardAPI(cardData, reqHeader)
          console.log(result);
          if (result.status === 200) {
            console.log(result.data);
            handleClose()
            setAddCardResponse(result.data)
          } else {
            toast.warning('result.response.data')
          }

        } catch (err) {
          console.log(result);
        }
      }

    }
  }

  return (
    <>
      <div className=' '>

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
              <div className="mb-3 rounded" >
                <Form.Control type="text" placeholder="Card number" onChange={e => setCardData({ ...cardData, cardNumber: e.target.value })} value={cardData.cardNumber} />
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
            <Button variant="primary" onClick={handleAddCard}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ToastContainer theme='colored' position='top-center' />
    </>
  )
}

export default AddCard