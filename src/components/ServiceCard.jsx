import React from "react";
import { TbActivityHeartbeat } from "react-icons/tb";

function ServiceCard({ title, description }) {
  return (
    <div className="flex flex-col bg-white gap-3 rounded-sm h-64 justify-center px-5 cursor-pointer hover:shadow-md w-full">
      <img src="" alt="" />
      <TbActivityHeartbeat size={50} className="text-blue-500" />
      <p className="font-bold">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;
