import React from 'react';
import "../assets/css/services.css";

const ServicesCard = (props) => {
    const {icon, title, description} = props;
    return (
   <>
     <div className='services-card'>
      <img height="50px" width="50px" src={icon} alt="service-icon" />
      <div className='card-title'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      
    </div>
    </>
)
}


const Services = () => {
  return (
    <>
    <div className='service'>
      <div>
        <ServicesCard icon= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713691853/Link_SVG_j8ytoc.png"
                      title= "Top quality"
                      description= "Lorem ipsum dolor sit amet adipisicing elit. Impedit, veniam?"
        />
      </div>
      <div>
        <ServicesCard icon= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713691853/Link_SVG_1_msiix1.png"
                      title= "Mix and match"
                      description= "Lorem ipsum dolor sit amet adipisicing elit. Impedit, veniam?"
        />
      </div>
      <div>
        <ServicesCard icon= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713691853/SVG_sbbira.png"
                      title= "Shipping worldwide"
                      description= "Lorem ipsum dolor sit amet adipisicing elit. Impedit, veniam?"
        />
      </div>
    
    </div>
    </>
   
   
  )
}

export default Services
