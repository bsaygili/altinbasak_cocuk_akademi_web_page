import "./aboutUs.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import greenwave from "../../assets/common/green_wave.png";
import welcome from "../../assets/common/16.jpeg";
import { AboutUsContent } from "../../content";

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="aboutus-container" id="about-us-container">
      <div className="wave">
        <img src={greenwave} alt="wave-green" width="1280" height="750" />
      </div>
      <div className="container top">
        <div className="text">
          <h1
            data-aos="fade-up"
            data-aos-offset="-150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            Hakkımızda
          </h1>
          <p
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >{AboutUsContent.shortDescription}</p>
          <button
            data-aos="fade-up"
            data-aos-offset="-300"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <Link to="/hakkimizda">Devamını Oku</Link>
          </button>
        </div>
        <div className="image-container">
          <div
            className="image"
            data-aos="fade-left"
            data-aos-offset="-200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <img src={welcome} alt="altinbasak_cocuk_akademi_home" width="1280" height="750" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
