import "./urunler.scss";
import UrunCard from "../urunCard/UrunCard";
import { features } from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Urunler = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="urunler" id="urunler">
      <div className="container">
        <div className="product-area top">
          {features.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-offset="-150"
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
    </div>
  );
};

export default Urunler;
