import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function TeamCard({
  name,
  position,
  description,
  facebookUrl,
  instagramUrl,
  linkedInUrl,
  imageUrl,
}) {
  return (
    <div className="flex items-center justify-center gap-5 bg-white rounded-lg p-4  shadow-lg sm:px-4 sm:py-10">
      <img src={imageUrl} alt="Team" className="w-32 rounded-full" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <p className="text-xl font-bold text-blue-500">{name}</p>
          <p>{position}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{description}</p>
          <div className="flex text-xl gap-2 text-gray-500">
            <div className="p-2 rounded-full bg-gray-200 hover:bg-[#47B2E4] hover:text-white cursor-pointer">
              <a href={facebookUrl}>
                <FaFacebook />
              </a>
            </div>
            <div className="p-2 rounded-full bg-gray-200 hover:bg-[#47B2E4] hover:text-white cursor-pointer">
              <a href={instagramUrl}>
                <FaInstagram />
              </a>
            </div>
            <div className="p-2 rounded-full bg-gray-200 hover:bg-[#47B2E4] hover:text-white cursor-pointer">
              <a href={linkedInUrl}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
