import React, { useState } from 'react'
import './Singup.css'
import axios from 'axios'
import { Link , useNavigate,} from 'react-router-dom'

const Singup = () => {

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setpassword]=useState()
  const navigate =useNavigate()
  


  const handilSubmit=(e)=>{
    window.alert("Saved Success")
    e.preventDefault()
    axios.post("http://localhost:7001/register",{name,email,password})
   
    .then((res)=>{navigate("/login")})
    .catch((err)=>console.log(err))
   
}
  

  return (
    <div className='MainSection' >
      
      <div className='mainDiv'>
      <h1>Register</h1>
      <p>Create your Account</p>
    <form onSubmit={handilSubmit}>
        <label className='labelname' htmlFor="">Name </label><br />
        <input
        className='inpbox'
        type="text"
        
        placeholder='Name'
        autoComplete='off'
        name="name"
        onChange={(e)=>setName(e.target.value)}
        /><br />


        <label className='labelname' htmlFor="">Email</label><br />
        <input 
        className='inpbox'
        type="text" 
        placeholder='Email'
        autoComplete='off'
        name="name"
        onChange={(e)=>setEmail(e.target.value)}
       /><br />


        <label className='labelname' htmlFor="">Password</label><br />
        <input
        className='inpbox'
        type="text" 
        placeholder='Password' 
        autoComplete='off'
        name="name"
        onChange={(e)=>setpassword(e.target.value)}
        /><br />
        <button className='regButton' type="submit">Register</button>

    </form>
<div>
   
    <p>Already have an account?</p>
    <button className='LogButton'><Link className='linklog' to="/login">Login</Link></button>
</div>

      </div>

    </div>
  )
}

export default Singup
