import "./features.scss";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import UrunCard from "../urunCard/UrunCard";
import { features } from "../../data";

const Features: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="features-container">
      <h1>Neden biz?</h1>
      <div className="productCards">
        {features.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-offset="-200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <UrunCard key={i} id={item.id} img={item.img} desc={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
