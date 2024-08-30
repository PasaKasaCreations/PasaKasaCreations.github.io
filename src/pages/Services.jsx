import React from "react";
import Heading from "../components/Heading";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/servicesData";

function Services() {
  return (
    <div
      id="services"
      className=" px-5 flex flex-col items-center gap-12 bg-[#F5F6F8] py-10"
    >
      <div className="flex flex-col items-center gap-4">
        <Heading heading={"Services"} />
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 justify-items-center sm:grid-cols-2 xl:grid-cols-4">
        {servicesData.map((data) => {
          return (
            <ServiceCard
              key={data.id}
              title={data.title}
              description={data.description}
            ></ServiceCard>
          );
        })}
      </div>

      <div className="flex flex-col gap-8 items-center justify-center py-28 xl:flex-row sm:px-20">
        <div className="flex flex-col items-center gap-2 xl:items-start">
          <p className="text-2xl font-bold">Call To Action</p>
          <p className="text-center xl:text-left">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="flex items-center justify-center rounded-full w-48 h-12 gap-2 text-blue-400 border-2 border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white select-none">
          <button>Call To Action</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
