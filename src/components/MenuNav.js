import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import CanvaRight from './CanvaRight';

function MenuNavbar() {
  return (
       <>
        <Container className='container1'>
       <Navbar bg='primary' data-bs-theme="primary" expand="lg" id='navmenu' >
            <Navbar.Toggle aria-controls='reasponsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
            <Nav>
            <Nav.Link href='#Home'>Home</Nav.Link>
            <Nav.Link href='#Group' >Group Profile</Nav.Link>
            <Nav.Link href='#serInfrastructurevices' >Infrastructure</Nav.Link>
            <Nav.Link href='#Products' >Products</Nav.Link>
            <Nav.Link href='#Quality' >Quality</Nav.Link>
            <Nav.Link href='#contactus'>Contact us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        
        </Navbar>
        </Container>
       </>
      );
    }

export default MenuNavbar;