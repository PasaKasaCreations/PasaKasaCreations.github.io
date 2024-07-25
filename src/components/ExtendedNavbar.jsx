import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import navList from "../data/navlist";

function ExtendedNavbar() {
  return (
    <div className="flex flex-col px-5 py-3 fixed top-1/2 -translate-y-1/2 h-screen w-screen gap-4 bg-black bg-opacity-30">
      <div className="cursor-pointer self-end">
        <AiOutlineClose size={25} className="font-extrabold text-white" />
      </div>
      <div className="bg-white rounded-md pl-5 pt-3 flex flex-col gap-3 h-5/6 text-lg font-Poppins font-medium">
        {navList.map((navElement) => {
          return (
            <div
              key={navElement.id}
              className={`cursor-pointer ${
                navElement.isActive ? "text-blue-500" : "text-black"
              }`}
            >
              <a href="http">{navElement.linkName}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExtendedNavbar;
