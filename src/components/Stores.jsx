import React from 'react'
import "../assets/css/stores.css"
import {FaStar, FaShoppingCart} from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const StoreImage =(props) => {
    const {image, description, title, title1, price, price1, button, rating, prod} = props;

    return (
        <>
        <div className='store-card'>
            <img height={100} width={150} src={image} alt="Customizes shirt" />
            <div className='card-title'>
                <div>
                    <p id='p-desc'>{description}</p>
                <h6>{title}</h6>
                <h6>{title1}</h6>
                <p id='p-rate'><FaStar/>{rating}</p>
                <p id='prod'>{prod}</p>
                <div className='p-div'>
                    <div><p id='price'>&#36;{price}</p></div>
                    <div><p id='price2'>&#36;{price1}</p></div>
                    <div><button id='stores-btn' type="button"><FaShoppingCart/>{button}</button></div>
                </div>
                </div>
                
                
            </div>
            
        </div>
        </>
    )
}

const Stores = () => {
  return (
    <>
    <Container>
    <Row>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
    </Row>
    <Row>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
    </Row>
    </Container>
    <div className='store-sect'>
        <div>
            
        </div>

    </div>
  
    </>
    
  )
}

export default Stores
