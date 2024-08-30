import React from "react";

function PortfolioComponent({ imageUrl, appName, description }) {
  return (
    <div className="relative group cursor-pointer">
      <img src={imageUrl} alt="Portfolio" className="w-full" />
      <div className="flex justify-between translate-y-0 w-full group-hover:-translate-y-full delay-150 duration-150 transition-transform">
        <div className="">
          <p>{appName}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioComponent;
