import React from "react";
import "../Mainf/mainf.css";

const Mainf = () => {
  return (
    <>
      <div className="comment">
        <div className="card-container">
          <div className="j-card">
            <button className="test">Testimonial</button>
            <h1>
              What People <br />
              are saying
            </h1>
            <p>
              we provide support for more than <br />
              150k+ Bussinesses
            </p>
            <button>Shop Now</button>
          </div>
          <div className="t-card">
            <h3>
              Print Shirt for yourself or your <br />
              online bussiness
              <p>
                “For all your printing prerequisites. <br />
                Offer to make and print their <br />
                pamphlets, business cards,
                <br />
                solicitations, & occasion programs.”
              </p>
              <div className="anna">
                <img
                  src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713902511/avater-testi-3.png_ahet3e.png"
                  alt=""
                  height={50}
                />
                <h4>
                  Anna Lukomska
                  <p>/ Orlando, FL</p>
                </h4>
              </div>
            </h3>
          </div>

          <div className="t-card">
            <h3>
              Design shirts for yourself or your works
              <p>
                “For all your printing prerequisites. Business cards,
                solicitations, & occasion programs offer to make and print their
                pamphlets .”
              </p>
              <div className="anna">
                <img
                  src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713906584/avater-testi-2.png_1_fd6t93.png"
                  alt=""
                  height={50}
                />
                <h4>
                  Harry Shoulder
                  <p>/ Landmark, NY</p>
                </h4>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainf;
