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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      How can we help?
    </Tooltip>
  );

  return (

    <div className='row'>
      <div className='col-lg-2'>
        <Aside />
      </div>
      <div className='col-lg-9 p-4'>
        <div className='text-end'>
          <h4 style={{ fontFamily: ' "Anta", sans-serif' }}>Welcome <span style={{ color: '#ED7117' }}>{username}</span> </h4>
        </div>
        <hr />
        <div>
          <h1 style={{ fontFamily: '"Kanit", sans-serif' }} className='fw-bold'>Identites</h1>
        </div>
        <hr />
        <div>
          {allIdentities?.length > 0 ?
            <AddIdentity />
            : null
          }
        </div>
        <div className='w-100'>
          {allIdentities.length > 0 ?
            <Table className='text-center'>
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
      <div className='chat-icon'>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
          <a href="https://wa.me/9747508305" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '000', backgroundColor: '#25d366', color: '#fff', borderRadius: '50%', padding: '10px', textDecoration: 'none' }}>
            <FontAwesomeIcon className='fs-3' icon={faComments} />
          </a>
        </OverlayTrigger>
      </div>
    </div>
  )
}

export default Identity