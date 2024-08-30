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
    </div>
  );
}

export default Services;
