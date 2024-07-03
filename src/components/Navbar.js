import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-around pt-4 pb-4 bg-black text-white">
      <div className="flex items-center">
        <img src="https://themewagon.github.io/beko/img/logo.png" />
      </div>
      <div className="flex items-center gap-10 tracking-wider">
        <a href="#">Home</a>
        <a href="#">Fighter</a>
        <a href="#">Team</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <button className="p-3 pl-5 pr-5 cursor-pointer bg-gradient-to-r from-red-600 to-pink-500 font-bold">
          Install Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
