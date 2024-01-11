import React, { useState } from 'react'
import './Employ.css'
import { Form } from 'react-router-dom'
import axios from 'axios'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavHead from '../NavHead';



const Employ = () => {

  const [formData,setFormData]=useState({
            name:"",
            employeNumber:"",
            age:"",
            decription:"",
            selectDepartment:"",
            reportTo:"",
            image:null,
            
  })

  const HadilInputChange =(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
  }
 const HandilFileChange =(e)=>{
  setFormData({...formData,image:e.target.files[0]})
 }
   const Handilclik= async (e)=>{
    e.preventDefault()
    const data = new FormData();
    data.append("name",formData.name)
    data.append("employeNumber",formData.employeNumber)
    data.append("age",formData.age)
    data.append("decription",formData.decription)
    data.append("selectDepartment",formData.selectDepartment)
    data.append("reportTo",formData.reportTo)
    data.append("image",formData.image)
    try{
      axios.post("http://localhost:7001/submitemploy",data,
      {'Content-Type': 'multipart/form-data',
    })
    console.log('Form submitted successfully');
}
    catch(error){
      console.error('Error submitting form:', error);
    }
  }

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
      <h1>Employ</h1>
      <form onSubmit={Handilclik} >
        <label className='labelsName'>Name:</label><br />
        <input className='inpBox' type="text" name="name" value={formData.name}  onChange={HadilInputChange}/>
        <br />
        <label className='labelsName'> Employee Number:</label><br />
          <input className='inpBox'  type="text" name="employeNumber" value={formData.employeNumber}  onChange={HadilInputChange} /> 
        <br />
        <label className='labelsName'>Age:</label><br />
          <input className='inpBox'  type="text" name="age" value={formData.age}  onChange={HadilInputChange} /> 
        <br />
        <label className='labelsName'>Profile Description:</label><br />
          <input className='inpBox'  type="text" name="decription" value={formData.decription}  onChange={HadilInputChange}/>
        <br />
       
        <label className='labelsName' value="">Select Department:</label>
        <br />
        <select className='inpBox' name="selectDepartment" value={formData.selectDepartment}  onChange={HadilInputChange}>
        <option value="Emergency Departmen">Emergency Department</option>
        <option value="Surgery">Surgery</option>
        <option value="Orthopedics">Orthopedics</option>
        <option value="Cardiology">Cardiology</option>
        <option value="volvo">Neurology</option>
        <option value="Neurology">Pathology</option>
        <option value="mercedes">Radiology</option>
        <option value="Radiology">Psychiatry</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="volvo">Anesthesiology</option>
        <option value="Anesthesiology">Dermatology</option>
        <option value="Radiology">Radiology</option>
        <option value="Laboratory">Laboratory Services</option>
        </select>
        <br />
        <label className='labelsName' value="">Report to:</label>
        <br />
        <select className='inpBox' name="reportTo" value={formData.reportTo}  onChange={HadilInputChange}>
        <option value="Hr">Hr</option>
        <option value="Emergency Department">Emergency Department</option>
        <option value="Internal Medicine">Internal Medicine</option>
        </select>
        <br />

        <label className='labelsName'> Profile Image:</label><br />
          <input className='ChooseFile' type="file" name="photo" onChange={HandilFileChange}  />
        <br />
        
        <button className='SubBtn' type="submit">SUBIMIT</button>
      </form>
      </div>
        </div>

      </div>

  
    </div>
  )
}

export default Employ
