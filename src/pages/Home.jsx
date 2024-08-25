import { React } from "react";
import ScrollingSponser from "../components/ScrollingSponser";

function Home() {
  return (
    <div id="home">
      <div className="bg-[#37517E] h-screen sm:h-[110vh] md:h-[120vh] px-5 sm:px-16 flex flex-col gap-7 pt-24 items-center justify-center md:pt-0 lg:flex-row lg:h-[100vh]">
        <div className="animate-pulse lg:order-2">
          <img
            src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
            alt="Home"
            className="w-[500px] md:w-[700px] lg:w-[700px]"
          />
        </div>
        <div className="text-white font-Poppins flex flex-col gap-2">
          <h3 className="font-bold text-2xl sm:text-5xl">
            Transform Imagination into Reality
          </h3>
          <p className="text-lg text-gray-300 md:text-xl">
            Explore innovative game development, AR, VR, and simulation
            solutions tailored to your needs
          </p>
        </div>
      </div>
      <ScrollingSponser />
    </div>
  );
}

export default Home;
