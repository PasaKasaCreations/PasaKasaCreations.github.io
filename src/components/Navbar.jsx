import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navList from "../data/navlist";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-screen h-20 bg-slate-600 bg-opacity-90 px-16">
      <div>
        <h1 className="font-semibold text-3xl text-white font-Poppins">
          ARSHA
        </h1>
      </div>

      <div>
        <div className="flex gap-7 text-md font-Poppins">
          {navList.map((navElement) => {
            return (
              <div
                key={navElement.id}
                className={`cursor-pointer ${
                  navElement.isActive ? "text-blue-300" : "text-white"
                }`}
              >
                <a href="#home">{navElement.linkName}</a>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="cursor-pointer">
        <GiHamburgerMenu size={25} className="text-white" />
      </div> */}
    </div>
  );
}

export default Navbar;
