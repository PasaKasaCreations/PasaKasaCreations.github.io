import React from "react";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="flex flex-col items-center py-10 gap-12 px-5">
      <div>
        <p className="uppercase font-Poppins font-bold text-3xl text-[#37517E]">
          About Us
        </p>
        <div className="bg-gray-700 h-[1px] relative">
          <div className="bg-blue-500 h-[3px] w-1/3 absolute top-0s left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-10 sm:px-10 lg:flex-row">
          <div className="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <TiTick />
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="flex items-center gap-2">
                <TiTick />
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="flex items-center gap-2">
                <TiTick />
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:basis-2/3">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <div className="flex items-center justify-center rounded-md w-48 h-12 gap-2 text-blue-400 border-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white select-none">
              <button>Read More</button>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-12 gap-14 lg:flex-row">
          <div className="w-2/3 lg:order-1 lg:max-w-[400px]">
            <img
              src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/why-us.png"
              alt="Logo"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-4xl">
              Eum ipsam laborum deleniti velit pariatur architecto aut nihil
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
