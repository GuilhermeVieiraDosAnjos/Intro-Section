import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-aWhite h-screen">
        <Navbar />
        <div className="content sm:grid grid-cols-2 sm:m-10 ">
          <div className="order-last">
            <img src="images/image-hero-mobile.png" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center m-4 text-aBlack gap-4 self-start sm:w-3/4 ">
            <h2 className=" text-2xl sm:text-7xl font-bold my-2 ">Make remote work</h2>
            <article className="text-center sm:text-justify  text-xl text-mGray my-2">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </article>
            <button
              type="button"
              title="Learn More"
              className="py-2 px-6 my-4 sm:self-start hover:bg-aWhite hover:text-aBlack duration-500 border-2 border-aBlack bg-aBlack text-aWhite rounded-xl"
            >
              Learn More
            </button>
            <footer className="flex w-full justify-around gap-4 my-14 self-start">
              <img className="h-4" src="images/client-databiz.svg" alt="" />
              <img className="h-4" src="images/client-audiophile.svg" alt="" />
              <img className="h-4" src="images/client-meet.svg" alt="" />
              <img className="h-4" src="images/client-maker.svg" alt="" />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
