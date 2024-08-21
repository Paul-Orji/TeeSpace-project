import React from 'react'
import './hoodies.css'
import { FaSearch, FaStar} from 'react-icons/fa'
import 'remixicon/fonts/remixicon.css';








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
  


  return (
  <>
  <div className='tab'>
    <h3>We offer best quality <br />100% Original</h3>
    <img height={300} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1721284945/hoodie_temp_weczbc.jpg" alt="" />

  </div>
      <div className="container containerr">
      <div className="scrollable left">
        <div className="content">
          <div className='search-cont'>
            <input id='prod-search' type="text" placeholder='Search products...' />
            <a href=""><FaSearch className='search-icon'/></a>
          </div>
          <div className='left-dvcont'>
            <h6>Product Categories</h6>
            <a href=""><p>Male</p></a>
            <a href=""><p>Female</p></a>
            <a href=""><p>Boy</p></a>
            <a href=""><p>Girl</p></a>
            <a href=""><p>Unisex</p></a>
            <a href=""><p>Children</p></a>
          </div>

          <div className='left-dvcont'>
            <h6>Size</h6>
            <div>
              <div className='sz-dv'>
                <a href="">
                  <p>XS</p>
                  <p>15</p>
                  </a>
                
              </div>
              <div className='sz-dv'>
                <a href="">
                  <p>S</p>
                  <p>10</p>
                  </a>
                
              </div>
              <div className='sz-dv'>
               <a href="">
                <p>M</p>
                <p>25</p>
                </a>
                  
              </div>
              <div className='sz-dv'>
                <a href="">
                  <p>L</p>
                  <p>17</p>
                  </a>
                
              </div>
              <div className='sz-dv'>
                <a href="">
                  <p>XL</p>
                  <p>17</p>
                  </a>
                
              </div>
              <div className='sz-dv'>
                <a href="">
                  <p>XXL</p>
                  <p>10</p>
                  </a>
                
              </div>
              <div className='sz-dv'>
                <a href="">
                  <p>XXXL</p>
                  <p>27</p>
                  </a>
               
              </div>
              
            </div>
          
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
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1723027607/Link_16-2-330x440.jpg_vgixgr.png"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1723028442/Sweat_%C3%A0_capuche_vert_%C3%A0_manches_longues_avec_poche_kangourou_pour_homme_-_Vert___XL_zh8si3.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1723028442/Men_Letter_Graphic_Kangaroo_Pocket_Drawstring_Thermal_Hoodie_edt5vz.jpg"
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
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1723028441/Oversize_Sports_Car_F40_Print_Hoodie_gdqozr.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1723028441/FASHION_Casual_Hoodie_-_Green_Diag___US_XS_Asian_M_wk0dgp.jpg"
                    fav= ""
                    discrp= "Elegant Apparel quality plain hoodie for boys and girls"
                    amt= "15,000"
                    size= "XXl"
                    rate= "(4.0)"
                    bottun= "Add to cart"/> 
        </div>
        <div className='hoddy'>
          <HoodieSect imge= "https://res.cloudinary.com/ds2swdt9n/image/upload/v1723028441/Hustlers_hoodie_Make_Money_Not_Friends_Fleece_Oversized_relax_fit_hoodie_-_Navy_Blue___L_siidec.jpg"
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
