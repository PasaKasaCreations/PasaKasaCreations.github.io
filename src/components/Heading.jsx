import React from "react";

function Heading({ heading }) {
  return (
    <div>
      <p className="uppercase font-Poppins font-bold text-3xl text-[#37517E]">
        {heading}
      </p>
      <div className="bg-gray-700 h-[1px] relative">
        <div className="bg-blue-500 h-[3px] w-1/3 absolute top-0s left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
}

export default Heading;
