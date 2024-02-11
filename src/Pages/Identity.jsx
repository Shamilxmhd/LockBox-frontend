import React from 'react'
import Aside from '../Components/Aside'
import AddIdentity from '../Components/AddIdentity';


function Identity() {

  return (
    <div className='d-flex'>
      <Aside />
      <div className='text-center' style={{ marginLeft: '', padding: '20px' }}>
        <h1></h1>
        <hr />
        <h1 className=''>Identites</h1>
        <hr />
      </div>
      <AddIdentity />
    </div>
  )
}

export default Identity