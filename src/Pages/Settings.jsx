import React from 'react'
import Aside from '../Components/Aside'

import Profile from '../Components/Profile';


function Settings() {
  return (
    <div className='d-flex'>
      <Aside />
      <div style={{ padding: '20px' }}>
        <h1></h1>
        <hr />
        <h1 className=''>Account</h1>
        <hr />
        <Profile/>
      </div>
    </div>

  )
}

export default Settings