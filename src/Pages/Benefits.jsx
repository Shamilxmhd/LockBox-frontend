import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LoginImage from '../assets/Images/Login.png'
import CreditCardImage from '../assets/Images/CreditCard.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Benefits() {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  

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
          <div data-aos="fade-up" className="col-lg-4">
            <p style={{ fontSize: '45px', fontWeight: '700' }}>Automatically sign in with one click</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, explicabo.</p>
          </div>
        </div>
        {/* part 3 */}
        <div className="row align-items-center">
          <div className="col-lg-2"></div>
          <div data-aos="fade-up" className="col-lg-4">
            <p style={{ fontSize: '45px', fontWeight: '700' }}>Hassle-free shopping</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum expedita harum.</p>
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