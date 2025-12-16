import React from "react";

function Creative() {
  return (
    <>
      <div className="relative  md:relative lg:relative my-10  flex justify-start items-start bg-[#F8F8F8] ">
        <div className="greadient lg:w-[70%] lg:h-full ">
          <img src="/creative/WhatsApp Image 2025-11-29 at 21.39.18_fcf84994.jpg" alt="" className="object-fill" />
        </div>

        <div className=" absolute md:h-[300px] md:w-[400px] md:absolute md:bottom-[50px] md:right-[250px] lg:h-[500px] lg:w-[350px] bg-[#ffffffe0] text-center   flex justify-center lg:absolute lg:right-[300px] lg:top-[100px]  ">
          <div className="m-1 border border-amber-400 ">
            <div className="  flex justify-center items-center ">
              <img src="/creative/Enga.png" alt="" className="h-30 p-5" />
            </div>
            <h1 className="textHeading text-lg font-bold  md:text-xl lg:text-5xl mb-4 ">
              Creative, Passionate, Artistic
            </h1>
            <p className="text-[12px] md:text-xl lg:text-xl px-3">
             Aesthetics and creativity come naturally to our young photographers as they use artistic techniques and design principles to produce an unimaginable artistic piece of art.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creative;
