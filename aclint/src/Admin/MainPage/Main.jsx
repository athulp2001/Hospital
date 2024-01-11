import React from 'react'
import NavHead from '../NavHead'
import './Main.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <NavHead></NavHead>
      <div className='maindiv'>

        <div className='sectionOne'>
            <Nav>
              <Nav.Link className='LinkThree' as={Link} to="/departments"> <button className='DepBtn'>Departments</button></Nav.Link>
              <Nav.Link as={Link} to="/departmentheads"><button className='DepBtn'>Department Heads</button> </Nav.Link>
              <Nav.Link as={Link} to="/empoly"><button className='DepBtn'>Employees</button> </Nav.Link>
            </Nav>
        </div>
        <div className='sectionTwo'>

        </div>

      </div>
    </div>
  )
}

export default Main
