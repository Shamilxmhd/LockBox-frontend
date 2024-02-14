import React, { useEffect, useState } from 'react'
import Aside from '../Components/Aside'
import AddCard from '../Components/AddCard'
import { getUserCardAPI } from '../Services/allAPIs'




function Card() {
  const [allCards, setAllCards] = useState({})
  const [username, setUsername] = useState()

  const getUserCards = async () => {
    const result = await getUserCardAPI()
    if (result.status == 200) {
      setAllCards(result.data)
    } else {
      console.log(result);
    }
  }



  useEffect(() => {
    getUserCards()
    if (sessionStorage.getItem('username')) {
      setUsername(sessionStorage.getItem('username'))
    } else {
      setUsername('')
    }
  }, [])

  return (
    <div className='row'>
      <div className='col-lg-3'>
        <Aside />
      </div>
      <div className='col-lg-9'>
        <h4>Welcome <span className='text-warning'>{username}</span> </h4>
        <hr />
        <h1 className=''>Cards</h1>
        <hr />
        <AddCard />
        <hr />
        <h4>Heyall</h4>
        <hr />
      </div>






    </div>

  )
}

export default Card