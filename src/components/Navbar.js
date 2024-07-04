import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-around pt-4 pb-4 text-white  bg-transparent absolute top-0 z-10 w-full">
      <div className="flex items-center cursor-pointer">
        <img src="https://themewagon.github.io/beko/img/logo.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-10 tracking-wider cursor-pointer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/fighter">Fighter</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div>
        <button className="p-5 pl-10 pr-10 cursor-pointer bg-gradient-to-r from-red-600 to-pink-500 font-bold">
          Install Now
        </button>
      </div>
    </div>
  );
}

export default Navbar;
