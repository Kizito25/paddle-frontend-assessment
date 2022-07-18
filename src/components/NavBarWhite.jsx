import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalComp } from "../components";

const NavBarWhite = ({ btn_color, bg_color, text_color }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleContactModal = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav
      className="flex items-center justify-between p-5 lg:p-10"
      style={{
        backgroundColor: bg_color,
      }}
    >
      {modalIsOpen && (
        <ModalComp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      )}

      <div
        className="text-2xl md:text-3xl lg:text-4xl font-bold"
        style={{ color: text_color }}
      >
        <Link to="/">Logo</Link>
      </div>
      <ul
        className="flex items-center gap-2 md:gap-4 lg:gap-10 uppercase text-xs font-medium"
        style={{ color: text_color }}
      >
        <li className="hover:text-[rgb(254,63,248)]">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-[rgb(254,63,248)]">
          <Link to="/blog">Blog</Link>
        </li>
        <li
          className="py-2 px-3 lg:py-3 hover:text-[rgb(254,63,248)] lg:px-5 rounded-full shadow-sm cursor-pointer"
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
