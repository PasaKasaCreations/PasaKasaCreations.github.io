import React from "react";

function Home() {
  return (
    <div>
      <div className="relative">
        <img src="https://themewagon.github.io/beko/img/banner_bg.png" />
      </div>
      <div className="absolute bottom-0 left-14 text-white flex flex-col gap-10 items-start">
        <h1 className="text-6xl flex flex-col font-">
          <span>Best Highlights</span>
          <span>Of The Latest</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        </p>
        <button className="p-5 pl-10 pr-10 cursor-pointer bg-gradient-to-r from-red-600 to-pink-500 font-bold">
          Watch Tutorial
        </button>
      </div>
    </div>
  );
}

export default Home;
