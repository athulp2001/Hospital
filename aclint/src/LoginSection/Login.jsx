

import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log(response.data.message);
        localStorage.setItem('token', response.data.token);
        navigate('/main');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='MainSection'>
      <div className='mainDiv1'>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label className='labelname' htmlFor='email'>
            Email
          </label>
          <br />
          <input
            className='inpbox'
            type='text'
            placeholder='Email'
            autoComplete='off'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label className='labelname' htmlFor='password'>
            Password
          </label>
          <br />
          <input
            className='inpbox'
            type='password'
            placeholder='Password'
            autoComplete='off'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className='regButton' type='submit'>
            Login
          </button>
        </form>
        <div>
          <p>Do you have an Account?</p>
          <button className='LogButton'>
            <Link className='linklog' to='/'>
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
