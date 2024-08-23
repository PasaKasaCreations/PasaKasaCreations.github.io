import React from "react";
import Heading from "../components/Heading";
import TeamCard from "../components/TeamCard";
import teamData from "../data/teamData";

function Team() {
  return (
    <div
      id="team"
      className=" px-5 flex flex-col items-center gap-12 bg-[#F5F6F8] py-10"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <Heading heading={"Team"} />
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {teamData.map((data) => {
          return (
            <TeamCard
              key={data.id}
              name={data.name}
              position={data.position}
              description={data.description}
              imageUrl={data.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Team;
