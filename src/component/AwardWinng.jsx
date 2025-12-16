import React from "react";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "./gsap/ScrollFloat";

function AwardWinng() {
  return (
    <>
      <div className="py-26">
        <div className="flex flex-col justify-center items-center ">
          <img src="src/img/home/image2.png" alt="" className="h-25 pb-5" />
          <h1 className="uppercase text-[#BBA085] tracking-widest pb-10">
            AWARD WINNING PHOTOGRAPHY
          </h1>
          <ScrollFloat>
            Showcasing your big day in a <br /> and unforgettable way.
          </ScrollFloat>
        </div>
      </div>
    </>
  );
}

export default AwardWinng;
