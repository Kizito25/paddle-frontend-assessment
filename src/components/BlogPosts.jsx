import React from "react";
import { ReadMore } from "../components";

const BlogPosts = () => {
  const blogs = [
    {
      title: "12 Popup Use Cases To Increase Conversions",
      image:
        "https://res.cloudinary.com/kizito25/image/upload/v1658013534/pexels-gustavo-fring-3985282_xooe2x.jpg",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
    {
      title: "12 Popup Use Cases To Increase Conversions",
      image:
        "https://res.cloudinary.com/kizito25/image/upload/v1658013534/pexels-gustavo-fring-3985282_xooe2x.jpg",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
    {
      title: "12 Popup Use Cases To Increase Conversions",
      image:
        "https://res.cloudinary.com/kizito25/image/upload/v1658013534/pexels-gustavo-fring-3985282_xooe2x.jpg",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
    {
      title: "12 Popup Use Cases To Increase Conversions",
      image:
        "https://res.cloudinary.com/kizito25/image/upload/v1658013534/pexels-gustavo-fring-3985282_xooe2x.jpg",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
    {
      title: "12 Popup Use Cases To Increase Conversions",
      image:
        "https://res.cloudinary.com/kizito25/image/upload/v1658013534/pexels-gustavo-fring-3985282_xooe2x.jpg",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
    {
      title: "12 Popup Use Cases To Increase Conversions",
      image:
        "https://res.cloudinary.com/kizito25/image/upload/v1658013534/pexels-gustavo-fring-3985282_xooe2x.jpg",
      body: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et",
      date: "September 6, 2021 . Featured Article . Affiliate",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 mt-10">
      {blogs.map((blog, index) => (
        <div
          key={index + 1}
          className="p-4"
          style={{
            boxShadow: "0.2px 8px 8px 0.2px rgba(000,000,000,0.1)",
          }}
        >
          <img src={blog.image} alt={blog.title} />
          <p className="text-sm font-extralight my-2">{blog.date}</p>
          <h2 className="text-xl md:text-2xl font-semibold my-2">
            {blog.title}
          </h2>
          <p className="text-[1rem] leading-8 font-light">{blog.body}</p>
          <ReadMore link="" />
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
