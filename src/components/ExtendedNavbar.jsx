import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import navList from "../data/navlist";
import NavbarContext from "../context/NavbarContext";

function ExtendedNavbar() {
  const {
    isNavbarActive,
    changeNavbarState,
    activeNavElementId,
    changeNavbarActiveElementId,
  } = useContext(NavbarContext);

  return (
    <div
      className={`${
        !isNavbarActive && "hidden"
      } flex flex-col px-5 py-3 fixed top-1/2 -translate-y-1/2 h-screen w-screen justify-around bg-black bg-opacity-60 z-20`}
    >
      <div
        className="cursor-pointer self-end"
        onClick={() => {
          changeNavbarState(false);
        }}
      >
        <AiOutlineClose size={25} className="font-extrabold text-white" />
      </div>
      <div className="bg-white rounded-md pl-5 pt-3 flex flex-col gap-3 h-[90%] text-lg font-Poppins font-medium">
        {navList.map((navElement) => {
          return (
            <div
              key={navElement.id}
              onClick={() => {
                changeNavbarState(false);
                changeNavbarActiveElementId(navElement.id);
              }}
              className={`cursor-pointer ${
                activeNavElementId === navElement.id
                  ? "text-blue-500"
                  : "text-black"
              }`}
            >
              <a href={`#${navElement.linkAddress}`}>{navElement.linkName}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExtendedNavbar;
