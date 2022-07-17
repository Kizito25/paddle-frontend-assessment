import React from "react";

const ReadMore = ({ link }) => {
  return (
    <div className="flex my-2 items-center gap-4">
      <span className="block h-[1px] w-[40px] bg-pink-500"></span>
      <a href={link} className="text-pink-500 uppercase text-sm font-light">
        Read More
      </a>
    </div>
  );
};

export default ReadMore;
