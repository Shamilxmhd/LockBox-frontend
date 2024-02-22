import React, { useEffect } from 'react'
import Header from '../Components/Header'
import LockerImage from '../assets/Images/lock.png'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import LoginImage from '../assets/Images/Login.png'
import CreditCardImage from '../assets/Images/creditcard.jpeg'
import TimeImage from '../assets/Images/savetime.png'
import GetAppImage from '../assets/Images/GetApp.png'
import GooglePlayImage from '../assets/Images/GooglePlay.png'
import AppStoreImage from '../assets/Images/AppStore.png'
import LapScreenImage from '../assets/Images/LapScreen.png'
import Footer from '../Components/Footer'
import '../home.css'
import 'animate.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {

useEffect(()=>{
  Aos.init({duration:2000});
},[])

  return (
    <>

      <Header />
      <div className='container'>
        {/* part 1 */}
        <div className="row align-items-center" style={{ marginTop: '90px' }}>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 mt-2">
            <h1 className='animate__animated animate__slideInUp'style={{animationDuration:'1.8s'}}>Enjoy A Secure and Seamless Internet Experience</h1>
            <hr />
            <p className='animate__animated animate__fadeIn'style={{animationDuration:'1.8s'}}>Store your passwords, manage sensitive data, fill in forms and log you into your favorite sites with just one click. Locker is here to help.</p>
            <div className={(window.innerWidth <= 576 ? ' text-center' : '')}>
              <Link to={'/register'} className='btn btn-warning' style={{ textDecoration: 'none' }}>Create an Account</Link>
            </div>
          </div>
          <div data-aos="fade-down" className="col-lg-6">
            <img className='img-fluid' src={LockerImage} alt="no image" />
          </div>
        </div>
        {/* part 2 */}
        <div className='bg-body-tertiary  p-5  align-items-center row text-center' >
          <div>
            <p style={{ fontSize: '40px', fontWeight: '700' }}>Keep Your Passwords In A Secured </p>
            <span style={{ fontSize: '40px', fontWeight: '700' }}>Vault</span>
          </div>
          {/* cards */}
          <div className='d-flex flex-wrap justify-content-between mt-5'>
            <Card style={{ width: '16rem' }} className='hover mb-3 mt-3 mx-auto'>
              <Card.Body>
                <span style={{ fontSize: '22px', fontWeight: '800', color: 'black' }}>Data Encyption</span>
                <Card.Text>
                  Locker protects your data with a military-grade AES-256 encryption system. Complimented by PBKDG2 and RSA.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className='hover mb-3 mt-3 mx-auto'>
              <Card.Body>
                <span style={{ fontSize: '22px', fontWeight: '800', color: 'black' }}>Zero-Knowledge</span>
                <Card.Text>
                  End-to-end encryption and zero knowledge ensures your data is secure and hidden, even from our development team.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className='hover mb-3 mt-3 mx-auto '>
              <Card.Body>
                <span style={{ fontSize: '22px', fontWeight: '800', color: 'black' }}>Secure Infrastructure</span>
                <Card.Text>
                  Our hosting platform is a product of world-leading providers such as AWS,DigitalOcean.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '16rem' }} className='hover mb-3 mt-3 mx-auto'>
              <Card.Body>
                <span style={{ fontSize: '22px', fontWeight: '800', color: 'black' }}>Crowdsourced Testing</span>
                <Card.Text>
                  Locker is constantly tested and improved by Kalvins Bug- a crowdsourced platform gathering over 1500 security experts.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='text-center mt-5' >
            <Link to={'/benefits'} style={{ textDecoration: 'none' }} className='btn btn-outline-warning'>See more</Link>
          </div>
        </div>
        {/* part 3 */}
        <div className='row align-items-center mt-5'>
          <div className="col-lg-2"></div>
          <div data-aos="fade-down" className="col-lg-4 text-center">
            <h1 className=''>Logins Made Simple</h1>
            <p>Store your passwords, manage sensitive data, fill in forms and log you into your favorite sites with just one click. Locker is here to help.</p>
          </div>
          <div data-aos="fade-up" className="col-lg-6 text-center">
            <img className='img-fluid' src={LoginImage} alt="no image" />
          </div>
        </div>
        {/* part 4  */}
        <div className="row align-items-center mt-5">
          <div className="col-lg-1"></div>
          <div  data-aos="fade-up" className="col-lg-5 text-center">
            <img className='img-fluid' style={{ height: '350px', width: '350px' }} src={CreditCardImage} alt="" />
          </div>
         
          <div className="col-lg-4 text-center">
            <h1>Browse and Shop In Minutes</h1>
            <p>Locker automatically fills in your login details and credit card information for a smooth checkout process. Shopping takes time, but not paying.</p>
          </div>
        </div>
        {/* part 5 */}
        <div className='row align-items-center mt-5'>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 text-center">
            <h1>Save Time and Efforts</h1>
            <p>Save your valuable time and efforts for other activities other than filling passwords and personal details. Trust those tedious tasks to Locker.</p>
          </div>
          <div data-aos="fade-up" className="col-lg-6 mb-5 text-center">
            <img style={{ marginTop: '-6px' }} src={TimeImage} alt="no image" />
          </div>
        </div>
        {/* part 6 */}
        <div className='row align-items-center text-center mt-5'>
          <p style={{ fontSize: '40px', fontWeight: '900' }}>We are on</p>
          <div className="col-lg-1"></div>
          {/*images */}
          <div data-aos="zoom-out" className="col-lg-4 mb-5">
            <img style={{ width: '150px', height: '90px' }} src={GetAppImage} alt="no image" />
          </div>
          <div data-aos="zoom-out" className="col-lg-2 mb-5">
            <img style={{ width: '150px', height: '90px' }} src={GooglePlayImage} alt="no image" />
          </div>
          <div data-aos="zoom-out" className="col-lg-3 mb-5">
            <img style={{ width: '50px', height: '50px' }} src={AppStoreImage} alt="no image" /><span className='fw-bolder fs-4'>App Store</span>
          </div>
        </div>
        {/* part 7 */}
        <div className='row align-items-center mb-5'>
          <div className="col-lg-2"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img className='img-fluid' style={{ width: '730px', height: '350px' }} src={LapScreenImage} alt="no image" />
          </div>
          <div className="col-lg-1"></div>
          <div className='text-center'>
            <p style={{ fontSize: '40px', fontWeight: '900', color: 'black' }}>Available on all platforms</p>
            <p>Locker works on every device, operating system, and browser you are using.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home