import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signupform.css';
import { Link } from 'react-router-dom';
import api from '../api';
const UserSignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = () => {
    const userData = {
      username,
      email,
      contact,
      password,
      confirmPassword
    };

    axios.post(`${api}/usersignup`, userData)
      .then(response => {
        alert(`${response.data}`)
        console.log(response.data); // Handle success response
      })
      .catch(error => {
        console.error(error); // Handle error
      });
  };

  return (
    <div className='form-parent1'>
      <div className='form-head1'>
        <div className='vendor-heading1'>
          <Link to='/vendorsignup' className='no-underline'>Vendor</Link>
        </div>
        <div style={{color:'#4E94F4'}} className='user-heading1'>User</div>
      </div>
      <div className='form-body1'>
        <div className='sign-in1'>Register your Account</div>
        <div className='sign-in-div1'>
          <input type='text' placeholder='Name' className='signin-ip1' value={username} onChange={handleNameChange} />
        </div>
        <div className='password-div1'>
          <input type='email' placeholder='Email' className='signin-ip1' value={email} onChange={handleEmailChange} />
        </div>
        <div className='password-div1'>
          <input type='number' placeholder='Contact' className='signin-ip1' value={contact} onChange={handleContactChange} />
        </div>
        <div className='password-div1'>
          <input type='password' placeholder='Password' className='signin-ip1' value={password} onChange={handlePasswordChange} />
        </div>
        <div className='password-div1'>
          <input type='password' placeholder='Confirm Password' className='signin-ip1' value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
      </div>
      <div className='form-check1'>
        <div className='check-pass1'></div>
        <div className='forget-pass1'></div>
      </div>
      <div className='form-foot1'>
        <div className='create-ac1'>
          <Link to='/usersignin' className='no-underline'>Sign in</Link>
        </div>
        <div className='login-button-div1'>
          <button className='login-but1' onClick={handleRegister}>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default UserSignupForm;
