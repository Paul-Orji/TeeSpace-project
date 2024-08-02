import React from "react";
import "../Mainb/mainb.css";
const Mainb = () => {
  return (
    <>
      <div className="Mainb">
        <div className="Mainb-text">
          <div className="cardbox">
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713576363/div.haru-icon-box__icon_wv92qw.png"
              alt=""
              height="60px"
            />
            <p>
              <h4>Top Quality</h4>
              Lorem ipsum det, consec tetur <br />
              adipiscing elit duis nec fringi{" "}
            </p>
          </div>
          <div className="cardbox">
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713986607/Vector_oyhw2p.png"
              alt=""
              height="40px"
            />
            <p>
              <h4>Mix and Match</h4>
              Lorem ipsum det, consec tetur <br />
              adipiscing elit duis nec fringi{" "}
            </p>
          </div>
          <div className="cardbox">
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713986607/SVG_ywoztn.png"
              alt=""
              height="40px"
            />
            <p>
              <h4>Shipping Worldwide</h4>
              Lorem ipsum det, consec tetur <br />
              adipiscing elit duis nec fringi
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainb;
