import React from "react";
import Heading from "../components/Heading";
import PortfolioButton from "../components/PortfolioButton";
import PortfolioComponent from "../components/PortfolioComponent";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" px-5 flex flex-col items-center gap-12 bg-[#F5F6F8] py-10"
    >
      <div className="flex flex-col items-center gap-4">
        <Heading heading={"Services"} />
        <p className="text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <PortfolioButton value={"All"} />
        <PortfolioButton value={"App"} />
        <PortfolioButton value={"Card"} />
        <PortfolioButton value={"Web"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
        <PortfolioComponent
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
          }
          appName={"App 1"}
          description={"Lorem ipsum, dolor sit"}
        />
        <PortfolioComponent
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
          }
          appName={"Product 1"}
          description={"Lorem ipsum, dolor sit"}
        />
        <PortfolioComponent
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
          }
          appName={"Product 2"}
          description={"Lorem ipsum, dolor sit"}
        />
        <PortfolioComponent
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
          }
          appName={"App 1"}
          description={"Lorem ipsum, dolor sit"}
        />
        <PortfolioComponent
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
          }
          appName={"Product 1"}
          description={"Lorem ipsum, dolor sit"}
        />
        <PortfolioComponent
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
          }
          appName={"Product 2"}
          description={"Lorem ipsum, dolor sit"}
        />
      </div>
    </div>
  );
}

export default Portfolio;
