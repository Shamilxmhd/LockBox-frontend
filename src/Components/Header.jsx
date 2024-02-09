import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top shadow-sm">
        <Container>
          <NavbarBrand>
            <Link to={'/'} className='fw-bolder fs-3' style={{ textDecoration: 'none', color: '	#ED7117' }} >
              <i class="fa-solid fa-lock fa-bounce me-1"></i>
              <span>LockBox</span>
            </Link>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Link to={'/benefits'} className='me-5' style={{ textDecoration: 'none' }}>Benefits</Link>
              <Link to={'/features'} className='me-5' style={{ textDecoration: 'none' }}>Features</Link>
              <Link to={'/pricing'} className='me-5' style={{ textDecoration: 'none' }}>Pricing</Link>
            </Nav>
            <nav>
              <Link to={'/login'} className='btn' >Login</Link>
              <Link to={'/register'} className='btn btn-warning'>Sign Up</Link>
            </nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header