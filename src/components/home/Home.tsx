import "./home.scss";
import * as Icons from "@mui/icons-material";
import React, { useEffect, useState, useCallback } from "react";
import arrow from "../../assets/common/arrow.png";
import { homePageImages } from "../../data";
import { CONTACT_LINKS } from "../lib";
import IconTag from "../iconTag/IconTag";

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bgImageStyle = {
    backgroundImage: `url(${homePageImages[currentImageIndex]?.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
  };

  const updateImageIndex = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % homePageImages.length
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(updateImageIndex, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, updateImageIndex]);


  return (
    <div className="home" id="home">
      <div className="bgImg" style={bgImageStyle}></div>
      <div className="contact-icons">
        {CONTACT_LINKS.map(({ href, Icon, className }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" title={href}>
            <IconTag iconKey={Icon as keyof typeof Icons} className={className} />
          </a>
        ))}
      </div>
      <div className="arrow">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Home;
