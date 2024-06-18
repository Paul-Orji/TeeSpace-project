import React from 'react'
import "../stores/stores.css"
import {FaStar, FaShoppingCart} from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';



const StoreImage =(props) => {
    const {image, description, title, title1, price, price1, button, rating, prod} = props;

    return (
        <>
        <div className='store-card'>
            <img height={100} width={150} src={image} alt="Customized shirt" />
            <div className='card-title'>
                <div>
                    <p className='p-desc'>{description}</p>
                <h6>{title}</h6>
                <h6>{title1}</h6>
                <p className='p-rate'><FaStar/>{rating}</p>
                <p className='prod'>{prod}</p>
                <div className='p-div'>
                    <div><p className='price'>&#36;{price}</p></div>
                    <div><p className='price2'>&#36;{price1}</p></div>
                    <div><button className='stores-btn' type="button"><FaShoppingCart/>{button}</button></div>
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
    <Container id='store-cont'>
    <Row>
        <Col>
            <div className='store-card'>
                <img height={100} width={150} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
                <div className='card-title'>
                    <p className='p-desc'>Snack</p>
                    <h6>Zone <br />Sweatshirt</h6>
                    <p className='p-rate'><FaStar/>(4.0)</p>
                    <p className='prod'>By NestFood</p>
                    <div className='p-div'>
                        <p className='price'>&#36;28.85</p>
                        <p className='price2'>&#36;32.8</p>
                        <button className='stores-btn' type="button"><FaShoppingCart/>Add</button>
                    </div>
                </div>
                <p className='hot'>Hot</p>
                <p className='sale'>Sale&#33;</p>
                <p className='new'>New</p>
            </div>
        </Col>
        <Col>
            <div className='store-card'>
                <img height={100} width={150} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
                <div className='card-title'>
                    <p className='p-desc'>Snack</p>
                    <h6>Zone <br />Sweatshirt</h6>
                    <p className='p-rate'><FaStar/>(4.0)</p>
                    <p className='prod'>By NestFood</p>
                    <div className='p-div'>
                        <p className='price'>&#36;28.85</p>
                        <p className='price2'>&#36;32.8</p>
                        <button className='stores-btn' type="button"><FaShoppingCart/>Add</button>
                    </div>
                </div>
                <p className='hot1'>Hot</p>
            </div>
        </Col>
       
        <Col><StoreImage image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png"
                        description= "Snack"
                        title= "Zone"
                        title1= "Sweatshirt"
                        rating=  "(4.0)" 
                        prod= "By NestFood"
                        price= "28.85"
                        price1= "32.8"
                        button= "Add" /></Col>
        <Col>
            <div className='store-card'>
                <img height={100} width={150} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
                <div className='card-title'>
                    <p className='p-desc'>Snack</p>
                    <h6>Zone <br />Sweatshirt</h6>
                    <p className='p-rate'><FaStar/>(4.0)</p>
                    <p className='prod'>By NestFood</p>
                    <div className='p-div'>
                        <p className='price'>&#36;28.85</p>
                        <p className='price2'>&#36;32.8</p>
                        <button className='stores-btn' type="button"><FaShoppingCart/>Add</button>
                    </div>
                </div>
                <p className='hot2'>Hot</p>
            </div>
        </Col>
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

    <p className='view'><a href="/">View all</a></p>
    <Carousel>
      <Carousel.Item>
      <div className='mob-cont'>

        <div className='mobview-cont'>
            
            <img width={190} height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
            <p>Snack</p>
            <h5>Zone <br />Sweatshirt</h5>
            <p className='sta-rt'>
                <FaStar/> (4.0)
            </p>
            <p>By NestFood</p>
            <div className='prc'>
                <p className='price'>$28.85</p>
                <p className='price2'>$32.8</p>
                <button className='stores-btn' type="button">Add</button>
            </div>
        </div>

        <div className='mobview-cont'>
            <img width={190} height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
            <p>Snack</p>
            <h5>Zone <br />Sweatshirt</h5>
            <p className='sta-rt'>
                <FaStar/> (4.0)
            </p>
            <p>By NestFood </p>
            <div className='prc'>
                <p className='price'>$28.85</p>
                <p className='price2'>$32.8</p>
                <button className='stores-btn' type="button">Add</button>
            </div>
        </div>

    </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='mob-cont'>

        <div className='mobview-cont'>
            
            <img width={190} height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
            <p>Snack</p>
            <h5>Zone <br />Sweatshirt</h5>
            <p className='sta-rt'>
                <FaStar/> (4.0)
            </p>
            <p>By NestFood</p>
            <div className='prc'>
                <p className='price'>$28.85</p>
                <p className='price2'>$32.8</p>
                <button className='stores-btn' type="button">Add</button>
            </div>
        </div>

        <div className='mobview-cont'>
            <img width={190} height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
            <p>Snack</p>
            <h5>Zone <br />Sweatshirt</h5>
            <p className='sta-rt'>
                <FaStar/> (4.0)
            </p>
            <p>By NestFood </p>
            <div className='prc'>
                <p className='price'>$28.85</p>
                <p className='price2'>$32.8</p>
                <button className='stores-btn' type="button">Add</button>
            </div>
        </div>
  
    </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='mob-cont'>

        <div className='mobview-cont'>
            
            <img width={190} height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
            <p>Snack</p>
            <h5>Zone <br />Sweatshirt</h5>
            <p className='sta-rt'>
                <FaStar/> (4.0)
            </p>
            <p>By NestFood</p>
            <div className='prc'>
                <p className='price'>$28.85</p>
                <p className='price2'>$32.8</p>
                <button className='stores-btn' type="button">Add</button>
            </div>
        </div>

        <div className='mobview-cont'>
            <img width={190} height={120} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_product-1-1.jpg_e6t392.png" alt="" />
            <p>Snack</p>
            <h5>Zone <br />Sweatshirt</h5>
            <p className='sta-rt'>
                <FaStar/> (4.0)
            </p>
            <p>By NestFood </p>
            <div className='prc'>
                <p className='price'>$28.85</p>
                <p className='price2'>$32.8</p>
                <button className='stores-btn' type="button">Add</button>
            </div>
        </div>

    </div>
      </Carousel.Item>
    </Carousel>
    
  
    </>
    
  )
}

export default Stores
