import React, { useState } from 'react'
import "./DepHead.css"
import NavHead from '../NavHead'
import axios from 'axios'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


const DepHead = () => {

  const [formData,setFormData]=useState({
            headName:"",
            epolyNumber:"",
            age: "",
            description: "",
            selectDepartment: "",
            image: null,
  })

  const HadilInputChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const HandilFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  


  const Handilclick = async(e)=>{
    e.preventDefault()
   const data=new FormData()
   data.append("headName",formData.headName)
   data.append("epolyNumber",formData.epolyNumber)
   data.append("age",formData.age)
   data.append("description",formData.description)
   data.append("selectDepartment",formData.selectDepartment)
   data.append("image",formData.image)

   try{
    axios.post("http://localhost:7001/submitdephead",data,{
      'Content-Type': 'multipart/form-data',
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
            <Nav.Link className='LinkThree' as={Link} to="/departments"><button className='DepBtn'>Departments</button></Nav.Link>
              <Nav.Link as={Link} to="/departmentheads"><button className='DepBtn'>Department Heads</button> </Nav.Link>
              <Nav.Link as={Link} to="/empoly"><button className='DepBtn'>Employees</button> </Nav.Link>
            </Nav>
        </div>
        <div className='sectionTwo'>
        <div className='fromDiv'>
      <h1>Department Heads</h1>
      <form onSubmit={Handilclick}>
        <label className='labelsName'>Department Head Name:</label><br />
        <input className='inpBox' type="text" name="headName" value={formData.headName} onChange={HadilInputChange} />
        <br />
        <label className='labelsName'> Employee Number:</label><br />
          <input className='inpBox'  type="text" name="epolyNumber" value={formData.epolyNumber} onChange={HadilInputChange} /> 
        <br />
        <label className='labelsName'>Age:</label><br />
          <input className='inpBox'  type="text" name="age" value={formData.age} onChange={HadilInputChange} /> 
        <br />
        <label className='labelsName'>Profile Description:</label><br />
          <input className='inpBox'  type="text" name="description" value={formData.description}  onChange={HadilInputChange} />
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

        <label className='labelsName'> Profile Image:</label><br />
          <input className='ChooseFile' type="file" name="photo"   onChange={HandilFileChange} />
        <br />
        
        <button className='SubBtn' type="submit">SUBIMIT</button>
      </form>
      </div>
        </div>

      </div>

      
    </div>
  )
}

export default DepHead
