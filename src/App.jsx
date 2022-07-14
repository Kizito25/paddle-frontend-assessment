import { useState } from "react";
import { NavBar } from "./components";

function App() {
  const cards = [
    { figure: "7", title: "Days" },
    { figure: "24", title: "Hours" },
    { figure: "54", title: "Minutes" },
    { figure: "11", title: "Seconds" },
  ];
  const style = {
    bg_color: "",
    btn_color: "rgba(29,78, 250)",
    text_color: "rgba(255,255,255,255)",
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-900 to-slate-900">
      <NavBar
        bg_color={style.bg_color}
        btn_color={style.btn_color}
        text_color={style.text_color}
      />
      <div className="flex items-center justify-center">
        <div className="flex flex-col space-y-10 items-center justify-center text-center w-2/4">
          <h1 className="text-4xl leading-normal font-bold uppercase text-white">
            something awesome is coming soon
          </h1>
          <p className="text-sm font-extralight text-white">
            your all-in-one affiliate marketing and tracking software to{" "}
            <strong>track</strong>, <strong>automate</strong> and{" "}
            <strong>optimize</strong> your campaigns.
          </p>
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <div
                key={index + 1}
                className="bg-white rounded-md p-3 grid grid-cols-1 space-y-2 w-20"
              >
                <h2 className="text-4xl font-semibold">{card.figure}</h2>
                <p className="text-sm font-light">{card.title}</p>
              </div>
            ))}
          </div>

          <form className="space-y-5">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name.."
                className="text-sm text-white font-light py-2 outline-none border-t-0 border-l-0 border-r-0 px-5 bg-transparent border border-slate-400 current"
              />
              <input
                type="text"
                placeholder="First Name.."
                className="text-sm text-white font-light py-2 outline-none border-t-0 border-l-0 border-r-0 px-5 bg-transparent border border-slate-400 current"
              />
            </div>
          </form>
          <form className="relative w-[70%] flex">
            <input
              type="email"
              className="text-xs font-extralight outline-none rounded-full py-3 px-5 absolute bg-white w-full top-0 left-0"
              placeholder="Enter your email address..."
            />
            <button
              className="text-xs font-extralight uppercase outline-none rounded-full py-3 px-5 cursor-pointer absolute top-0 right-0"
              style={{
                backgroundColor: style.btn_color,
                color: style.text_color,
              }}
            >
              join our waiting list
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
