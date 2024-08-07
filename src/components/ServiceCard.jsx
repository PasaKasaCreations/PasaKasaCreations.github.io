import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";

function ServiceCard() {
  return (
    <div className="flex flex-col bg-white gap-3 rounded-sm h-64 justify-center px-5">
      <img src="" alt="" />
      <TbActivityHeartbeat size={50} className="text-blue-500" />
      <p>Lorem Ipsum</p>
      <p>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi
      </p>
    </div>
  );
}

export default ServiceCard;
