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



  return (
    <>
    
        <div className='navlinks-items'>
        {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
            <div className='mobile-menu'>
                <FaBars id='menu' onClick={Famenu}/>
                {menuOpen && (
                    <div className="menu-items">
                        <a id='act' href="/">Home</a>
                        <a href="#">Teespace</a>
                        <a href="#">Shop</a>
                        <a href="#">Blog</a>
                        <a href="#">Pages</a>
                    </div>
                )}
            </div>
            
            <nav>
                <a id='act' href="/">Home <FaChevronDown/></a>
                <a href="#">Teespace <FaChevronDown/></a>
                <a href="#">Shop <FaChevronDown/></a>
                <a href="#">Blog <FaChevronDown/></a>
                <a href="#">Pages <FaChevronDown/></a>
            </nav>

            
            <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_logo-black.png_tn2q3i.png" height="30px" alt="Teespace logo" />
        
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <FaSearch className="search-icon" />
            </div>
            <div className='nav-icn'>
                <a id='fastar' href="#"><FaRegStar/></a>
                <a id='fashop' href="#"><img height={15} src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1714061979/shopping-bag-line_x9mmwe.svg" alt="" /></a>
            </div>
          

        </div>
      
    
    </>
    
  )
}

export default Navlinks
