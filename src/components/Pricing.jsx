import React from 'react'
import '../assets/css/pricing.css'
import {FaCheck} from 'react-icons/fa'


const PricingTag = (props) =>{
    const {title, price, details, detail1, detail2, detail3, user, button} =props

    return(
        <>
        
            <p className='title-tag'>{title}</p>  
            <div className='price-tag'>
            <h2>{price}</h2>
            <p>{user}</p>
          </div>
          <div className='details-sect'>
            <p><FaCheck/>{details}</p>
            <p><FaCheck/>{detail1}</p>
            <p><FaCheck/>{detail2}</p>
            <p><FaCheck/>{detail3}</p>
            <button id='pricing-btn' type="button">{button}</button>
          </div>
        </>
        
    )
}

const PricingTagbig = (props) =>{
    const {titleb,priceb, pop, detailsb, detail1b, detail2b, detail3b, detail4b, detail5b, userb, buttonb} =props;

    return(
        <>
        <p id='pop-tag'>{pop}</p>
        <p className='title-tag2'>{titleb}</p>  
            <div className='price-tag2'>
            <h2>{priceb}</h2>
            <p>{userb}</p>
          </div>
          <div className='details-sect2'>
            <p><FaCheck/>{detailsb}</p>
            <p><FaCheck/>{detail1b}</p>
            <p><FaCheck/>{detail2b}</p>
            <p><FaCheck/>{detail3b}</p>
            <p><FaCheck/>{detail4b}</p>
            <p><FaCheck/>{detail5b}</p>
            <button id='pricing-btn' type="button">{buttonb}</button>
          </div>
        
        </>
    )
}

const Pricing = () => {
  return (
    <>
    
        <div className='price-img'>
            <div className='pricing-list'>
            <h3>Simple pricing for everyone</h3>
            <p>Choose a plan and get started</p>
        </div>
        <div className='price-card'>
            <div className='pricing-card'>
                <PricingTag title= "Personal"
                    price= "$12.99"
                    user= "/user"
                    details= "Free licensed icons"
                    detail1= "Fast and free standard shipping" 
                    detail2= "No credit card required"
                    detail3= "Friendly supports"
                    button= "Get Started"/>
            </div>
            <div className='pricing-card2'>
                <PricingTagbig  pop= "Popular"
                                titleb= "Professional"
                                priceb= "$59.99"
                                userb= "/team"
                                detailsb= "Full access to all features"
                                detail1b= "Fast and free standard shipping"
                                detail2b= "No credit card required"
                                detail3b= "Use on unlimited project"
                                detail4b= "Team collaboration feature"
                                detail5b= "Friendly supports"
                                buttonb= "Get Started" />
            </div>
            <div className='pricing-card3'>
                <PricingTag title= "Enterprise"
                    price= "$99.99"
                    user= "/team"
                    details= "All features in pro plan"
                    detail1= "Use on unlimited project" 
                    detail2= "Team collaboration"
                    detail3= "Friendly supports"
                    button= "Get Started"/>
            </div>

        </div>
    </div>
   
    </>
    
  )
}

export default Pricing
