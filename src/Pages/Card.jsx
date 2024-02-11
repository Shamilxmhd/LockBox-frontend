import React from 'react'
import Aside from '../Components/Aside'
import AddCard from '../Components/AddCard'



function Card() {

  return (
    <div className='d-flex'>
      <Aside />
      <div style={{ padding: '20px' }}>
        <h1></h1>
        <hr />
        <h1 className=''>Cards</h1>
        <hr />
      </div>
      <AddCard />
    </div>

  )
}

export default Card