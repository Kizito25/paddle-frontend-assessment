import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  SiYoutube,
  SiFacebook,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";

const Footer = ({ title, subtitle, bg_color, text_color }) => {
  return (
    <div className="min-h-40 lg:min-h-[20rem] w-full">
      <div className="h-72 relative w-full">
        <div className="h-full flex items-center justify-between text-white bg-gradient-to-b from-[rgb(33,61,113)] to-[rgb(28,29,81)] w-full p-5 lg:p-20">
          <div className="flex flex-col gap-4 flex-start">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider">
              {title}
            </h2>
            <p className="font-light">{subtitle}</p>
            <a className="text-[rgb(254,63,248)] flex items-center gap-2">
              Contact Us <FiArrowRight />
            </a>
          </div>
          <div className="relative h-full w-1/2">
            <div className="absolute bg-gradient-to-b from-yellow-600 via-yellow-700 to-slate-900 h-[100px] w-[30%] top-10 lg:top-0 right-10"></div>
            <div className="absolute backdrop-blur-lg backdrop-opacity-90  bg-white/10 h-[200px] w-[80%] top-0 lg:-top-10 right-5"></div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center mb-20 text-black"
          style={{ backgroundColor: bg_color }}
        >
          <div
            className="flex flex-col items-center justify-center mb-10 gap-5 text-sm font-light"
            style={{ color: text_color }}
          >
            <div className="footer-compass__icons_mobile flex items-center justify-center md:text-xl gap-4 mt-[15%]">
              <SiYoutube className="text-slate-500 hover:text-black cursor-pointer" />
              <SiFacebook className="text-slate-500 hover:text-black cursor-pointer" />
              <SiLinkedin className="text-slate-500 hover:text-black cursor-pointer" />
              <SiInstagram className="text-slate-500 hover:text-black cursor-pointer" />
              <SiTwitter className="text-slate-500 hover:text-black cursor-pointer" />
            </div>
            <div className="flex items-center gap-4 justify-around">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
            <div className="">
              Copyright 2021 &copy; Peddle Technologies, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
