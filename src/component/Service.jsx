import React from "react";
import serviceData from "../data/ServiceData";

function Service() {
  return (
    <>
      <div className="p-0 lg:p-20">
        <div className="p-15 text-center ">
          <h1 className="text-xl lg:text-2xl">Services</h1>
          <h1 className="text-4xl lg:text-[6vw]">What I Offer</h1>
        </div>
        <div className="max-w-[80%] flex justify-between mx-auto flex-wrap gap-6">
          {serviceData.map(({ id, image, heading, price, text }) => (
            <div
              key={id}
              className="relative h-[450px] p-10 bg-[#F8F8F8] text-center rounded-xl shadow-md flex flex-col justify-between 
                 w-full sm:w-[48%] lg:w-[30%]"
            >
              <div>
                <div className="flex justify-center mb-3">
                  <img src={image} alt={heading} className="h-30" />
                </div>
                <h1 className="textHeading text-3xl mb-15 ">{heading}</h1>
                <p className="mb-2">{text}</p>
                <h1 className="mb-3 text-2xl font-bold">{price}</h1>
              </div>

              {/* Button fixed at bottom center */}
              <div className="flex justify-center">
                <a
                  href="#"
                  className="py-3 px-8 bg-[#E9E1D9] hover:bg-[#d6cbbf] transition rounded-lg"
                >
                  More Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
