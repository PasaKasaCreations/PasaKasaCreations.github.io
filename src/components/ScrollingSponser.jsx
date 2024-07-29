import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function ScrollingSponser() {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={false}
      ssr={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[
        "tablet",
        "mobile",
        "desktop",
        "superLargeDesktop",
      ]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-30-px"
      className="select-none h-24 bg-gray-100"
    >
      <div className="w-32">
        <img
          draggable="false"
          src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-1.png"
          alt="Logo"
        />
      </div>
      <div className="w-32">
        <img
          draggable="false"
          src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-1.png"
          alt="Logo"
        />
      </div>
      <div className="w-32">
        <img
          draggable="false"
          src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-1.png"
          alt="Logo"
        />
      </div>
      <div className="w-32">
        <img
          draggable="false"
          src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-1.png"
          alt="Logo"
        />
      </div>
    </Carousel>
  );
}

export default ScrollingSponser;
