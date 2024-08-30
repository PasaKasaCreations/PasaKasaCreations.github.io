import React from "react";
import Heading from "../components/Heading";
import PortfolioButton from "../components/PortfolioButton";
import PortfolioComponent from "../components/PortfolioComponent";
import porftolioData from "../data/portfolioData";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" px-5 flex flex-col items-center gap-12 bg-[#F5F6F8] py-10"
    >
      <div className="flex flex-col items-center gap-4">
        <Heading heading={"Portfolio"} />
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
        {porftolioData.map((data) => {
          return (
            <PortfolioComponent
              key={data.id}
              imageUrl={data.imageUrl}
              appName={data.title}
              description={data.description}
            ></PortfolioComponent>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
