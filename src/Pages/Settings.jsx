import React from 'react'
import Aside from '../Components/Aside'
import Profile from '../Components/Profile';

function Settings() {
  return (
    <div className='row'>
      <div className='col-lg-2'> <Aside /></div>
      <div className=' col d-flex flex-column p-4'>
        <div>
          <h1 style={{ fontFamily: '"Kanit", sans-serif' }} className='fw-bold'>Account</h1>
          <hr />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>

  )
}

export default Settings