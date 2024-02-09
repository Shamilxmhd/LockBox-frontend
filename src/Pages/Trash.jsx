import React from 'react'
import Aside from '../Components/Aside'
import TrashImage from '../assets/Images/Trash.png'

function Trash() {
  return (
    <div className='d-flex'>

      <Aside />
      <div style={{ padding: '20px' }}>
        <h1></h1>
        <hr />
        <h1 className=''>Trash</h1>
        <hr />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center ' style={{ height: '500px', width: '60rem' }}>
      <img style={{ width: '100px', height: '100px' }} src={TrashImage} alt="no image" />
        <p style={{ fontSize: '20px', fontWeight: '900' }}>There are no items to list.</p>
        <p>All items that are moved to the Trash can be restored until you permanently delete them</p>
        

      </div>
    </div>

  )
}

export default Trash