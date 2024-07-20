import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showFixedNavbar, setFixedNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 50 && !showFixedNavbar) {
      setFixedNavbar(true);
    } else if (window.scrollY <= 2 && showFixedNavbar) {
      setFixedNavbar(false);
    }
    setLastScrollY(window.scrollY);
  }, [showFixedNavbar]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);

  return (
    <div
      className={`flex items-center justify-around text-white top-0 z-10 w-full transition-[top] duration-500 ${
        showFixedNavbar
          ? "fixed top-0 animate-topdown bg-red-600"
          : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="flex items-center cursor-pointer">
        <img className="w-28" src="../logo.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-10 tracking-wider cursor-pointer">
        <NavLink
          to="/"
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
        >
          Home
        </NavLink>
        <NavLink
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
          to="/fighter"
        >
          Fighter
        </NavLink>
        <NavLink
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
          to="/team"
        >
          Team
        </NavLink>
        <NavLink
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className="aria-[current=page]:underline underline-offset-4 color decoration-red-600"
          to="/contact"
        >
          Contact
        </NavLink>
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
