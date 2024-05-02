import React from 'react';
import '../assets/css/subscribe.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Subscribes = () => {
  return (
    <>
    <div className='subscribe-sect'>
        <div className='subs-info'>
            <h3>Subscribe to our <br />newsletter.</h3>
            <p>Get the latest news, events and more delivered to your inbox.</p>
                    <img id='arrow-dwn' height={50} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1714143118/arrow-decor-1.png_n63dxn.png" alt="" />

            
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Your email address"
          id='subs-input'
          aria-describedby="basic-addon2"
        />
        <Button id="subs-btn">
          Subscribe
        </Button>
      </InputGroup>
        </div>
        <img height={300} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/banner-111.png_oitjrs.png" alt="TeeSpace design" />
      
    </div>
    </>
    
  )
}

export default Subscribes
