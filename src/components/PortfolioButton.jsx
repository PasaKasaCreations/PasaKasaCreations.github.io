import React from "react";

function PortfolioButton({ value }) {
  return (
    <div className="hover:bg-blue-400 w-14 h-7 pb-8 flex justify-center hover:text-white rounded-full cursor-pointer">
      <p>{value}</p>
    </div>
  );
}

export default PortfolioButton;
