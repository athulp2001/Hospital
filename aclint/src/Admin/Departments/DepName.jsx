import React, { useState } from 'react';
import './DepName.css';
import NavHead from '../NavHead';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const DepName = () => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    description: '', 
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('year', formData.year);
    data.append('description', formData.description); 
    data.append('image', formData.photo);

    try {
      await axios.post('http://localhost:7001/submit', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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
        <div className='fromDiv'>
      <h1>Department</h1>
      <form onSubmit={handleSubmit}>
        <label className='labelsName'>Department Name:</label><br />
        <input className='inpBox' type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <br />
        <label className='labelsName'>Year Founded:</label><br />
          <input className='inpBox'  type="text" name="year" value={formData.year} onChange={handleInputChange} /> 
        <br />
        <label className='labelsName'>Description:</label><br />
          <input className='inpBox'  type="text" name="description" value={formData.description} onChange={handleInputChange} />
        <br />
        <label className='labelsName'>Department Profile Image:</label><br />
          <input className='ChooseFile' type="file" name="photo" onChange={handleFileChange} />

        <br />
        <button className='SubBtn' type="submit">SUBIMIT</button>
      </form>
      </div>
        </div>

      </div>
     
     
    </div>
  );
};

export default DepName;
