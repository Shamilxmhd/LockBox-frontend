import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LoginImage from '../assets/Images/Login.png'
import CreditCardImage from '../assets/Images/CreditCard.png'




function Benefits() {
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '90px' }}>
        {/* part 1 */}
        <div className='  p-5  align-items-center row text-center'>
          <div className="col-lg-1"></div>
          <div className='col-lg-9'>
            <p className='' style={{ fontSize: '52px', fontWeight: '900' }}>Locker makes your online presence secure and seamless</p>
          </div>
        </div>
        {/* part 2 */}
        <div className='row align-items-center '>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img className='img-fluid' src={LoginImage} alt="no image" />
          </div>
          <div className="col-lg-4">
            <p style={{ fontSize: '45px', fontWeight: '700' }}>Automatically sign in with one click</p>
            <p>End the tedious manual typing as Locker automatically logs in to your favorite websites using saved credentials.</p>
          </div>
        </div>
        {/* part 3 */}
        <div className="row align-items-center">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
          <p style={{ fontSize: '45px', fontWeight: '700' }}>Hassle-free shopping</p>
            <p>Browse and shop in one go as Locker fills in visa/master card information for you.</p>
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' style={{ height: '500px', width: '500px' }} src={CreditCardImage} alt="" />

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Benefits