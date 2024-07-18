import React from 'react';
import "../Cart/layout.css"
import { FaChevronDown, FaBars, FaSearch, FaRegStar} from 'react-icons/fa';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
// import Dropdown from 'react-bootstrap/Dropdown';



const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const Famenu = () => {
    setMenuOpen(!menuOpen);
}
// OnHover menu list desktop-view

        // Menu 1
const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
            setIsHovered(true)
        };

    const handleMouseLeave = () => {
        setIsHovered(false);
      };

        // Menu 2
const [isHovered1, setIsHovered1] = useState(false);
    const handleMouseEnter1 = () => {
        setIsHovered1(true)
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
  };

    // Menu 3
    const [isHovered2, setIsHovered2] = useState(false);
        const handleMouseEnter2 = () => {
            setIsHovered2(true)
        };
        const handleMouseLeave2 = () => {
            setIsHovered2(false);
        }

    // Menu 4
    const [isHovered3, setIsHovered3] = useState(false);
        const handleMouseEnter3 = () => {
            setIsHovered3(true)
        };
        const handleMouseLeave3 = () => {
            setIsHovered3(false);
        }

    // Menu 5
    // const [isHovered4, setIsHovered4] = useState(false);
    //     const handleMouseEnter4 = () => {
    //         setIsHovered4(true)
    //     };
    //     const handleMouseLeave4 = () => {
    //         setIsHovered4(false);
    //     }

        // Menu 6
        const [isHovered5, setIsHovered5] = useState(false);
        const handleMouseEnter5 = () => {
            setIsHovered5(true)
        };
        const handleMouseLeave5 = () => {
            setIsHovered5(false);
        }

          
    
      
   

  return (
    <>
    <div className='nav-top1'>
        <div className='social-links'>
            <a href="/"><FaTwitter/></a>
            <a href="/"><FaFacebook/></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaYoutube/></a>
        </div>
        <div><h6>&#x1f525;Free shipping on all U.S orders &#36;50+</h6></div>
        
        <div className='nav-btn'>
          <button id='login-btn' type="button">Login</button>
          <button id='signup-btn' type="button">Sign Up</button>
        </div>
        
      
    </div>
    
        <div className='navlinks-items1'>
        

      
            <div className='mobile-menu'>
                <FaBars id='menu' onClick={Famenu}/>
                {menuOpen && (
                    <div className="menu-items">
                        <Link to ="/">Home</Link>
                        <Link to ="/cart">Cart</Link>
                        <Link to ="/pricing-page">Pricing-page</Link>
                        <Link to ="/services-page">Services-Page</Link>
                        <Link to ="/shop-details">Shop-Details</Link>
                        <Link to ="/blog-details">Blog</Link>
                       
                    </div>
                )}
            </div>
            <div
                >
                    
            </div>
            <img id='navimg' height={100} src="https://res.cloudinary.com/ds2swdt9n/image/upload/c_crop,w_420,h_250/v1720446811/elegance-apparel-removebg-preview_gg1elk.png" />

            <nav>
                {/* Menu 1 */}
                <Link id='act' to="/">Home</Link>

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
                <Link to="/Cart">Cart</Link>

                {/* Menu 4 */}
                <Link to="/services-page">Services</Link>

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
                </Link>
             */}
                {/* Menu 6  */}
                <Link to="/blog-details">Blog </Link>

                {/* Menu 7 */}
                <Link to="/about">About Us</Link>

                {/* Menu 8 */}
                <Link to="/our-team">Our Team</Link>
            </nav>

        
            <div className="search-container">
                <input id='search-cont' type="text" placeholder="Search..." />
                <a href="/"><FaSearch className="search-icon" /></a>
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
          

        </div>
      
    
    </>
    
  )
}

export default Layout
