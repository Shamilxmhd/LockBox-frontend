import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../ContextAPI/TokenAuth';

function Profile() {
  const { isAutherised, setIsAutherised } = useContext(tokenAuthContext)
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('username')) {
      setUsername(sessionStorage.getItem('username'))
    } else {
      setUsername('')
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('email')) {
      setEmail(sessionStorage.getItem('email'))
    } else {
      setEmail('')
    }
  }, [])



  // logout
  const handleLogout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    setIsAutherised(false)
    navigate('/')
  }

  return (
    <>
      {/* card */}
      <Card style={{ width: '70rem', height: '8rem' }}>
        <span className='ms-2' style={{ fontSize: '25px', fontWeight: '900' }}>Your profile </span>
        <ListGroup variant="flush">
          <div className='d-flex justify-content-between align-items-center p-2'>
            <div>
              {username}{email}
              <h4></h4>
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