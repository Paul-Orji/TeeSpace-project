import React from 'react'
import "../ServicesPage/services.css"
import { FaChevronDown, FaBars, FaSearch, FaRegStar} from 'react-icons/fa';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import {FaUser} from 'react-icons/fa';





const MainHoodies = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const Famenu = () => {
    setMenuOpen(!menuOpen);
    }
    

    const [isHovered1, setIsHovered1] = useState(false);
    const handleMouseEnter1 = () => {
        setIsHovered1(true)
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
  };
    


  return (
  <>
    {/* Nav section */}
    <div className='servicenav-top'>
        <div></div>
        <div><h6>Free shipping on all U.S orders &#36;50+</h6></div>
        <div>&#215;</div>
        
    </div>
    
        <div className='navlinks-itemss'>
        

      
            <div className='mobile-menu'>
                <FaBars id='menu' onClick={Famenu}/>
                {menuOpen && (
                    <div className="menu-items">
                        <Link to ="/">Home</Link>
                        <Link to ="/cart">Cart</Link>
                        <Link to ="/pricing-page">Pricing-page</Link>
                        <Link to ="/services-page">Services-Page</Link>
                        <Link to ="/shop-details">Shop-Details</Link>
                       
                    </div>
                )}
            </div>
            <div
                >
                    
            </div>
            <img id='navimgg' height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/c_crop,w_420,h_250/v1720446811/elegance-apparel-removebg-preview_gg1elk.png" />

            <nav>
                {/* Menu 1 */}
                <Link id='act' to="/">Home </Link>

                {/* Menu 2 */}
                <Link 
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Categories <FaChevronDown/>
                    {isHovered1 &&(
                    <div className='menu-dropdown1'>
                        <Link to='/Hoodies'><p>Hoodies</p></Link>
                        <p>Sweater</p>
                        <p>Tees</p>
                        <p>Tanktop</p>
                        <p>Designers</p>
                    </div>
                )}
                </Link>

                {/* Menu 3 */}
                <Link to="/Cart">Cart </Link>

                {/* Menu 4 */}
                <Link to="/services-page">Services </Link>

                {/* Menu 5 */}
                {/* <Link to="/pricing-page"
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Pricing<FaChevronDown/>
                    {isHovered4 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link> */}

                {/* Menu 6  */}
                <Link to="/blog-details">Blog</Link>

                {/* Menu 7 */}
                <Link to="/about">About Us</Link>

                {/* Menu 8 */}
                <Link to="/our-team">Our Team</Link>
            </nav>


                <div className='icn-divv'>

                     <div className="search-cont">
                        <a href="/"><FaSearch className="search-icn" /></a>
                        <a href="/"><FaUser className='user-icn'/></a>
                    </div>

                    <div className='nav-icn'>
                        <div>
                            <a id='fastar' href="/"><FaRegStar/></a>
                            <p className='tag'>0</p>
                        </div>
                        <div>
                            <a id='fashop' href="/"><img height={15} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1714061979/shopping-bag-line_x9mmwe.svg" alt="" /></a> 
                            <p className='tag'>0</p>
                        </div>
                
                    </div>
                    <button type="button">Let's Talk</button>
                </div>
           
          

        </div>
        {/* End of nav section */}


  </>
  )
}

export default MainHoodies
