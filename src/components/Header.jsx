import React from "react";

const Header = ({ page, title }) => {
  return (
    <div className="h-40 lg:h-60 bg-[rgb(47,18,81)]">
      <div className="flex items-center justify-center h-full relative">
        <span className="block bg-gradient-to-b from-pink-500 to-pink-900 h-[70%] left-[15%] w-[150px] absolute z-0"></span>
        <div className="h-full w-1/2 lg:w-1/3 backdrop-blur-lg backdrop-opacity-90 bg-violet-900/70">
          <div className="h-full space-y-4 flex flex-col justify-center text-white absolute left-0 ml-40 lg:left-[30%]">
            <div className="flex gap-2 items-center lg:-ml-[10rem] uppercase text-[1rem] md:text-xl lg:text-2xl font-medium">
              <span className="block h-[1px] w-24 bg-white"></span>
              <span className="text-xl tracking-wider font-light">{page}</span>
            </div>
            <div className="flex items-center justify-end"></div>
          </div>
        </div>
        <h2 className="absolute left-[16rem] text-white lg:left-[14rem] mt-20 text-2xl md:text-3xl lg:text-4xl -mr-[9rem]  font-medium tracking-wider">
          {title}
        </h2>
        <div className="bg-[rgb(47,18,81)] h-full w-1/2 lg:w-2/3"></div>
      </div>
    </div>
  );
};

export default Header;
