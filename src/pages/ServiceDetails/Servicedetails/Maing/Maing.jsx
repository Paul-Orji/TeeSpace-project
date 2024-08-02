import React from "react";
import "../Maing/maing.css";

const Maing = () => {
  return (
    <>
      <footer>
        {" "}
        <div className="teespace">
          <div className="space1">
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713913810/div.elementor-widget-container_2_l85npd.png"
              alt=""
            />
            <p>
              hell0@teespace.io
              <h3>+02 036 038 3996</h3>
              3665 Paseo Place, Suite 0960 San Diego
            </p>
          </div>
          <div className="info">
            <div className="space2">
              <h3>Information</h3>
              <div>
                <a href="/">About Us</a>
                <a href="/">Our Blog</a>
                <a href="/">Start a Return</a>
                <a href="/">Contact Us</a>
                <a href="/">Shipping FAQ</a>
              </div>
            </div>

            <div className="space2">
              <h3>Services</h3>
              <div>
                <a href="/">Printing Services</a>
                <a href="/">Digital Scanning</a>
                <a href="/"> Design Services</a>
                <a href="/">Copying Services</a>
                <a href="/">Print on Demand</a>
              </div>
            </div>

            <div className="space2">
              <h3>Useful Links</h3>
              <div>
                <a href="/">My Account</a>
                <a href="/">Print Provider</a>
                <a href="/">Become a Partner</a>
                <a href="/">Custom Product</a>
                <a href="/">Make your own shirt</a>
              </div>
            </div>

            <div className="space2">
              <h3>Newsletter</h3>
              <form>
                <p>Subscribe to our newsletter</p>
                <input
                  className="input1"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email Address "
                />

                <button className="btn2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Maing;
