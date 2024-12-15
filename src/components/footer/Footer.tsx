import "./footer.scss";
import React, { useEffect } from "react";
import * as Icons from "@mui/icons-material";
import "aos/dist/aos.css";
import AOS from "aos";
import { FooterContent } from "../../content";
import { CONTACT_LINKS } from "../lib";
import IconTag from "../iconTag/IconTag";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer-container top" id="footer-contact">
      <div
        className="contact top"
        data-aos="fade-up"
        data-aos-offset="-300"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="content-start content">
          <h4>
            <span>{FooterContent.name}</span>
          </h4>
          <p>
            {FooterContent.description}</p>
          <ul className="icons">
            {CONTACT_LINKS.map(({ href, Icon, className }, index) => (
              <li key={index}>
                <a href={href} target="_blank" rel="noopener noreferrer" title={href}>
                  <IconTag iconKey={Icon as keyof typeof Icons} className={className} fontSize="large" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content-middle content">
          <h4>KURUMSAL</h4>
          <ul>
            <li>Hakkımızda</li>
            <li>Vizyon&Misyon</li>
          </ul>
        </div>
        <div className="content-middle content">
          <h4>{FooterContent.educations.title.toLocaleUpperCase()}</h4>
          <ul>
            {
              FooterContent.educations.approaches.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))
            }
          </ul>
        </div>
        <div className="content-end content">
          <h4>BİZE ULAŞIN</h4>
          <ul>
            <li>
              <span>
                <IconTag iconKey="LocationOn" />
              </span>
              {FooterContent.address}
            </li>
            <li>
              <span>
                <IconTag iconKey="Phone" />
              </span>
              {FooterContent.phone.mobile} - {FooterContent.phone.landlinephone}
            </li>
          </ul>
        </div>
      </div>
      <div
        className="footer top"
        data-aos="fade-up"
        data-aos-offset="-450"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <p>
          <span className="title">{FooterContent.name}</span> {FooterContent.legal}
        </p>
        <div className="signature">
          <p className="designer">
            Designer/Developer:
            <a
              className="name"
              href="https://www.bahadirsaygili.com"
              target="_blank"
              rel="noopener noreferrer"
              title="developer-website"
            >
              Bahadır SAYGILI
            </a>
          </p>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/bahadir-saygili/"
            target="_blank"
            rel="noopener noreferrer"
            title="developer-linkedIn"
          >
            <IconTag iconKey="LinkedIn" className="iconLi" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
