import React, { useContext, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navList from "../data/navlist";
import NavbarContext from "../context/NavbarContext";

function Navbar() {
  const [offset, setOffset] = useState(0);
  const {
    isNavbarActive,
    changeNavbarState,
    activeNavElementId,
    changeNavbarActiveElementId,
  } = useContext(NavbarContext);

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    setOffset(window.scrollY);
  };

  return (
    <div
      className={`${
        offset > 200 ? "bg-opacity-90" : "bg-transparent"
      } flex items-center justify-between w-screen h-20 bg-[#293C5D]  px-10  fixed z-10`}
    >
      <div className="cursor-pointer">
        <h1 className="font-semibold text-3xl text-white font-Poppins uppercase">
          Pasakasa
        </h1>
      </div>

      <div className="hidden lg:block">
        <div className="flex gap-7 text-md font-Poppins">
          {navList.map((navElement) => {
            return (
              <div
                onClick={() => {
                  changeNavbarActiveElementId(navElement.id);
                }}
                key={navElement.id}
                className={`cursor-pointer ${
                  activeNavElementId === navElement.id
                    ? "text-blue-300"
                    : "text-white"
                }`}
              >
                <a href={`#${navElement.linkAddress}`}>{navElement.linkName}</a>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`${isNavbarActive && "hidden"} cursor-pointer lg:hidden`}
        onClick={() => {
          changeNavbarState(true);
        }}
      >
        <GiHamburgerMenu size={25} className="text-white" />
      </div>
    </div>
  );
}

export default Navbar;
