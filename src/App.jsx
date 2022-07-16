import { NavBar } from "./components";
import {
  SiYoutube,
  SiFacebook,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
} from "react-icons/si";

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
    <section className="min-h-screen">
      <NavBar
        bg_color={style.bg_color}
        btn_color={style.btn_color}
        text_color={style.text_color}
      />
      <div className="flex items-center justify-center relative lg:static z-50">
        <div className="flex flex-col space-y-4 lg:space-y-8 items-center justify-center text-center w-3/4 lg:w-2/4 py-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl leading-normal font-bold uppercase text-white mt-10 lg:mt-0">
            something awesome is coming soon
          </h1>
          <p className="text-sm font-extralight text-white">
            your all-in-one affiliate marketing and tracking software to{" "}
            <strong>track</strong>, <strong>automate</strong> and{" "}
            <strong>optimize</strong> your campaigns.
          </p>
          <div className="flex gap-2 lg:gap-4">
            {cards.map((card, index) => (
              <div
                key={index + 1}
                className="bg-white rounded-md p-2 grid grid-cols-1 space-y-1 lg:space-y-2 w-16 lg:w-20"
              >
                <h2 className="text-3xl lg:text-4xl font-semibold">
                  {card.figure}
                </h2>
                <p className="text-sm font-light">{card.title}</p>
              </div>
            ))}
          </div>

          <form className="space-y-5">
            <div className="flex gap-1 lg:gap-3">
              <input
                type="text"
                placeholder="First Name.."
                className="w-1/2 text-sm text-white font-light py-2 outline-none border-t-0 border-l-0 border-r-0 px-5 bg-transparent border border-slate-400 current"
              />
              <input
                type="text"
                placeholder="Last Name.."
                className="w-1/2 text-sm text-white font-light py-2 outline-none border-t-0 border-l-0 border-r-0 px-5 bg-transparent border border-slate-400 current"
              />
            </div>
          </form>
          <form className="relative w-[100%] lg:w-[70%] flex">
            <input
              type="email"
              className="text-xs font-extralight outline-none rounded-full py-3 px-5 absolute bg-white w-full top-3 lg:top-0 -left-10"
              placeholder="Enter your email address..."
            />
            <button
              className="text-xs font-extralight uppercase outline-none rounded-full py-3 px-5 cursor-pointer absolute top-3 lg:top-0 -right-10"
              style={{
                backgroundColor: style.btn_color,
                color: style.text_color,
              }}
            >
              join our waiting list
            </button>
          </form>
          <div className="bg-circles">
            <div className="absolute top-[0] lg:top-[30%] -right-[0%] lg:right-[14%] bg-circle__1"></div>
            <div className="absolute -top-[1%] lg:top-[20%] -left-[12%] lg:left-[12%] bg-circle__2"></div>
            <div className="absolute bottom-14 lg:-bottom-[15%] left-[5%] lg:left-[24%] z-0 bg-circle__3"></div>
          </div>
          <div className="hidden lg:flex items-center justify-center relative h-60 text-sm font-light">
            <div className="footer-compass h-60 text-sm font-light">
              <div className="footer-compass__1">
                <div className="footer-compass__icons">
                  <SiYoutube />
                  <SiFacebook />
                  <SiLinkedin />
                  <SiInstagram />
                  <SiTwitter />
                </div>
                <div className="footer-compass__terms">
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                </div>
                <div className="footer-compass__copy">
                  Copyright 2021 &copy; Peddle Technologies, All Rights
                  Reserved.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden  relative w-[100vw] -bottom-[12vh]">
            <div className="backdrop-blur-lg backdrop-contrast-50 backdrop-opacity-60 w-full h-full rounded-t-full">
              <div className="flex flex-col space-y-2 p-3">
                <div className="footer-compass__icons_mobile flex items-center justify-center gap-4 mt-[15%] text-white">
                  <SiYoutube />
                  <SiFacebook />
                  <SiLinkedin />
                  <SiInstagram />
                  <SiTwitter />
                </div>
                <div className="text-white text-sm font-light">
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                </div>
                <div className="text-white text-sm font-light">
                  Copyright 2021 &copy; Peddle Technologies, All Rights
                  Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
