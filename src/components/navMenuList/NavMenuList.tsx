import React from "react";
import "./navMenuList.scss";
import { Link } from "react-router-dom";
import { menuItems } from "../lib";

type NavMenuListProps = {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenuList: React.FC<NavMenuListProps> = ({ menuIsOpen, setMenuIsOpen }) => {
  const handleMenuClose = () => setMenuIsOpen(false);

  return (
    <div className={`navMenuList ${menuIsOpen ? "active" : ""}`} id="menuList">
      <ul>
        {menuItems.map((item: {
          path: string;
          label: string;
        }) => (
          <li key={item.path} onClick={handleMenuClose} className="menu-item">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuList;
