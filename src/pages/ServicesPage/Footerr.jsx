import React from 'react';
import './footerr.css';
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const Footerr = () => {
  return (
   <>
               {/* Footer section  */}

               <footer>
       <div className='footer-sect'>

        <div className='info-sect'>
            <img height={30} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_logo-black.png_tn2q3i.png" alt="Elegance Apparel logo" />
            <p>hello@Elegance Apparel.io</p>
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
        <div className='links-sect'>
            <h6>Services</h6>
            <div className='link'>
                <a href="/">Printing Services</a>
                <a href="/">Digital Scanning</a>
                <a href="/">Design Services</a>
                <a href="/">Copying Services</a>
                <a href="/">Print on Demand</a>
                </div>
            
        </div> 
        <div className='useful-links'>
            <h6>Useful Links</h6>
            <div className='link'>
                <a href="/">My Account</a>
                <a href="/">Print Provider</a>
                <a href="/">Become a Partner</a>
                <a href="/">Custom Products</a>
                <a href="/">Make your own Shirts</a>
            </div>
            
        </div>
        <div className='questions'>
            <h6>Newsletter</h6>
            <p>Subscribe to our newsletter.</p>
        
        <InputGroup id='frm' className="mb-3">
        <div>
            <Form.Control
                placeholder="Your email address"
                id='subs-input2'
                aria-describedby="basic-addon2"
            /> 
        </div>
        <div>
            <Button id="subs-btn2">
                Subscribe
            </Button> 
        </div>
            
           
        </InputGroup>



        </div>
      
        </div> 
        <div className='foot'>
            <div>
                <p className='footer-p'>&#169;2022 Elegance Apparel. All rights reserved.</p>
            </div>
            
            <img id='footer-imgg' height={20} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/footer-payment-method.png_abk6xc.png" alt="Supported payment method" />
            <div className='social-links'>
            <a href="/"><FaTwitter/></a>
            <a href="/"><FaFacebook/></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaYoutube/></a>
            </div>
        </div>
        
        
        
    </footer>
   </>
  )
}

export default Footerr
