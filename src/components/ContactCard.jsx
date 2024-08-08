import React from "react";

function ContactCard({ title, description, icon }) {
  return (
    <div className="flex gap-5">
      <div className="flex rounded-full bg-[#c0d0d8] cursor-pointer w-10 h-10 items-center justify-center text-2xl text-white">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ContactCard;
