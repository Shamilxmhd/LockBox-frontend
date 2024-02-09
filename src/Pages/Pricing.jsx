import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PricingImage from '../assets/Images/PricingPlan.jpeg'

function Pricing() {
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '90px' }}>
       <div className='p-5  align-items-center row  mt-5 mb-5'>
<img src={PricingImage} alt="no image" /> 
       </div>
      </div>
      <Footer />
    </>
  )
}

export default Pricing