import React from "react";
import Heading from "../components/Heading";
import TeamCard from "../components/TeamCard";

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
        <TeamCard
          name={"Walter White"}
          position={"Chief Executive Officer"}
          description={
            "Explicabo voluptatem mollitia et repellat qui dolorum quasi"
          }
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-1.jpg"
          }
        />
        <TeamCard
          name={"Sarah Jhonson"}
          position={"Product Manager"}
          description={
            "Aut maiores voluptates amet et quis praesentium qui senda para"
          }
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-2.jpg"
          }
        />
        <TeamCard
          name={"William Anderson"}
          position={"CTO"}
          description={
            "Quisquam facilis cum velit laborum corrupti fuga rerum quia"
          }
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-3.jpg"
          }
        />
        <TeamCard
          name={"Amanda Jepson"}
          position={"Accountant"}
          description={
            "Dolorum tempora officiis odit laborum officiis et et accusamus"
          }
          imageUrl={
            "https://bootstrapmade.com/demo/templates/Arsha/assets/img/team/team-4.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Team;
