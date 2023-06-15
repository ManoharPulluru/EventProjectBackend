import React, { useState } from 'react';
import axios from 'axios';
import '../styles/loginform.css';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import api from '../api';
const LoginForm = () => {
  const navigate = useNavigate();
  const [displaymessage,setDisplaymessage] = useState('') 
  const [emailOrContact, setEmailOrContact] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    if (e.target.name === 'emailOrContact') {
      setEmailOrContact(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      emailOrContact: emailOrContact,
      password: password
    };
    axios.post(`${api}/vendorsignin`, formData)
      .then((response) => {
        let pass = response.data;
        console.log(pass)
        if(pass.message === 'success'){
          alert('Login Successful');
         navigate(`/vendorproposals/${pass.userdata.contact}`)
        }else{
          setDisplaymessage(pass.message);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('Error occurred. Please try again.');
      });
  };

  return (
    <div className='form-parent'>
      <div className='form-head'>
        <div style={{ color: '#4E94F4' }} className='vendor-heading'>
          Vendor
        </div>
        <div className='user-heading'>
          <Link to='/usersignin' className='no-underline'>
            User
          </Link>
        </div>
      </div>
      <div className='form-body'>
        <div className='sign-in'>Sign in to your Account</div>
        <div className='sign-in-div'>
          <input
            type='text'
            name='emailOrContact'
            placeholder='Phone/Email'
            className='signin-ip'
            value={emailOrContact}
            onChange={handleInputChange}
          />
        </div>
        <div className='password-div'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='signin-ip'
            value={password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='form-check'>
        <div className='check-pass'>{displaymessage}</div>
        <div className='forget-pass'>Forgot Password?</div>
      </div>
      <div className='form-foot'>
        <div className='create-ac'>
          <Link to='/vendorsignup' className='no-underline'>
            Create Account
          </Link>
        </div>
        <div className='login-button-div'>
          <button className='login-but' onClick={handleSubmit}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
