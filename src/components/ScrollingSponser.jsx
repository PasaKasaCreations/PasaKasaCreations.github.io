import React from "react";
import scrollingSponser from "../data/scrollingSponserData";

function ScrollingSponser() {
  return (
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)] py-2">
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {scrollingSponser.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.imageLink} alt="sponser" className="w-28"></img>
            </li>
          );
        })}
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {scrollingSponser.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.imageLink} alt="sponser" className="w-28"></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ScrollingSponser;
