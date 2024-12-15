import React from "react";
import { Link, useParams } from "react-router-dom";
import { FeaturesContext } from "../../context/FeaturesContext";
import ProductCategory from "../../components/productCategory/ProductCategory";
import bg from "../../assets/school/images/9.jpg";
import { CategoryBar } from "../../components";

import "./aproachesList.scss";


const AproachesList: React.FC = () => {
  const { features } = React.useContext(FeaturesContext);
  const { lessonId } = useParams<Record<"lessonId", string>>();

  const [selectId, setSelectId] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    if (!lessonId) {
      setSelectId(undefined);
    }
  }, [lessonId]);

  return (
    <div className="main-container">
      <img
        src={bg}
        alt="altinbasak"
      />
      <div className="category-bar">
        <CategoryBar
          data={[
            {
              categoryName: "Anasayfa",
              link: "/",
              styleCss: {
                textDecoration: "none",
                color: "#aaa",
                padding: "0px 20px",
                borderRight: "1px solid #aaa",
                outline: "none",
              },
            },
            {
              categoryName: "Eğitimlerimiz",
              link: "/lessons",
              styleCss: {
                textDecoration: "none",
                color: "#aaa",
                padding: "0px 20px",
                borderRight: "1px solid #aaa",
                outline: "none",
              },
            }, ...(lessonId
              ? [
                {
                  categoryName: features[Number(lessonId) - 1]?.name,
                  link: `/lessons/${lessonId}`,
                  styleCss: {
                    textDecoration: "none",
                    color: "black",
                    padding: "0px 20px",
                    outline: "none",
                  },
                },
              ]
              :
              [
                {
                  categoryName: "Eğitim Vizyonumuz",
                  link: `/lessons`,
                  styleCss: {
                    textDecoration: "none",
                    color: "black",
                    padding: "0px 20px",
                    outline: "none",
                  },
                },
              ]
            )
          ]}
        />
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
          // style={{
          //   display: "flex",
          //   flexWrap: "wrap",
          //   justifyContent: "start",
          //   alignItems: "start",
          //   flexDirection: "column",
          // }}
          >
            <div className="features-right-header" >
              <h4>{lessonId ? features[Number(lessonId) - 1].name : "Eğitim Vizyonumuz"}</h4>
            </div>
            <div className="features-right-content">
              <div>
                <img
                  src={lessonId ? features[Number(lessonId) - 1].img : ""}
                  alt="altinbasak"
                />
              </div>
              <div>
                <p>
                  {lessonId ? features[Number(lessonId) - 1].desc : "Yapım aşamasında..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AproachesList;
