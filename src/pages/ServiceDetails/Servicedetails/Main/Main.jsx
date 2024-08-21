import React from "react";
import "../Main/main.css";
// import { FaCheckedBox } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <div className="main-content">
        <div className="main-image">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713540294/Link_img_uoxnll.png"
            height="400px"
            width="500px"
            alt=""
          />
        </div>
        <div className="card">
          <h6> Design Your Own</h6>
          <h1>
            You've got the ideas, <br /> We've got the tools
          </h1>
          <h5>
            T-shirt printing for Everyone get headstart with free design <br />
            template you can customize in few clicks.
          </h5>
          <div className="services">
            <p>
              <img
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
                alt=""
              />
              Top quality printing using the latest technology
            </p>
          </div>
          <div className="services2">
            <p>
              <img
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
                alt=""
              />
              Max and Match colors, sizes and designs
            </p>
          </div>
          <div className="services3">
            <p>
              <img
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
                alt=""
              />
              Fast and fire standing stripping
            </p>
          </div>
          <div className="services4">
            <p>
              <img
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713570812/Icon_byyyf9.png"
                alt=""
              />
              Customers happiness guarentee
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
