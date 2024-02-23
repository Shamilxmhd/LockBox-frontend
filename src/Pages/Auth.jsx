import React, { useContext, useEffect, useState } from 'react'
import SignUpImage from '../assets/Images/SignUp.jpeg'
import { Button, Form } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPIs';
import { tokenAuthContext } from '../ContextAPI/TokenAuth';
import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";


function Auth({ insideRegister }) {
  const navigate = useNavigate()
  const [isSubmit, setIsSubmit] = useState(false);
  const { isAutherised, setIsAutherised } = useContext(tokenAuthContext)
  const [registerLoading, setRegisterLoading] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [formErrors, setFormErrors] = useState({});
  const [userData, setUserData] = useState({
    username: '', email: '', password: ''
  })
  console.log(userData);


  // register
  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(userData);

    const { username, email, password } = userData
    const emailErrors = validate(email);
    if (emailErrors) {
      setFormErrors({ email: emailErrors });
      return;
    }
    if (password.length < 4) {
      setFormErrors({ password: "*Password must be at least 4 characters long" });
      return;
    }


    if (!username || !email || !password) {
      toast.info('Please fill the form completely!!!')

    } else {

      // api call
      try {
        const result = await registerAPI(userData)
        console.log(result);
        setFormErrors(validate(userData));
        setIsSubmit(true);
        if (result.status == 200) {
          //toast.success(`${result.data.username} has registered successfully`)
          setUserData({ username: '', email: '', password: '' })
          setRegisterLoading(true)

          setTimeout(() => {
            navigate('/login')
            setRegisterLoading(false)
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

    setFormErrors(validate(userData));
    setIsSubmit(true);

    const { email, password } = userData
    const emailErrors = validate(email);
    if (emailErrors) {
      setFormErrors({ email: emailErrors });
      return;

    }
    if (password.length < 4) {
      setFormErrors({ password: "*Password must be at least 4 characters long" });
      return;
    }


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
          setLoginLoading(true)
          setTimeout(() => {
            setLoginLoading(false)
            setUserData({ email: '', password: '' })
            navigate('/cards')

          }, 2500);
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

  const validate = (email) => {
    if (!email) {
      errors.email = "Email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return "*Invalid email format!";
    }
    return null;
  };



  return (
    <div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh', backgroundColor: '#E67F48' }}>
      {loginLoading ?
        <HashLoader color={'#ED7117'} loading={loginLoading} size={85} aria-label="Loading Spinner" data-testid="loader" />
        :
        <div className='container w-75' >
          <div className="card shadow" style={{ background: '' }}>
            <div className="row align-items-center">
              <div className="col-lg-6 d-none d-lg-block">
                <img className='rounded shadow img-fluid' style={{ height: '84vh' }} src={SignUpImage} alt="no image" />
              </div>
              <div className="col-lg-6 p-5">
                <div className="d-flex flex-column align-items-center ">
                  <Form className='w-100'>
                    <div className='text-center'>
                      {insideRegister ? <span style={{ fontWeight: '700', fontSize: '35px', color: 'black' }}>Get Started</span>
                        :
                        <span style={{ fontWeight: '700', fontSize: '35px', color: 'black' }}>Login</span>
                      }
                      {insideRegister ? <p>Already have an Account?Click here to <Link style={{ color: 'red', fontWeight: '500' }} to={'/login'}>Login</Link></p> :
                        <p>New User?Click here to <Link style={{ color: 'red', fontWeight: '500' }} to={'/register'}>SignUp</Link></p>}
                    </div>
                    {insideRegister && <Form.Group className="mb-3" controlId="formBasicName">
                      <span style={{ fontWeight: '600', fontSize: '20px' }} className='text-dark'>Name</span>
                      <Form.Control className='rounded' type="text" placeholder="Enter name" onChange={e => setUserData({ ...userData, username: e.target.value })} value={userData.username} />
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <span style={{ fontWeight: '600', fontSize: '20px' }} className='text-dark'>Email</span>
                      <Form.Control className='rounded' type="email" placeholder="Enter email" onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} /> <p className='text-danger fs-6'>{formErrors.email}</p>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <span style={{ fontWeight: '600', fontSize: '20px' }} className='text-dark'>Password</span>
                      <div className='d-flex align-items-center mb-2'>
                        <Form.Control className='rounded ' type={Show ? "text" : "password"} placeholder="Enter password" onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                        <label style={{ cursor: 'pointer', marginLeft: '-25px' }} onClick={handleShow} >{Show ? <i class="fa-regular fa-eye"></i> : <i class="fa-regular fa-eye-slash"></i>}</label>
                      </div>
                      <p className='text-danger fs-6'>{formErrors.password}</p>
                    </Form.Group>
                    {insideRegister ? <div className="d-grid gap-2">
                      {registerLoading ?
                        <div className='text-center'>  <ClipLoader color={'#ED7117'} loading={registerLoading} size={30} aria-label="Loading Spinner" data-testid="loader" /></div>
                        :
                        <Button onClick={handleRegister} className='btn  mb-2'>Sign up</Button>}
                    </div> :
                      <div className="d-grid gap-2">
                        <Button onClick={handleLogin} className='btn  mb-2'>Login</Button>
                      </div>
                    }
                    <div className='row text-center'>
                      {/* {insideRegister && <div>
                        <span>Or </span>
                      </div>} */}
                      {/* {insideRegister && <div className="d-grid gap-2">
                        <Button className='btn btn-light mb-2'> <i class="fa-brands fa-google me-1"></i>Continue with Google</Button>
                      </div>} */}
                      <Link to={'/home'}><i class="fa-solid fa-house fs-3"></i></Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>}
      <ToastContainer theme='colored' />
    </div>
  )
}

export default Auth