import React, { useEffect } from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutmain = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="about">
        <h5>About</h5>
      </div>
      <div className="heading">
        <h3>
          Get to know more about <br />
          Elegance Apparel
        </h3>
      </div>
      <div className="stunning">
        <div className="text">
          <p className="abt" data-aos="zoom-in">
            At Elegance Apparel we believe that fashion is more than just
            clothing; it is a statement, an expression of individuality, and
            celebration of style. Founded in 2019, our mission has been to
            provide high-quality, trend-setting apparel that empowers you to
            feel confident and look your best. <br />
            Elegance Apparel started with a passion for design and a desire to
            create a brand that speaks to the modern, fashion-forward
            individual. We envisioned a clothing line that combines classic
            elegance with contemporary trends, and thus, Elegance Apparel was
            born. <br />
            Over the years, we have grown from a small boutique to a recognized
            name in the fashion industry, but our commitment to quality and
            customer satisfaction remains unwavering.
          </p>

          <a href="">
            <button id="custombtn" type="button">
              Contact Us
            </button>
          </a>
        </div>

        <div className="images">
          <div className="img1">
            <img
              data-aos="zoom-in"
              height={280}
              width={320}
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1721800915/39228_i4pkmz.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="yimg" data-aos="fade-in">
        <img
          height={400}
          src="https://res.cloudinary.com/dang2kjfr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721683193/2147694313_ye261f.jpg"
          alt=""
        />
      </div>
      <div className="quality">
        <h3>Why Choose Us?</h3>
        <img
          src="https://res.cloudinary.com/dang2kjfr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721683193/2147694313_ye261f.jpghttps://res.cloudinary.com/dang2kjfr/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1721683193/2147694313_ye261f.jpg"
          alt=""
        />
        <p data-aos="zoom-in">
          Elegance Apparel provides you a reliable, durable, and quality
          service. Our inclusive <br /> range caters to all shapes and sizes,
          making everyone feel fabulous.
        </p>
      </div>

      <div className="qualityprint">
        <div className="card1" data-aos="fade-up">
          <p>
            <h3>Perfect Outfit Collection</h3>
            We aim to redefine fashion by offering a diverse range of styles
            that cater to every occasion. Whether you're dressing for a casual
            day out, a business meeting, or a glamorous evening event, you'll
            find the perfect outfit in our collection. Our designs are inspired
            by the latest trends and crafted with meticulous attention to
            detail, ensuring that each piece not only looks good but also feels
            great to wear.
          </p>
        </div>

        <div className="card2" data-aos="fade-down">
          <p>
            <h3>Finest Materials</h3>
            Quality: We use only the finest materials and craftsmanship to
            ensure that our products are durable and stylish. <br />
            Innovation: We constantly strive to stay ahead of fashion trends and
            bring you fresh, exciting designs. <br />
            Sustainability: We are committed to sustainable practices and
            ethical production, ensuring that our impact on the environment is
            minimal.
          </p>
        </div>
      </div>

      <div className="qualityprint2">
        <div className="card3" data-aos="fade-right">
          <p>
            <h3>Feels Great to wear</h3>
            Our designs prioritize your ease, ensuring you feel great every time
            you wear them. Embrace a new level of confidence and style with that
            feels as good as it looks. Our materials are made from premium,
            breatable fabrics, each piece is crafted to provide unmatcched
            softness and durability. making you look and feel your best all day
            long. <br />
            Discover the joy of wearing something truly exceptional
          </p>
        </div>

        <div className="card4" data-aos="fade-left">
          <p>
            <h3>Finest Materials</h3>
            Quality: We use only the finest materials and craftsmanship to
            ensure that our products are durable and stylish. <br />
            Innovation: We constantly strive to stay ahead of fashion trends and
            bring you fresh, exciting designs. <br />
            Sustainability: We are committed to sustainable practices and
            ethical production, ensuring that our impact on the environment is
            minimal.
          </p>
        </div>
      </div>

      <div className="partners">
        <div className="mission" data-aos="flip-down">
          <h1> Our Vision</h1>
          <p>
            We aim to inspire and empower individuals worldwide through stylish{" "}
            <br />
            eco-friendly clothing that makes a positive impact on the planet and{" "}
            <br />
            society
          </p>
        </div>

        <div className="vision" data-aos="flip-up">
          <h1> Our Mission</h1>
          <p>
            Our mission is to inspire confidence and self-expression <br />
            in every customer, making fashion accessible
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutmain;
