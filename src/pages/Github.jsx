import { useState, useEffect, startTransition } from "react";
import axios from "axios";
import { NavBarWhite } from "../components";

const Github = () => {
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [stars, setStars] = useState(null);

  const prevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    const url = `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`;
    const req = axios.get(url);
    req.then(({ data }) => {
      setStars(data.items);
      setLoaded(true);
    });
  }, [page]);
  return (
    <div className="">
      <NavBarWhite />
      <div className="h-[30vh] flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-emerald-200 p-5">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          The most starred Github repos that were created in the last 30 days.
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {loaded &&
          stars &&
          stars.map((star) => (
            <div
              key={star.id}
              className="border border-slate-700 flex items-center"
            >
              <img
                src={star.owner.avatar_url}
                alt={star.name}
                className="h-40 w-40"
              />
              <div className="flex flex-col gap-2 px-4">
                <h3>{star.name}</h3>
                <p>{star.description}</p>
                <div className="flex items-center gap-4">
                  <span className="border border-slate-600 p-2">
                    Stars: {star.stargazers_count}
                  </span>
                  <span className="border border-slate-600 p-2">
                    Issues: {star.open_issues}
                  </span>
                  <p>
                    Submitted {"30 Days ago"} by {star.owner.login}
                  </p>
                </div>
              </div>
            </div>
          ))}
        <div className="flex items-center justify-around mb-10">
          <button
            className="bg-violet-900 text-white py-3 px-5"
            onClick={prevPage}
          >
            Previous
          </button>
          <button
            className="bg-violet-900 text-white py-3 px-5"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Github;
