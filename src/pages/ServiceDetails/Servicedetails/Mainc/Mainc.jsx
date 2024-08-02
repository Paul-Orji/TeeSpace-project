import React from "react";
import "../Mainc/mainc.css";

const Mainc = () => {
  return (
    <>
      <div className="Mainc">
        <div className="text">
          <h6>Design Your Own</h6>
          <h1>T-shirt printing made easy.</h1>
          <p>
            You've got the idea, we've got the tools-design your custom
            <br />
            clothing with our free design assets
          </p>

          <div className="session2">
            <div className="fontlibrary">
              <h5>
                <img
                  src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713783068/span_qyn3cg.png"
                  alt="" 
                />
                Font Library
              </h5>
              <p>
                Lorem Ipsum Consec tetur duis <br />
                nec firingi det consec
              </p>
            </div>
            <div className="fontlibrary">
              <h5>
                {" "}
                <img
                  src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713783067/span_2_ncky5r.png"
                  alt=""
                />
                Quick Designs
              </h5>
              <p>
                Lorem Ipsum Consec tetur duis <br />
                nec firingi det consec
              </p>
            </div>
          </div>
          <div className="session3">
            <div className="fontlibrary">
              <h5>
                {" "}
                <img
                  src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713783049/span_3_f8hour.png"
                  alt=""
                />
                Free Icons, Graphics
              </h5>
              <p>
                Lorem Ipsum Consec tetur duis <br/>
                nec firingi det consec
              </p>
            </div>
            <div className="fontlibrary">
              <h5>
                {" "}
                <img
                  src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713783068/span_1_b0wqsa.png"
                  alt=""
                />
                Free Images
              </h5>
              <p>
                Lorem Ipsum Consec tetur duis <br/>
                nec firingi det consec
              </p>
            </div>
          </div>
        </div>

        <div className="images">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1714732931/HeroImg_sxi5av.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Mainc;
