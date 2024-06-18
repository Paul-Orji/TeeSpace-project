import React from 'react'
import '../custom/custom.css'

const Custom = () => {
  return (
    <>
    <div className='custom-body'>
        <div className='custom-head'>
            <h3>T-shirt printing made easy.</h3>
            <p>Let us show you how your product come to life.</p>
        </div>
        <div className='custom-details'>
            <div className='list'>
                   <span id='top'>1</span> <p>Choose from 412 custom product in our catalog</p> 
                  <span>2</span> <p> Customize your design with graphics, text or your own uploaded image</p> 
                   <span>3</span><p> Order prints by selecting your preffered T-shirt size, style,  and quantity</p> 
                   <span>4</span><p> Get your order sent to your door with free standard shipping </p> 
            </div>
            <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527850/step-banner-41.png_fatbag.png" alt="Custom sample" />

        </div>
      
    </div>
    </>
    
  )
}

export default Custom
