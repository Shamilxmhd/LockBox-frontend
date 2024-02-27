import React, { useEffect, useState } from 'react'
import Aside from '../Components/Aside'
import AddPricing from '../Components/AddPricing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../chaticon.css'

function Upgrade() {

  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(sessionStorage.getItem('username'))
  }, [])

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
      <div className='col-lg-9 p-4' >
        <div className='text-end'>
          <h4 style={{ fontFamily: ' "Anta", sans-serif' }}>Welcome <span style={{ color: '#ED7117' }}>{username}</span> </h4>
        </div>
        <hr />
        <div className='d-flex flex-column justify-content-center align-items-center' >
          <p style={{ fontSize: '20px', fontWeight: '900' }}>Choose a plan</p>
          <p>Choose a plan that suits your need.</p>
        </div>
        <AddPricing />
      </div>
      <div className='chat-icon'>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <a  href="https://wa.me/9747508305" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '000', backgroundColor: '#25d366', color: '#fff', borderRadius: '50%', padding: '10px', textDecoration: 'none' }}>
            <FontAwesomeIcon className='fs-3' icon={faComments} />
          </a>
        </OverlayTrigger>
      </div>
    </div>
  )
}

export default Upgrade