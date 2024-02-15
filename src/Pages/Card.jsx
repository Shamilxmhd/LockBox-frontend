import React, { useEffect, useState } from 'react'
import Aside from '../Components/Aside'
import AddCard from '../Components/AddCard'
import { getUserCardAPI } from '../Services/allAPIs'
import { Table } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import WalletImage from '../assets/Images/Wallet.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [allCards, setAllCards] = useState({})
  const [username, setUsername] = useState()

  const getUserCards = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        'Authorization': `Bearer ${token}`
      }
      const result = await getUserCardAPI(reqHeader)
      if (result.status == 200) {
        setAllCards(result.data)
      } else {
        console.log(result);
      }
    }

  }



  useEffect(() => {
    getUserCards()
    if (sessionStorage.getItem('username')) {
      setUsername(sessionStorage.getItem('username'))
    } else {
      setUsername('')
    }
  }, [])

  return (
    <div className='row'>
      <div className='col-lg-3'>
        <Aside />
      </div>
      <div className='col-lg-8'>
        <h4>Welcome <span className='text-warning'>{username}</span> </h4>
        <hr />
        <h1 className=''>Cards</h1>
        <hr />
        <div className=''>
          <div className=''>
            <AddCard />
          </div>
          <Table>
            {allCards?.length > 0 && (
              <thead>
                <tr>
                  <th></th>
                  <th>Cardholder name</th>
                  <th>created time</th>
                  <th>Actions</th>
                </tr>
              </thead>
            )}
            <tbody>
              {allCards?.length > 0 ? allCards.map((card, index) => (
                <tr key={index}>
                  <td><Link to={''} className='fw-bold text-dark' style={{ textDecoration: 'none' }} onClick={handleShow}>{card.itemName}</Link></td>
                  <td>{card.cardholderName}</td>
                  <td>3 minutes ago</td>
                  <td><i className="fa-regular fa-pen-to-square me-4 text-dark"></i><i className="fa-solid fa-trash text-danger"></i></td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" className='d-flex justify-content-center align-items-center flex-column'>
                    <img style={{ width: '100px', height: '100px' }} src={WalletImage} alt="no image" />
                    <p style={{ fontSize: '20px', fontWeight: '900' }}>Simplify online shopping</p>
                    <p>Add payment card to autofill when shopping online</p>
                    <div> <AddCard /></div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
</div>
        {/* modal */}
        {allCards?.length > 0 ? allCards.map((card, index) => (
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
        )) : null}


      </div>
      <ToastContainer />
    </div>

  )
}

export default Card