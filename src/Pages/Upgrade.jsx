import React from 'react'
import Aside from '../Components/Aside'
import PricingImage from '../assets/Images/PricingPlan.jpeg'

function Upgrade() {
  return (
    <div className='d-flex'>
      <Aside />
      <div style={{ padding: '20px' }}>
        <h1></h1>
        <hr />
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '500px', width: '60rem' }}>
          <p style={{ fontSize: '20px', fontWeight: '900' }}>Choose a plan</p>
          <p>Choose a plan that suits your need.</p>
          <img style={{ width: '80%', height: '80%' }} src={PricingImage} alt="no image" />
        </div>


      </div>


    </div>
  )
}

export default Upgrade