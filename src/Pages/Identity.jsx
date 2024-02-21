import React, { useContext, useEffect, useState } from 'react'
import Aside from '../Components/Aside'
import AddIdentity from '../Components/AddIdentity';
import { Table } from 'react-bootstrap';
import IdentityView from '../Components/IdentityView'
import IdentityImage from '../assets/Images/Identity.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserIdentityAPI } from '../Services/allAPIs';
import { addIdentityResponseContext, editIdentityResponseContext, removeIdentityResponseContext } from '../ContextAPI/ContextShare';


function Identity() {
  const { removIdentityResponse, setRemoveIdentityResponse } = useContext(removeIdentityResponseContext)
  const { editIdentityResponse, setEditIdentityResponse } = useContext(editIdentityResponseContext)
  const { addIdentityResponse, setAddIdentityResponse } = useContext(addIdentityResponseContext)
  const [username, setUsername] = useState('')
  const [allIdentities, setAllIdentities] = useState([])

  const getUserIdentities = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        'Authorization': `Bearer ${token}`
      }
      const result = await getUserIdentityAPI(reqHeader)
      if (result.status == 200) {
        setAllIdentities(result.data)
      } else {
        console.log(result);
      }
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getUserIdentities()
      setUsername(sessionStorage.getItem('username'))
    } else {
      setUsername('')
    }
  }, [addIdentityResponse, editIdentityResponse, removIdentityResponse])


  return (

    <div className='row'>
      <div className='col-lg-3'>
        <Aside />
      </div>
      <div className='col-lg-8 p-3'>
        <h4>Welcome <span style={{color:'#ED7117'}}>{username}</span> </h4>
        <hr />
        <h1 className=''>Identites</h1>
        <hr />
        {allIdentities?.length > 0 ? <AddIdentity />
          : null
        }
        <div className="w-100">
          {allIdentities.length > 0 ? <Table>
            <thead>
              <tr>
                <th></th>
                <th>First name</th>
                <th>created time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allIdentities?.length > 0 ? allIdentities.map(identity => (
                <tr>
                  <IdentityView identity={identity} />
                </tr>
              ))
                :
                null
              }
            </tbody>
          </Table>
            :
            <div className="d-flex flex-column align-items-center p-5">
             <div className='text-center'>
                <img style={{ width: '100px', height: '100px' }} src={IdentityImage} alt="no image" />
                <p style={{ fontSize: '20px', fontWeight: '900' }}>Fill online forms faster</p>
                <p>Add Identity card so that Locker can autofill online forms on behalf of you.</p>
                <div><AddIdentity /></div>
             </div>
            </div>
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Identity