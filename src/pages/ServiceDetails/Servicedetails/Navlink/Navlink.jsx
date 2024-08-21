import React, { useState } from "react";
import "../Navlink/navlink.css";
// import logo from "//";
import {
  FaChevronDown,
  FaBars,
  FaSearch,
  FaUser,
  FaRegStar,
  FaShoppingBag,
} from "react-icons/fa";

const Navlink = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navlink-items">
      <div className="mobile-menu">
        <FaBars id="menu" onClick={handleMenuToggle} />
        {menuOpen && (
          <div className="menu-items">
            <a id="act" href="/">
              Home
            </a>
            <a href="/">Teespace</a>
            <a href="/">Shop</a>
            <a href="/">Blog</a>
            <a href="/">Pages</a>
          </div>
        )}
      </div>

      <nav>
        <a href="/">
          Home <FaChevronDown />
        </a>
        <a href="/">
          TeeSpace <FaChevronDown />
        </a>
        <a href="/">
          Shop <FaChevronDown />
        </a>
        <a href="/">
          Blog <FaChevronDown />
        </a>
        <a href="/">
          Pages <FaChevronDown />
        </a>
      </nav>

      {/* <img src={logo} height="30px" alt="Company Logo" /> */}

      <div className="NavIcons">
        <a href="/">
          <FaSearch />
        </a>

        <a href="/">
          <FaUser />
        </a>
        <div>
          <a href="/">
            <FaRegStar />
          </a>
          <p className="tag">0</p>
        </div>

        <div className="">
          <a href="/">
            <FaShoppingBag />
          </a>
          <p className="tag">0</p>
        </div>
      </div>

      <div className="Navbutton">
        <button>Let's Talk</button>
      </div>
    </div>
  );
};

export default Navlink;
