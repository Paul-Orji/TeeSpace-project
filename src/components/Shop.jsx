import React from 'react';
import "../assets/css/shop.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ShopCard = (props) => {
    const  {image, button} = props;

    return (
        <>
        <div className='shop-card'>
            <img height={200} width={200} src={image} alt="Shop-image" />
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
            <img height={450} width={450} src={imagebig} alt="Shop-image" />
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
    </>
    
  )
}

export default Shop
