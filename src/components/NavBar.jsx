import React from "react";
import { Link } from "react-router-dom";

const toggleContactModal = () => {
  console.log("Contact Modal Opened");
};

const NavBar = ({ btn_color, bg_color, text_color }) => {
  return (
    <nav
      className="flex items-center justify-between p-5 lg:p-10"
      style={{
        backgroundColor: bg_color,
      }}
    >
      <div
        className="text-2xl md:text-3xl lg:text-4xl font-bold"
        style={{ color: text_color }}
      >
        <Link className="hover:text-[rgb(254,63,248)]" to="/">
          Logo
        </Link>
      </div>
      <ul
        className="flex items-center gap-2 md:gap-4 lg:gap-10 uppercase text-xs font-medium"
        style={{ color: text_color }}
      >
        <li>
          <Link className="hover:text-[rgb(254,63,248)]" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-[rgb(254,63,248)]" to="/blog">
            Blog
          </Link>
        </li>
        <li
          className="hover:text-[rgb(254,63,248)] py-2 px-3 lg:py-3 lg:px-5 rounded-full cursor-pointer"
          style={{ backgroundColor: btn_color }}
          onClick={toggleContactModal}
        >
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
