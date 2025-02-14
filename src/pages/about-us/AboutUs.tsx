import React from "react";
import "./aboutUs.scss";
import horizonView from "../../assets/common/horizon_view.jpeg";
import intro from "../../assets/school/vids/intro_1.mp4";
import { AboutUsContent } from "../../content";
import { CategoryBar, Gallery } from "../../components";

const AboutUs: React.FC = () => {

  return (
    <div className="about-us-container">
      <img className="horizon" src={horizonView} alt="horizon_view" />

      <div className="category-nav-container">
        <CategoryBar data={[
          { categoryName: "Anasayfa", link: "/", className: "nav-item" },
          { categoryName: "Hakkımızda", link: "/hakkimizda", className: "nav-item" },
        ]} />
      </div>

      <div className="media-box-container">
        <div className="media-container">
          <video className="video" width="700px" controls muted autoPlay>
            <source src={intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="about-text-container">
          <div className="about-text">
            <h4>Hakkımızda</h4>
            <p>{AboutUsContent.longDescription}</p>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default AboutUs;
