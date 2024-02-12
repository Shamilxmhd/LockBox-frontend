import React, { useState } from 'react'
import SignUpImage from '../assets/Images/SignUp.jpeg'
import { Button, Form } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPIs';


function Auth({ insideRegister }) {

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
          setTimeout(() => {
            navigate('/login')
          }, 3000);
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
      toast.info('please fill the form completely!!!')
    } else {
      // api call
      try {
        const result = await loginAPI({ email, password })
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem('username', result.data.existingUser.username)
          sessionStorage.setItem('token', result.data.token)
          sessionStorage.setItem('userDetails', JSON.stringify(result.data.existingUser))
          setTimeout(() => {
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


  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh', backgroundColor: '#FA8128' }}>
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

                    <Form.Control className='rounded' type="password" placeholder="Enter password" onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                  </Form.Group>
                  {insideRegister ? <div className="d-grid gap-2">
                    <Button onClick={handleRegister} className='btn  mb-2'>Sign up</Button>
                  </div> :
                    <div className="d-grid gap-2">
                      <Button onClick={handleLogin} className='btn  mb-2'>Login</Button>
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
      <ToastContainer theme='colored' position='top-center' />
    </div>
  )
}

export default Auth