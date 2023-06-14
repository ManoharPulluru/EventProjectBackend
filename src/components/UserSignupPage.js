import React from 'react'
import bg from '../images/party-people-enjoy-concert-at-festival-summer-DHDMPWH.png';
import '../styles/vendorloginpage.css'
import UserSignupForm from './UserSignupFrom';
const UserSignupPage = () => {
  return (
    <div className='bg-image' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className='logo-in-v-credpage'>LOGO</div>
      <div className='v-login-container'>
        <div className='v-login-container-box-left'>
            TEXT WILL BE DISPLAYED HERE
        </div>
        <div className='login-form'>
        <UserSignupForm/>
        </div>
      </div>
    </div>
  );
}

export default UserSignupPage
