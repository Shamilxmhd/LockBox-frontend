import React from 'react'
import Aside from '../Components/Aside'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';


function Settings() {
  return (
    <div className='d-flex'>
      <Aside />
      <div style={{ padding: '20px' }}>
        <h1></h1>
        <hr />
        <h1 className=''>Account</h1>
        <hr />
        {/* card */}
        <Card style={{ width: '70rem', height: '8rem' }}>
          <span className='ms-2' style={{ fontSize: '25px', fontWeight: '900' }}>Your profile </span>
          <ListGroup variant="flush">
            <div className='d-flex justify-content-between align-items-center p-2
            '>
              <div>
                Account
              </div>
              <div>
                <Button variant="outline-danger">Log Out</Button>
              </div>

            </div>
          </ListGroup>
        </Card>




      </div>
    </div>
  )
}

export default Settings