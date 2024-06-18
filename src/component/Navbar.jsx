import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddcartPage">About</Link>
        </li>
        <li>
          <Link to="/PricingPage">Contact</Link>
        </li>
        <li>
            <Link to="/ServicesPage"></Link>
        </li>
        <li>
            <Link to="/Shopdetails"></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
