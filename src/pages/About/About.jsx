import React from 'react'
import "../HomePage/nav-links/navlinks.css";
import { FaChevronDown, FaBars, FaSearch, FaRegStar} from 'react-icons/fa';
import  { useState } from 'react';
import {Link} from "react-router-dom"




const About = () => {
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
    const [isHovered4, setIsHovered4] = useState(false);
        const handleMouseEnter4 = () => {
            setIsHovered4(true)
        };
        const handleMouseLeave4 = () => {
            setIsHovered4(false);
        }

        // Menu 6
        const [isHovered5, setIsHovered5] = useState(false);
        const handleMouseEnter5 = () => {
            setIsHovered5(true)
        };
        const handleMouseLeave5 = () => {
            setIsHovered5(false);
        }

                // Menu 7
                const [isHovered6, setIsHovered6] = useState(false);
                const handleMouseEnter6 = () => {
                    setIsHovered6(true)
                };
                const handleMouseLeave6 = () => {
                    setIsHovered6(false);
                }

                // Menu 8
                const [isHovered7, setIsHovered7] = useState(false);
                const handleMouseEnter7 = () => {
                    setIsHovered7(true)
                };
                const handleMouseLeave7 = () => {
                    setIsHovered7(false);
                }
    
      
   

  return (
    <>
    
        <div className='navlinks-items'>
        

      
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
            
            <nav>
                {/* Menu 1 */}
                <Link id='act' to="/"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Home <FaChevronDown/>
                    {isHovered &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 2 */}
                <Link to="/shop-details"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Categories <FaChevronDown/>
                    {isHovered1 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 3 */}
                <Link to="/Cart"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Cart <FaChevronDown/>
                    {isHovered2 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>
                {/* Menu 4 */}
                <Link to="/services-page"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Services <FaChevronDown/>
                    {isHovered3 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 5 */}
                <Link to="/pricing-page"
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

                {/* Menu 6  */}
                <Link to="/blog-details"
                    onMouseEnter={handleMouseEnter5}
                    onMouseLeave={handleMouseLeave5}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Blog<FaChevronDown/>
                    {isHovered5 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 7 */}
                <Link to="/about"
                    onMouseEnter={handleMouseEnter6}
                    onMouseLeave={handleMouseLeave6}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >About Us<FaChevronDown/>
                    {isHovered6 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>

                {/* Menu 8 */}
                <Link to="/our-team"
                    onMouseEnter={handleMouseEnter7}
                    onMouseLeave={handleMouseLeave7}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Our Team<FaChevronDown/>
                    {isHovered7 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </Link>
            </nav>

                <img id='navimg' src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_logo-black.png_tn2q3i.png" height="30px" alt="Teespace logo" />
        
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

export default About
