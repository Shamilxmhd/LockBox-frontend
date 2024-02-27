import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AddPricing from '../Components/AddPricing'
function Pricing() {

return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '90px' }}>
        <div className='p-5  align-items-center row  mt-5 mb-5'>
          <AddPricing />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pricing