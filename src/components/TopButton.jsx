import React from "react";
import { FaArrowUp } from "react-icons/fa";

function TopButton() {
  return (
    <div className="fixed bottom-2 right-2 cursor-pointer">
      <a
        href="#home"
        className="rounded-full w-12 h-12 bg-blue-500 flex items-center justify-center hover:bg-blue-400"
      >
        <FaArrowUp className="text-white" />
      </a>
    </div>
  );
}

export default TopButton;
