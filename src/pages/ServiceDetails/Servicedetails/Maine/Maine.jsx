import React from "react";
import "../Maine/maine.css";

const Maine = () => {
  return (
    <>
      <div className="body">
        <div className="faq">
          <div ClassName="testimonial">
            <h6>Testimonials</h6>
            <h2>
              Frequently asked <br />
              questions
            </h2>
            <p>
              You've got the ideas, we've got the tools - design your custom
              clothing with our free design assests
            </p>

            <h5>
              <img
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1713805894/Heading_2_po6zfx.png"
                alt=""
              />
              ANY QUESTIONS
            </h5>
            <h2>hello@teespace.com</h2>
          </div>

          <div className="accordion">
            <div className="accordion1">
              <h2>How does product customization work?</h2>
              <p>
                To make a T-shirt design, your first need to install specific
                graphic design software. Once you’ve done that, start your
                creation your final design is at least 220 PPI so it won’t be
                pixelated when printed… To design your own T-shirt, you can
                upload your design to the front of your tee and add custom
                elements like text. For some of our T-shirts, reverse side
                printing is also available.
              </p>
            </div>

            <div className="accordion2">
              <h2>What product can U customize?</h2>
            </div>

            <div className="accordion2">
              <h2>How are your T-Shirt printed?</h2>
            </div>

            <div className="accordion2">
              {" "}
              <h2>What is the best T-Shirt material?</h2>
            </div>

            <div className="accordion2">
              {" "}
              <h2>Can i order a personalized gift?</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maine;
