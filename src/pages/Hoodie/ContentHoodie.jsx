import React from 'react'
import './hoodies.css'
import { FaSearch, FaStar} from 'react-icons/fa'
import 'remixicon/fonts/remixicon.css';
import  { useState } from 'react';



const HoodieSect = (props) =>{
  const {imge, discrp, amt, bottun, size, fav, rate} = props;

  return(
    <>
    <div className='hoodie-dv'>
      
      <a href="/"><img id='prod-imggg' height={270} src={imge} alt="Product display" /></a>
      <a href="/"><i id='fv' className='ri-heart-line'>{fav}</i></a>
      <p className='disp'>{discrp}</p>
      <h6 className='amt'>&#8358;{amt}</h6>
      <div className='ratee'>
        <h6 >{size}</h6>
        <p  ><FaStar id='f-rate'/>{rate}</p>
         
        
      </div>
     
      <button id='hood-btn' type="button">{bottun}</button>
    </div>
    
    </>
  )
}



const ContentHoodie = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };



  return (
  <>
  <div className='tab'>
    <h3>We offer best quality <br />100% Original</h3>
    <img height={300} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1721284945/hoodie_temp_weczbc.jpg" alt="" />

  </div>
      <div className="container containerr">
      <div className="scrollable left">
        <div className="content">
          <div className='search-container'>
            <input id='prod-search' type="text" placeholder='Search Products' />
            <a href="/"><FaSearch className='search-icon'/></a>
          </div>
          <div>
            <h5>Product Categories</h5>
            <p>Male</p>
            <p>Female</p>
            <p>Boy</p>
            <p>Girl</p>
            <p>Unisex</p>
            <p>Children</p>
          </div>

          <div>
            <h5>Size</h5>
            <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                XS
            </label>
              {isChecked && <div>This is the content that is shown when the checkbox is checked.</div>}
              <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                S
            </label>
              {isChecked && <div>This is the content that is shown when the checkbox is checked.</div>}
              <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                M
            </label>
              {isChecked && <div>This is the content that is shown when the checkbox is checked.</div>}
              <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                L
            </label>
              {isChecked && <div>This is the content that is shown when the checkbox is checked.</div>}
              <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                XL
            </label>
              {isChecked && <div>This is the content that is shown when the checkbox is checked.</div>}
              <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                XXL
            </label>
              {isChecked && <div>This is the content that is shown when the checkbox is checked.</div>}
              <label>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                XXXL
            </label>
              {isChecked && <div>This is the content that is shown when the checkbox is checked.</div>}
          </div>
        
          
          
          {/* {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>Left Scrollable Content {i + 1}</p>
          ))} */}
        </div>
      </div>
      <div className="right">
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>

      </div>


    </div>

    <div className="right2">
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>

      </div>

      <div className="right3">
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>

      </div>

      <div className="right4">
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>

      </div>

      <div className="right5">
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1721287852/istockphoto-1336885284-612x612_xampqp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>

      </div>

 
  </>
  )
}

export default ContentHoodie
