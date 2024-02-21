import React, { useContext, useEffect, useState } from 'react'
import SignUpImage from '../assets/Images/SignUp.jpeg'
import { Button, Form } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPIs';
import { tokenAuthContext } from '../ContextAPI/TokenAuth';
import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";

function Auth({ insideRegister }) {
  const [loading, setLoading] = useState(false)



  const { isAutherised, setIsAutherised } = useContext(tokenAuthContext)

  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    username: '', email: '', password: ''
  })
  console.log(userData);

  // register
  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(userData);
    const { username, email, password } = userData
    if (!username || !email || !password) {
      toast.info('Please fill the form completely!!!')
    } else {
      // api call
      try {
        const result = await registerAPI(userData)
        console.log(result);
        if (result.status == 200) {
          toast.success(`${result.data.username} has registered successfully`)
          setUserData({ username: '', email: '', password: '' })
          setLoading(true)
          setTimeout(() => {
            navigate('/login')
            setLoading(false)
          }, 2000);
        } else {
          toast.warning(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }

  }

  // login
  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(userData);
    const { email, password } = userData
    if (!email || !password) {
      toast.info('Please fill the form completely!!!')
    } else {
      // api call
      try {
        const result = await loginAPI({ email, password })
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem('username', result.data.existingUser.username)
          sessionStorage.setItem('token', result.data.token)
          sessionStorage.setItem('userDetails', JSON.stringify(result.data.existingUser))
          sessionStorage.setItem('email', result.data.existingUser.email)
          setIsAutherised(true)
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            setUserData({ email: '', password: '' })
            navigate('/cards')

          }, 2000);
        } else {
          toast.warning(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }

  }

  const [Show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!Show)
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh', backgroundColor: '' }}>
      <div className='container w-75' >
        <div className="card  shadow  " style={{ background: 'transparent' }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='rounded shadow' style={{ width: '100%', height: '638px' }} src={SignUpImage} alt="no image" />
            </div>
            <div className="col-lg-6 p-5">
              <div className="d-flex flex-column align-items-center ">
                <Form className='w-100'>
                  <div className='text-center'>
                    <span style={{ fontWeight: '700', fontSize: '35px', color: 'black' }}>Get Started</span>
                    {insideRegister ? <p>Already have an Account?Click here to <Link style={{ color: 'red', fontWeight: '500' }} to={'/login'}>Login</Link></p> :
                      <p>New User?Click here to <Link style={{ color: 'red', fontWeight: '500' }} to={'/register'}>SignUp</Link></p>}
                  </div>
                  {insideRegister && <Form.Group className="mb-3" controlId="formBasicName">
                    <span style={{ fontWeight: '600', fontSize: '20px' }} className='text-dark'>Name</span>
                    <Form.Control className='rounded' type="text" placeholder="Enter name" onChange={e => setUserData({ ...userData, username: e.target.value })} value={userData.username} />
                  </Form.Group>}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <span style={{ fontWeight: '600', fontSize: '20px' }} className='text-dark'>Email</span>

                    <Form.Control className='rounded' type="email" placeholder="Enter email" onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <span style={{ fontWeight: '600', fontSize: '20px' }} className='text-dark'>Password</span>

                    <div className='d-flex align-items-center mb-2'>
                      <Form.Control className='rounded ' type={Show ? "text" : "password"} placeholder="Enter password" onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                      <label style={{ cursor: 'pointer', marginLeft: '-25px' }} onClick={handleShow} >{Show ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}</label>
                    </div>
                  </Form.Group>
                  {insideRegister ? <div className="d-grid gap-2">
                    {loading ? <PulseLoader
                      color={'#ED7117'}
                      loading={loading}

                      size={30}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    /> : <Button onClick={handleRegister} className='btn  mb-2'>Sign up</Button>}
                  </div> :
                    <div className="d-grid gap-2">
                      {loading ? <HashLoader
                        color={'#ED7117'}
                        loading={loading}

                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      /> : <Button onClick={handleLogin} className='btn  mb-2'>Login</Button>}
                    </div>
                  }
                  <div className='row text-center'>
                    {insideRegister && <div>
                      <span>Or </span>
                    </div>}
                    {insideRegister && <div className="d-grid gap-2">
                      <Button className='btn btn-light mb-2'> <i class="fa-brands fa-google me-1"></i>Continue with Google</Button>
                    </div>}
                    <Link to={'/home'}><i class="fa-solid fa-house fs-3"></i></Link>
                  </div>


                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme='colored' />
    </div>
  )
}

export default Auth