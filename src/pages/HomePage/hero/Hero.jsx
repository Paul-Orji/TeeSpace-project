import React from 'react';
import "../hero/hero.css";





const HeroImage= (props) => {
    const { image, title, title1, text, text1, button } = props;

    return (
        <>
        <div className='hero-card'>
            <img height="20%" width="99%" src={image} alt="Hero" />
            <div className='card-title'>
              <h4>{title}</h4>
              <h4>{title1}</h4>
                <p id='txt'>{text}</p>
                <p>{text1}</p>
                <button id='btn' type="button">{button}</button>  
            </div>

        
        </div>
            
        </>
    )

}

const Hero = () => {
  return (
    <>
    <div className='hero-img'>
        <div>
            <HeroImage image="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_banner-41.jpg_i6qegf.png"
                    title="T-shirt printing"
                    title1="made easy."
                    text="Create your design for your"
                    text1="online business."
                    button="Create a T-shirt"/>
        </div>
        <div>
            <HeroImage image="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_banner-42.jpg_szhxea.png"
                    title="Bring your ideas"
                    title1="to life in minute."
                    text="Print shirts for yourself or your"
                    text1="creative works."
                    button="Shop Now"/>
        </div>
        
        
    </div>
    </>
    
  )
}

export default Hero
