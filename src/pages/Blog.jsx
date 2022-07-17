import React from "react";
import {
  NavBarWhite,
  Header,
  Footer,
  BlogPosts,
  RecentArticles,
} from "../components";
import { FiSearch } from "react-icons/fi";
const Blog = () => {
  return (
    <section className="hero__blog min-h-screen">
      <NavBarWhite
        bg_color="rgba(250,250,250)"
        btn_color="rgba(255,255,255)"
        text_color="rgba(000,000,000)"
      />
      <Header page="Blog" title="Articles and News" />
      <div className="p-5 lg:m-10 lg:p-10">
        <h2 className="text-2xl font-medium tracking-wide mb-5 lg:mb-10">
          Latest From the Blog
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adi Lorem ipsum dolor sit
              amet, consectetur adi Lorem ipsum dolor sit amet, consectetur adi
              Lorem ipsum dolor sit amet, consectetur adi
            </p>
          </div>
          <form className="flex relative w-full lg:w-1/2 my-10">
            <input
              type="search"
              placeholder="search here"
              className="border-[1px] border-black bg-transparent outline-none rounded-full w-full lg:w-2/3 p-4 absolute lg:right-0"
            />
            <div className="absolute right-5 top-5">
              <FiSearch />
            </div>
          </form>
        </div>
        <BlogPosts />
        <div>
          <div className="mt-10">
            <h2 className="text-3xl lg:text-4xl font-medium tracking-wide mb-10">
              Recent Articles
            </h2>
            <p className="text-xl font-light">
              Lorem ipsum dolor sit amet, consectetur adi Lorem ipsum dolor sit
              amet, consectetur adi Lorem ipsum dolor sit amet, consectetur adi
              Lorem ipsum dolor sit amet, consectetur adi
            </p>
            <RecentArticles />
          </div>
        </div>
      </div>
      <Footer
        title="Want to Know More About Netrics?"
        subtitle="Learn who we are and what drives us."
        link="#"
      />
    </section>
  );
};

export default Blog;
