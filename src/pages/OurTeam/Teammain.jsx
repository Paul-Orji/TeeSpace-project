import React from "react";
import "./team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Teammain = () => {
  return (
    <>
      <div className="teamtitle">
        <h5>Our Team</h5>
      </div>

      <div className="teamimg">
        <h6>Hellooo</h6>
        <h4>Meet the Elegance Apparrel Team</h4>
        <h6>
          {" "}
          With over 10years of combined experience, we've got a well-seasoned
          team at the heim
        </h6>
      </div>

      <div className="Images">
        <div className="Paul">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720516665/team-about-1.jpg_qd7xgg.png"
            alt="rev"
          />
          <h6>
            {" "}
            Paul Stoner <br />
            Designer & Web-Developer
          </h6>
        </div>
        <div className="Madam">
          {" "}
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720529524/team-about-4.jpg_c8dle1.png"
            alt="rev"
          />
          <h6>
            {" "}
            Afolabi Damilola <br />
            Designer & Web-Developer
          </h6>
        </div>

        <div className="Olofin">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720516665/team-about-1.jpg_qd7xgg.png"
            alt="rev"
          />
          <h6>
            {" "}
            Olofin Abiodun <br />
            Designer & Web-Developer
          </h6>
        </div>
      </div>
      <div className="meet">
        <Container>
          <Row>
            <Col id="img1">
              <img
                height={150}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720537350/banner-decor-23.jpg_n4u1a1.png"
                alt=""
              />
            </Col>
            <Col id="img2">
              <img
                height={120}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720560703/banner-decor-25.jpg_1_nmyr6p.png"
                alt=""
              />
            </Col>
          </Row>

          <Row>
            <Col id="text">
              <h2>
                {" "}
                Enjoy up your vacations <br />
                in the best T-shirts
              </h2>
              <h5>T-shirts that keep you moving.</h5>
              <div className="button">
                {" "}
                <a href="">
                  <button id="shopbtn" type="button">
                    Shop Now
                  </button>
                </a>
                <a href="">
                  <button id="Contactbtn" type="button">
                    Contact Us
                  </button>
                </a>
              </div>
            </Col>
            <Col id="img3">
              <img
                height={150}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720563829/banner-decor-22.jpg_sw4fiq.png"
                alt=""
              />
            </Col>
          </Row>

          <Row>
            <Col id="img4">
              <img
                height={150}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720550508/banner-decor-24.jpg_lojhkv.png"
                alt=""
              />
            </Col>
            <Col id="img5">
              <img
                height={130}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720551622/banner-decor-21.jpg_x9dxfu.png"
                alt=""
              />
            </Col>
            <Col id="img6">
              <img
                height={150}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720560220/banner-decor-26.jpg_zsqnkm.png"
                alt=""
              />
            </Col>
          </Row>
          {/* <Row>
            <Col id="decor1">
              {" "}
              <img
                height={150}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720537350/banner-decor-23.jpg_n4u1a1.png"
                alt=""
              />
            </Col>
            <Col id="decor6">
              {" "}
              <img
                height={150}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720560703/banner-decor-25.jpg_1_nmyr6p.png"
                alt=""
              />
            </Col>
            <Col id="decortext">
              <h2>
                {" "}
                Enjoy up your vacations <br />
                in the best T-shirts
              </h2>
              <h5>T-shirts that keep you moving.</h5>
              <div className="button">
                {" "}
                <a href="">
                  <button id="shopbtn" type="button">
                    Shop Now
                  </button>
                </a>
                <a href="">
                  <button id="Contactbtn" type="button">
                    Contact Us
                  </button>
                </a>
              </div>
            </Col>
            <Col id="decor7">
              <img
                height={130}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720560220/banner-decor-26.jpg_zsqnkm.png"
                alt=""
              />
            </Col>
          </Row>

          <Row>
            <Col id="decor2">
              {" "}
              <img
                height={150}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720550508/banner-decor-24.jpg_lojhkv.png"
                alt=""
              />
            </Col>

            <Col id="decor3">
              {" "}
              <img
                height={130}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720551622/banner-decor-21.jpg_x9dxfu.png"
                alt=""
              />
            </Col>

            <Col id="decor4">
              <img
                height={130}
                src="https://res.cloudinary.com/dang2kjfr/image/upload/v1720560220/banner-decor-26.jpg_zsqnkm.png"
                alt=""
              />
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
};

export default Teammain;
