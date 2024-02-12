import React, { useEffect, useState } from 'react'
import Aside from '../Components/Aside'
import AddCard from '../Components/AddCard'




function Card() {
  const [username, setUsername] = useState()
  useEffect(() => {
    if (sessionStorage.getItem('username')) {
      setUsername(sessionStorage.getItem('username'))
    } else {
      setUsername('')
    }
  }, [])

  return (
    <div className='d-flex'>
      <Aside />
      <div style={{ padding: '20px' }}>
        <h4>Welcome <span className='text-warning'>{username}</span> </h4>
        <hr />
        <h1 className=''>Cards</h1>
        <hr />
      </div>
      <AddCard />
    </div>

  )
}

export default Card