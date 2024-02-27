import React, { useContext, useEffect, useState } from 'react'
import Aside from '../Components/Aside'
import AddCard from '../Components/AddCard'
import { getUserCardAPI } from '../Services/allAPIs'
import { Table } from 'react-bootstrap'
import WalletImage from '../assets/Images/Wallet.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCardResponseContext, editCardResponseContext, removeCardResponseContext } from '../ContextAPI/ContextShare'
import CardView from '../Components/CardView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Card() {
  const { removeCardResponse, setRemoveCardResponse } = useContext(removeCardResponseContext)
  const { addCardResponse, setAddCardResponse } = useContext(addCardResponseContext)
  const { editCardResponse, setEditCardResponse } = useContext(editCardResponseContext)

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
  }, [addCardResponse, editCardResponse, removeCardResponse])


  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      How can we help?
    </Tooltip>
  );

  return (

    <div className='row'>
      <div className='col-lg-2'>
        <Aside />
      </div>
      <div className='col-lg-9 p-4'>
        <div className='text-end'>
          <h4 style={{ fontFamily: ' "Anta", sans-serif' }}>Welcome <span style={{ color: '#ED7117', }}>{username}</span> </h4>
        </div>
        <hr />
        <div>
          <h1 style={{ fontFamily: '"Kanit", sans-serif' }} className=''>Cards</h1>
        </div>
        <hr />
        <div>
          {allCards?.length > 0 ?
            <AddCard />
            :
            null}
        </div>
        <div className='w-100'>
          {allCards.length > 0 ?
            <Table className='text-center'>
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
            <div className=' d-flex flex-column align-items-center p-5'>
              <div className='text-center'>
                <img style={{ width: '100px', height: '100px' }} src={WalletImage} alt="no image" />
                <p style={{ fontSize: '20px', fontWeight: '900' }}>Simplify online shopping</p>
                <p>Add payment card to autofill when shopping online</p>
                <div> <AddCard /></div>
              </div>
            </div>
          }
        </div>
      </div>
      <ToastContainer />

      <div className='chat-icon'>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <a href="https://wa.me/9747508305" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '000', backgroundColor: '#25d366', color: '#fff', borderRadius: '50%', padding: '10px', textDecoration: 'none' }}>
            <FontAwesomeIcon className='fs-3' icon={faComments} />
          </a>
        </OverlayTrigger>
      </div>

    </div>
  )
}

export default Card