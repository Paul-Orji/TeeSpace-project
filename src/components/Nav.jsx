import React from 'react';
import "../assets/css/nav.css";
import Button from 'react-bootstrap/Button';
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';


const Nav = () => {
  return (
    <>
    <div className='nav-top'>
        <div className='social-links'>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaYoutube/></a>
        </div>
        <div><h5>&#x1f525;Free shipping on all U.S orders &#36;50+</h5></div>
        
        <div className='nav-btn'>
            <Button id='login-btn' variant="link">Login</Button>
            <Button id='signup-btn' variant="dark">Sign Up</Button>
        </div>
        
      
    </div>
    </>
    
  )
}

export default Nav
