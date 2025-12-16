import React from "react";

function WeddingDrems() {
  return (
    <>
      <div className="py-10">
        <h1 className="text-xl sm:text-2xl tracking-wide text-center py-10">
          HELPING COUPLES BRING TO LIFE <br className="hidden sm:block" /> THEIR
          WEDDING DREAMS
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 lg:gap-32">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-[5vw] font-bold text-[#BBA085]">
              12
            </h1>
            <p className="text-lg sm:text-xl">Years Experience</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-[5vw] font-bold text-[#BBA085]">
              10K
            </h1>
            <p className="text-lg sm:text-xl">Photos Delivered</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-[5vw] font-bold text-[#BBA085]">
              300
            </h1>
            <p className="text-lg sm:text-xl">Events Captured</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-[5vw] font-bold text-[#BBA085]">
              6
            </h1>
            <p className="text-lg sm:text-xl">Awards</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingDrems;
