import React from 'react';
import '../clientt/client.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Statistics = (props) =>{
    const {value, details, details1} = props

    return(
        <>
        <div className='stats-details'>
            <h3>{value}</h3>
            <p>{details}</p>
            <p>{details1}</p>   
        </div>
            
        </>
       
    )
}

const Clients = () => {
  return (
    <>
    <Container className='container'>
        <Row>
            <Col id='col-1' ><img height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/logo_2_qp0qad.png" alt="Client logo" /></Col>
        </Row>
        <Row id='row-2'>
            <Col id='col-2'><img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/logo_1_aycegk.png" alt="Client logo" /></Col>
            <Col id='col-21'><img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/logo_3_ypjnw5.png" alt="Client logo" /></Col>
        </Row>
        <Row id='row-3'>
            <Col id='col-12'><img height={150} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/logo_qgbxxx.png" alt="Client logo" /></Col>
            <Col id='col-13'>
                <div>
                    <h3>Join the 7,000&#43;</h3><h3>companies trusting us</h3>
                    <p>You've got the ideas, we've got the tools</p>
                    <button id='col-btn' type="button">Get Started</button>
                </div>
                
            </Col>
            <Col id='col-14'><img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/logo_4_bvtfvg.png" alt="Client logo" /></Col>
        </Row>
        <Row id='row-4'>
            <Col id='col-4'><img height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/logo_6_v6xvru.png" alt="Client logo" /></Col>
            <Col id='col-42'><img height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/logo_5_ezmcey.png" alt="Client logo" /></Col>
        </Row>

    </Container>

    <div className='mobile-container'>
        <div className='client-1'>
            <img height={80} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/logo_2_qp0qad.png" alt="Client logo" />
            <img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/logo_1_aycegk.png" alt="Client logo" />
            <img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/logo_3_ypjnw5.png" alt="Client logo" />
            <img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/logo_qgbxxx.png" alt="Client logo" />
        </div>
        <div className='client-txt'>
            <h3>Join the 7,000&#43;</h3><h3>companies trusting us</h3>
            <p>You've got the ideas, we've got the tools</p>
            <button id='col-btn' type="button">Get Started</button>
        </div>
        <div className='client-1'>
            <img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/logo_4_bvtfvg.png" alt="Client logo" />
            <img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/logo_6_v6xvru.png" alt="Client logo" />
            <img height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/logo_5_ezmcey.png" alt="Client logo" />
        </div>

    </div>

    <div className='stats'>
        <div>
            <Statistics value= "$37M"
                        details= "printing equipments" />
        </div>
        <div>
            <Statistics value= "20M+"
                        details= "items trusted to be delivered" />
        </div>
        <div>
            <Statistics value= "$49M+"
                        details= "sold by customers" 
                        details1= "through Elegance Apparel"/>
        </div>
        <div>
            <Statistics value= "1086"
                        details= "person team across North" 
                        details1= "America and Europe"/>
        </div>

      
    </div>
    </>
    
  )
}

export default Clients
