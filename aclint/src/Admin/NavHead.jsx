import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './NavHead.css';

const NavHead = () => {
  return (
    <div className='navBa'>
      <Navbar expand="lg" className='Navlg' >
        <Container  className='navBa' fluid>
          <Navbar.Brand className='brandName'>ApicureHealth</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link  as={Link} to="/main"><button className='homesection' >Home</button></Nav.Link>
              <Nav.Link as={Link} to="/home"> <button className='homesection'>Departments List</button></Nav.Link>
              <Nav.Link as={Link} to="/getdep"><button className='homesection'>Department Heads List</button></Nav.Link>
              <Nav.Link as={Link} to="/getemploy"><button className='homesection'>Employees List</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHead;
