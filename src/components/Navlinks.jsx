import React from 'react';
import "../assets/css/navlinks.css";
// import Form from 'react-bootstrap/Form';
import { FaChevronDown, FaSearch, FaShoppingBag, FaStar} from 'react-icons/fa'

const Navlinks = () => {
  return (
    <>
    <div className='menu'>
        <div className='navlinks-items'>
            <nav>
                <a href="/">Home <FaChevronDown/></a>
                <a href="/">Teespace <FaChevronDown/></a>
                <a href="/">Shop <FaChevronDown/></a>
                <a href="/">Blog <FaChevronDown/></a>
                <a href="/">Pages <FaChevronDown/></a>
            </nav>
            <img src="https://res.cloudinary.com/ds2swdt9n/image/upload/v1713527860/Link_logo-black.png_tn2q3i.png" height="30px" alt="Teespace logo" />
        
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <FaSearch className="search-icon" />
            </div>
            <div className='nav-icn'>
                <FaStar/>
                <FaShoppingBag/>
            </div>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder= "Search..."
              className="me-2"
              aria-label="Search"
            />
          </Form> */}

        </div>
      
    </div>
    </>
    
  )
}

export default Navlinks
