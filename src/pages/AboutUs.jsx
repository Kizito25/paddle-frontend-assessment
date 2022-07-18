import React from "react";
import {
  NavBar,
  Header,
  Footer,
  BlogPosts,
  RecentArticles,
} from "../components";
import { FiSearch } from "react-icons/fi";

const AboutUs = () => {
  const style = {
    bg_color: "rgb(32,0,67)",
    btn_color: "rgba(29,78, 250)",
    text_color: "rgba(255,255,255,255)",
  };

  return (
    <section className="hero__blog min-h-screen">
      <NavBar
        bg_color={style.bg_color}
        btn_color={style.btn_color}
        text_color={style.text_color}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-4 h-[80vh] bg-[rgb(32,0,67)] grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <span className="block w-72 h-3/4 bg-gradient-to-b from-[rgb(137,46,136)] to-[rgb(61,29,89)] absolute right-20 top-10 z-0"></span>
            <div className="backdrop-blur-xl backdrop-opacity-90 backdrop-contrast-10 backdrop-brightness-105 bg-[rgb(32,0,67)]/5 h-full"></div>
            <div className="text-white absolute top-[20%] left-[10%] lg:left-[40%] lg:top-[30%] lg:right-[20%] flex items-center gap-4">
              <span className="block h-[2px] w-24 bg-white"></span>
              <p className="text-white">About Us</p>
            </div>
            <h3 className="text-white text-3xl lg:text-5xl absolute top-[40%] right-[15%] lg:top-[40%] lg:-right-[35%]">
              Built for SaaS <br /> and E-commerce
            </h3>
            <span className="block h-24 w-24 rounded-full bg-gradient-to-b from-[rgb(31,58,111)] to-[rgb(29,2,65)] absolute top-[10%] -right-[100%] "></span>
          </div>
          <div className="bg-[bg-[rgb(28,0,62)]] relative">
            <p className="absolute bottom-10 left-10 text-white font-light w-2/3">
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
        </div>
        <div className="col-span-4 bg-[rgb(28,0,62)] h-72 lg:h-[60vh] flex items-center justify-center">
          <p className="w-full p-10 lg:p-0 lg:w-2/3 text-white text-xl md:text-4xl font-thin leading-loose">
            Metricks was developed because just like you, we needed a products
            that could give us <strong> good value </strong>.
          </p>
        </div>
        <div className="col-span-4 h-[100vh] bg-[rgb(28,0,62)] lg:h-[72vh] grid grid-cols-1 lg:grid-cols-2">
          <div className="cols-span-2 relative px-10">
            <div className="text-white absolute top-[10%] left-[10%] lg:top-[20%] lg:left-[5%] flex items-center gap-4">
              <div className="flex flex-col gap-1 items-center mb-5 justify-center">
                <span className="text-sm font-light">01</span>
                <span className="block h-[1px] w-24 bg-white"></span>
              </div>
              <p className="text-white uppercase font-medium">About Us</p>
            </div>
            <p className="text-white absolute top-[30%] lg:top-[35%] lg:left-[5%] leading-loose font-light">
              We pride ourselves in our ability to innovate and create
              world-class tools that provide reliable and efficient touchpoints
              between advertisers and affiliates.
            </p>
            <div className="absolute top-[70%] left-[8%] lg:top-[65%] lg:left-[5%]">
              <img
                src="https://res.cloudinary.com/kizito25/image/upload/v1658160986/pattern_circles-4_1_1_20-0_0_1__00000000_ffffff_wbcdut.png"
                alt=""
                className="w-[30%]"
              />
            </div>
          </div>
          <div className="cols-span-2 bg-[rgb(28,0,62)] flex relative">
            <div className="h-[80%] w-[40%] bg-gradient-to-b from-blue-400 to-violet-900 absolute right-[10%] top-[10%]"></div>
            <div className="h-[100%] w-[100%] backdrop-blur-xl backdrop-opacity-90 backdrop-contrast-10 backdrop-brightness-105 bg-[rgb(32,0,67)]/5 absolute right-[0%] top-[0%]"></div>
            <div classNames="text-white">
              <div className="text-white absolute top-[8%] left-[10%] lg:top-[20%] lg:left-[5%] flex items-center gap-4">
                <div className="flex flex-col gap-1 items-center mb-5 justify-center">
                  <span className="text-sm font-light">01</span>
                  <span className="block h-[1px] w-24 bg-white"></span>
                </div>
                <p className="text-white uppercase font-medium">
                  Growing with us
                </p>
              </div>
              <p className="absolute left-[5%] lg:left-10 top-[25%] lg:top-[30%] right-5 lg:right-[10%] text-white font-light">
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns all from
                one dashboard. <br /> <br />
                Our team off experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-[rgb(32,0,67)] h-20 w-full"> </div>
      </div>
      <Footer
        bg_color={style.bg_color}
        text_color={style.text_color}
        title="Got a Question?"
        subtitle="See how Metricks can help your business grow with best affiliate marketing tracking software."
        link="#"
      />
    </section>
  );
};

export default AboutUs;
