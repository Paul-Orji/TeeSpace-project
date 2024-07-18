import React from 'react';
import '../footer/footer.css';
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer>
       <div className='footer-sect'>
            <img height={150} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1720446811/elegance-apparel-removebg-preview_gg1elk.png" alt="Elegance Apparel logo" />

        <div className='info-sect'>
            <p>hello@eleganceapparel.io</p>
            <h6>+020360383996</h6>
            <p>3665 Paseo Place, Suite 0960 <br />San Diego</p>
        </div>
        <div className='links-sect'>
            <h6>Information</h6>
            <div className='link'>
                <a href="/">About Us</a>
                <a href="/">Our Blog</a>
                <a href="/">Start a Return</a>
                <a href="/">Contact Us</a>
                <a href="/">Shipping FAQ's</a>
                </div>
            
        </div> 
        <div className='useful-links'>
            <h6>Useful Links</h6>
            <div className='link'>
                <a href="/">My Account</a>
                <a href="/">Shipping</a>
                <a href="/">Contact & Support</a>
                <a href="/">All Products</a>
                <a href="/">Design Products</a>
            </div>
            
        </div>
        <div className='questions'>
            <h6>Any questions</h6>
            <h5>hello@Elegance Apparel.com</h5>
            <p>Find answers to all your questions</p>

            <div className='social-links'>
            <a href="/"><FaTwitter/></a>
            <a href="/"><FaFacebook/></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaYoutube/></a>

            </div>

        </div>
      
        </div> 
        <div className='foott'>
            <img id='footer-img' height={20} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/footer-payment-method.png_abk6xc.png" alt="Supported payment method" />

        </div>
        <p className='footer-p'>&#169;2022 Elegance Apparel. All rights reserved.</p>
        
        
    </footer>
    
    </>
    
  )
}

export default Footer
