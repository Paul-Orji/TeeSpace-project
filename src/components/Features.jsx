import React from 'react'
import '../assets/css/features.css'


const FeatureCard = (props) =>{
    const {image, title, body} = props;

        return(
            <>
            <div className='feature-card'>
               <img height={400} width={300} src={image} alt="Features" />
               <div className='feature-card-title'>
                <h6>{title}</h6>
                <p>{body}</p>
               </div>
                 
            </div>
            
            </>
          
        )
}

const Features = () => {
  return (
    <>
    <div className='feature-head'>
            <h3>All the features you need</h3>
            <p>You've got the ideas, we've got the tools</p>
    </div>
     <div className='feature-img'>
        
        <div>
            <FeatureCard image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/Link_banner-48.jpg_iofoke.png"
                        title= "Premium quality shirts"
                        body= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, dolorum?" />
        </div>
        <div>
            <FeatureCard image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/Link_banner-49.jpg_hjwja1.png"
                        title= "Access on any device"
                        body= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, dolorum?" />
        </div>
        <div>
            <FeatureCard image= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527848/Link_banner-410.jpg_sbfu4d.png"
                        title= "Access on any device"
                        body= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, dolorum?" />
        </div>
      
    </div>
    <div className='templates'>
        
            <img height={300} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527849/div.elementor-element_kmurxo.png" alt="image" />
            <div>
                <h2>10,000&#43; of free <br />images, icon, and<br />graphics</h2>
                <p>You've got the ideas. we've got the tools</p>
                <button id='temp-btn' type="button">Get Started</button>
            </div>
        

    </div>
    </>
   
  )
}

export default Features
