import React from "react";

const toggleContactModal = () => {
  console.log("Contact Modal Opened");
};

const NavBarWhite = ({ btn_color, bg_color, text_color }) => {
  return (
    <nav
      className="flex items-center justify-between p-10"
      style={{
        backgroundColor: bg_color,
      }}
    >
      <div>Logo</div>
      <ul
        className="flex items-center gap-10 uppercase text-xs font-medium"
        style={{ color: text_color }}
      >
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li
          className="py-3 px-5 rounded-full cursor-pointer"
          style={{ backgroundColor: btn_color }}
          onClick={toggleContactModal}
        >
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default NavBarWhite;
