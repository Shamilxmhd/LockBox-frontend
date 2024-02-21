import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../ContextAPI/TokenAuth';

function Profile() {
  const [username, setUsername] = useState('')
  const [userEmail, setUserEmail] = useState([])
  const { isAutherised, setIsAutherised } = useContext(tokenAuthContext)
  const navigate = useNavigate()


  useEffect(() => {
    setUsername(sessionStorage.getItem('username'))
  }
    , [])


  useEffect(() => {
    setUserEmail(sessionStorage.getItem('email'))
  }, [])
  console.log(setUserEmail);

  // logout
  const handleLogout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('email')
    setIsAutherised(false)
    navigate('/')
  }

  return (
    <>
      {/* card */}
      <Card style={{ width: '70rem', height: '8rem' }}>
        <span className='ms-2' style={{ fontSize: '25px', fontWeight: '900' }}>Your profile </span>
        <ListGroup variant="flush">
          <div className='d-flex justify-content-between align-items-center p-3'>
            <div className='k'>
              <span>Name</span>
              <h5 className=''> {username}</h5>
            </div>
            <hr />
            <div className=''>
              <span>Email address</span>
              <br />
              <span className='fw-bold'>{userEmail}</span>
            </div>
            <div>
              <Button onClick={handleLogout} variant="outline-danger">Log Out</Button>
            </div>

          </div>
        </ListGroup>
      </Card>
    </>
  )
}

export default Profile  