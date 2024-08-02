import React from "react";
import "../Footer/footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="copywrite">
          <h6>@2022 TeeSpace. All right reserved</h6>
        </div>
        <div className="copywrite">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713917975/footer-payment-method.png_gtwmud.png"
            alt=""
          />
        </div>

        <div className="Socialicon">
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaYoutube />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
