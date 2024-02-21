import React, { useEffect, useState } from 'react'
import Aside from '../Components/Aside'
import PricingImage from '../assets/Images/PricingPlan.jpeg'

function Upgrade() {

  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(sessionStorage.getItem('username'))
  }, [])

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
          <img style={{ width: '80%', height: '80%' }} src={PricingImage} alt="no image" />
        </div>
      </div>
    </div>
  )
}

export default Upgrade