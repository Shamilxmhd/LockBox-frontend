import React, { useContext, useEffect, useState } from 'react'
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
import { addCardResponseContext, editCardResponseContext } from '../ContextAPI/ContextShare'
import EditCard from '../Components/EditCard'
import CardView from '../Components/CardView'



function Card() {
  const { addCardResponse, setAddCardResponse } = useContext(addCardResponseContext)
  const {editCardResponse,setEditCardResponse} = useContext(editCardResponseContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [allCards, setAllCards] = useState([])
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
  }, [addCardResponse,editCardResponse])

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
        {allCards?.length > 0 ?
          <AddCard />
          :
          null}
        <div className='w-100'>
          {allCards.length > 0 ? <Table>
            <thead>
              <tr>
                <th></th>
                <th>Cardholder name</th>
                <th>created time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allCards?.length > 0 ? allCards.map(card => (
                <tr>
                  <CardView card={card} />
                </tr>
              )) : null
              }
            </tbody>
          </Table>
            :
            <div className='w-100'>
              <img style={{ width: '100px', height: '100px' }} src={WalletImage} alt="no image" />
              <p style={{ fontSize: '20px', fontWeight: '900' }}>Simplify online shopping</p>
              <p>Add payment card to autofill when shopping online</p>
              <div> <AddCard /></div>
            </div>
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Card