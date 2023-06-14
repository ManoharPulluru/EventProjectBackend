import React from 'react';
import '../styles/header.css';
import vendorimage from '../images/vendorimage.png';

const Header = (props) => {
  const vendor = props.data;

  // Check if vendor is null or undefined
  if (!vendor) {
    return <div>Loading...</div>; // or any other appropriate message or fallback UI
  }
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="vendorname">{vendor.username}</div>
      <div>
        <img className="vendorimage" src={vendorimage} alt="vendorimage" />
      </div>
    </div>
  );
};

export default Header;
