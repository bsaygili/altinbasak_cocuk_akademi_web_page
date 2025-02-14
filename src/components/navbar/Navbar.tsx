import "./navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/text_logo_transparent.png";
import { menuItems } from "../lib";
import { FooterContent } from "../../content";

type NavbarProps = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar: React.FC<NavbarProps> = ({ menuIsOpen, setMenuIsOpen }) => {
  const toggleMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <div className="navbar">
      {/* Logo Section */}
      <Link to="/ana-sayfa" className="navbar-logo">
        <img src={logo} alt="altinbasak_akademi" />
      </Link>

      {/* Menu Section */}
      <ul className="menu-bar">
        {menuItems.map((item: {
          path: string;
          label: string;
        }) => (
          <li key={item.path} className="menu-item">
            <div className="menu-link">
              <Link to={item.path}>
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* Contact Section */}
      <div className="contact-section">
        <p id="call-us">Bizi arayın</p>
        <label htmlFor="call-us">{FooterContent.phone.mobile}</label>
        <label htmlFor="call-us">{FooterContent.phone.landlinephone}</label>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuIsOpen ? "active" : ""}`}
        onClick={toggleMenu}
      > <ul className="hamburger-line-container">{
        Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="hamburger-line"></li>
        ))
      }</ul>
      </div>
    </div>
  );
};

export default Navbar;
