import React from 'react';
import "./services.css"
import { FaChevronDown, FaBars, FaSearch, FaRegStar} from 'react-icons/fa';
import  { useState } from 'react';
import {Link} from "react-router-dom"
import {FaUser} from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
// import Dropdown from 'react-bootstrap/Dropdown';



const Main = () => {
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
                    >Shop <FaChevronDown/>
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
            </nav>

                <img id='navimg' src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_logo-black.png_tn2q3i.png" height="30px" alt="Teespace logo" />

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

        {/* Services */}
        <div className='serv'>
            <h3>Services</h3>
            <p>Home &#8212; Services</p>
        </div>

        <div>
            <h6><FaDroplet/><img src="" alt="" />All the features you need</h6>
            <h3>Fast and Quality Service</h3>
        </div>
      
    
    </>
    
  )
}

export default Main
