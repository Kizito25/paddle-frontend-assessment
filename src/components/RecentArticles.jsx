import React from "react";
import { ReadMore } from "../components";

const RecentArticles = () => {
  const articles = [
    {
      title: "12 Popup Use Cases To Increase Conversions",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
    {
      title: "12 Popup Use Cases To Increase Conversions",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
    {
      title: "12 Popup Use Cases To Increase Conversions",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 mt-10">
        {articles.map((article, index) => (
          <div
            key={index + 1}
            className="p-4"
            style={{
              boxShadow: "0.2px 2px 4px .2px rgba(000,000,000,0.3)",
            }}
          >
            <p className="text-sm font-extralight my-2">{article.date}</p>
            <h2 className="text-xl md:text-2xl font-semibold my-2">
              {article.title}
            </h2>
            <p className="text-[1rem] leading-8 font-light">{article.body}</p>
            <ReadMore />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-10">
        <button className="bg-[rgb(124,14,213)] rounded-full py-3 px-10 shadow-md text-white uppercase tracking-wide">
          Load More
        </button>
      </div>
    </div>
  );
};

export default RecentArticles;
