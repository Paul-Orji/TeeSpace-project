import React from 'react';
import "../assets/css/navlinks.css";
import { FaChevronDown, FaBars, FaSearch, FaRegStar} from 'react-icons/fa';
import  { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';



const Navlinks = () => {
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
    
        <div className='navlinks-items'>
        

      
            <div className='mobile-menu'>
                <FaBars id='menu' onClick={Famenu}/>
                {menuOpen && (
                    <div className="menu-items">
                        <a href="/">Home</a>
                        <a href="/">Teespace</a>
                        <a href="/">Shop</a>
                        <a href="/">Blog</a>
                        <a href="/">Pages</a>
                    </div>
                )}
            </div>
            <div
                >
                    
            </div>
            
            <nav>
                {/* Menu 1 */}
                <a id='act' href="/"
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
                </a>

                {/* Menu 2 */}
                <a href="/"
                    onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Teespace <FaChevronDown/>
                    {isHovered1 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </a>

                {/* Menu 3 */}
                <a href="/"
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Shop <FaChevronDown/>
                    {isHovered2 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </a>
                {/* Menu 4 */}
                <a href="/"
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Blog <FaChevronDown/>
                    {isHovered3 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </a>

                {/* Menu 5 */}
                <a href="/"
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                    style={{ position: 'relative', display: 'inline-block' }}
                    >Pages <FaChevronDown/>
                    {isHovered4 &&(
                    <div className='menu-dropdown1'>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                    </div>
                )}
                </a>
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

export default Navlinks
