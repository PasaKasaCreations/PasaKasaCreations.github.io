import React from "react";

function Home() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://themewagon.github.io/beko/img/banner_bg.png"
          alt="Logo"
        />
      </div>
      <div className="absolute bottom-5 left-28 text-white flex flex-col gap-8 items-start w-1/3">
        <h1 className="text-6xl font-Aclonica leading-tight">
          Best Highlights Of The Latest
        </h1>
        <p className="leading-7 w-10/12">
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
