import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


function Features() {
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '90px' }}>
        <div className='p-5 align-items-center row mt-5 mb-5'>
          <div className="col-lg-1"></div>
          <div className='col-lg-10'><p className='' style={{ fontSize: '55px', fontWeight: '900' }}>LockBox: All-in-One Data Manager</p></div>
        </div>
        <p className='' style={{ fontSize: '35px', fontWeight: '400', color: 'black' }}>• Save login credentials</p>
        <p className='ms-3 mb-5'>Save usernames and passwords as you browse to log in faster <br /> when you visit a website for the second time.</p>
        <hr />
        <p className='' style={{ fontSize: '35px', fontWeight: '400', color: 'black' }}>• Access your credit cards</p>
        <p className='ms-3 mb-5'>Save your credit and debit card details so that Locker automatically <br /> fills them in when you go shopping online.</p>
        <hr />
        <p className='' style={{ fontSize: '35px', fontWeight: '400', color: 'black' }}>• Save passwords with a click</p>
        <p className='ms-3 mb-5'>Locker saves your login credentials with one click when you first <br /> sign in to a website or application and saves them for later use.</p>
        <hr />
      </div>
      <Footer />
    </>
  )
}

export default Features