import React from 'react';
import "../assets/css/shop.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const ShopCard = (props) => {
    const  {image, button} = props;

    return (
        <>
        <div className='shop-card'>
            <img height={200} width={200} src={image} alt="" />
            <div className='btn-dv'><button id='btnn' type="button">{button}</button></div>
        </div>
        </>

    )
}
const ShopCardBig = (props) => {
    const {imagebig, buttonbig} = props;

    return (
        <>
        <div className='shop2-card'>
            <img height={450} width={450} src={imagebig} alt="Shop" />
            <div className='btn-dvv'><button id='btnn2' type="button">{buttonbig}</button></div>
        </div>
        </>
    )
}


const Shop = () => {
  return (
    <>
    <Container className='shop-img'>
      <Row>
        <Col><ShopCard image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_banner-43.jpg_hv5w91.png"
                    button= "Shop Hoodies"/>
        </Col>

        <Col  md={6}><ShopCardBig imagebig= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_banner-44.jpg_h5wd8o.png"
                        buttonbig= "Shop T-shirt" />
        </Col>

        <Col> <ShopCard image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_banner-45.jpg_acs3uz.png"
                        button= "Shop Sweater" />
        </Col>
      </Row>

      <Row id='shop-imgg'>
        <Col><ShopCard image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_banner-46.jpg_jt96k6.png"
                        button= "Shop Tanktop" />
        </Col>

        <Col xs={6}></Col>
        <Col><ShopCard image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_banner-47.jpg_q3tsce.png"
                        button= "Shop Designer" />
        </Col>
      </Row>
    </Container>
    <div className='sub-txt'>
        <h3>T-shirt Printing for Everyone</h3>
        <p>What's more, we do it right!</p>
    </div>


    <Carousel id='carousel' slide={false}>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_banner-43.jpg_hv5w91.png" alt="" />
        <Carousel.Caption>
           <button className='car-btn' type="button">Shop Hoodie</button>
          {/* <ShopCard button= "Shop Hoodies"/> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_banner-44.jpg_h5wd8o.png" alt="" />
        <Carousel.Caption>
          <button className='car-btn' type="button">Shop-T-Shirt</button>
        {/* <ShopCard button= "Shop T-Shirt"/> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_banner-45.jpg_acs3uz.png" alt="" />
        <Carousel.Caption>
          <button className='car-btn' type="button">Shop Sweater</button>
        {/* <ShopCard button= "Shop Sweater"/> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_banner-46.jpg_jt96k6.png" alt="" />
        <Carousel.Caption>
          <button className='car-btn' type="button">Shop Tanktop</button>
        {/* <ShopCard button= "Shop Tanktop"/> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_banner-47.jpg_q3tsce.png" alt="" />
        <Carousel.Caption>
          <button className='car-btn' type="button">Shop Designer</button>
        {/* <ShopCard button= "Shop Designer"/> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='sub-txt1'>
        <h3>T-shirt Printing for Everyone</h3>
        <p>What's more, we do it right!</p>
    </div>
  

    </>
    
  )
}

export default Shop
