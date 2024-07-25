import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-screen h-16 bg-slate-400 px-3">
      <div className="text-white">
        <h1 className="font-semibold text-3xl">ARSHA</h1>
      </div>

      <div className="cursor-pointer">
        <GiHamburgerMenu size={25} className="text-white" />
      </div>
    </div>
  );
}

export default Navbar;
