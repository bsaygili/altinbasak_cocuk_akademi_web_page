import React from "react";
import { Link, useParams } from "react-router-dom";
import { FeaturesContext } from "../../context/FeaturesContext";
import bg from "../../assets/school/images/9.jpg";
import { CategoryBar } from "../../components";
import educationImg from "/src/assets/school/images/12.jpg"

import "./aproachesList.scss";


const defaultStyle = {
  textDecoration: "none",
  color: "#aaa",
  padding: "0px 20px",
  borderRight: "1px solid #aaa",
  outline: "none",
};

const activeStyle = {
  ...defaultStyle,
  color: "black",
  borderRight: "none",
};

const categories = [
  { categoryName: "Anasayfa", link: "/", styleCss: defaultStyle },
  { categoryName: "Eğitimlerimiz", link: "/eğitimlerimiz", styleCss: defaultStyle },
];

const AproachesList: React.FC = () => {
  const { features } = React.useContext(FeaturesContext);
  const { lessonId } = useParams<Record<"lessonId", string>>();

  const [selectId, setSelectId] = React.useState<number | undefined>(Number(lessonId) ?? undefined);
  const { img, desc, name, isImage } = features[Number(lessonId) - 1] ?? {};

  const dynamicCategory = lessonId
    ? { categoryName: name, link: `/eğitimlerimiz/${lessonId}`, styleCss: activeStyle }
    : { categoryName: "Eğitim Vizyonumuz", link: "/eğitimlerimiz", styleCss: activeStyle };

  React.useEffect(() => {
    if (!lessonId) {
      setSelectId(undefined);
    } else {
      setSelectId(Number(lessonId));
    }
  }, [lessonId]);

  return (
    <div className="main-container">
      <img
        src={bg}
        alt="altinbasak"
      />
      <div className="category-bar">
        <CategoryBar data={[...categories, dynamicCategory]} />
      </div>
      <div className="approaches-container">
        <div className="approaches-left">
          <div className="ct">
            <ul className="ct1">
              {features?.map((item) => (
                <Link
                  to={`${item.id}`}
                  style={{ textDecoration: "none" }}
                  key={item.id}
                >
                  <li
                    className={selectId === item.id ? "ct2 active" : "ct2"}
                    key={item.id}
                    onClick={() => setSelectId(item?.id)}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="features-right">
          <div
            className="main-container"
          >
            <div className="features-right-header" >
              <h4>{lessonId ? name : "Eğitim Vizyonumuz"}</h4>
            </div>
            <div className="features-right-content">
              {img ? (
                isImage ? (
                  <img src={img} alt="altinbasak" />
                ) : (
                  <video muted autoPlay security="restricted">
                    <source src={img} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <img src={educationImg} alt="altinbasak" />
              )}
              <div>
                <p>
                  {lessonId ? desc : "Yapım aşamasında..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default AproachesList;
