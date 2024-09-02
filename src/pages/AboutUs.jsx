import React from "react";
import Heading from "../components/Heading";

function AboutUs() {
  return (
    <div className="flex flex-col items-center py-10 gap-12 px-5" id="about">
      <Heading heading={"About Us"} />
      <div>
        <div className="flex flex-col gap-10 sm:px-10 lg:flex-row">
          <div className="flex flex-col gap-5">
            <p>
              At PasaKasa Creations, we’re not just developers—we’re
              storytellers, innovators, and dreamers. Founded in 2023, our
              mission is to redefine the gaming landscape by blending
              cutting-edge technology with imaginative storytelling. Whether
              it’s creating immersive AR and VR experiences or developing
              complex simulations, we’re here to bring your vision to life.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:basis-2/3">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
