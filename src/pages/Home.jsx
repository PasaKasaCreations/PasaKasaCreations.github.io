import React from "react";

function Home() {
  return (
    <div className="bg-[#37517E] h-screen px-5 flex flex-col gap-7 pt-24">
      <div className="animate-pulse">
        <img
          src="	https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
          alt="Home"
        />
      </div>
      <div className="text-white font-Poppins">
        <h3 className="font-bold text-2xl">
          Better Solutions For Your Business
        </h3>
        <p className="text-lg text-gray-300">
          We are team of talented designers making websites with Bootstrap
        </p>
      </div>
    </div>
  );
}

export default Home;
