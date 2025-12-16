import React from "react";

export default function Footer() {
  return (
    <div className="w-full">
      
      {/* Top Navigation */}
      <div className="bg-white mt-20 flex justify-center">
        <div className="w-[90%] md:w-[80%] pt-5 mt-3">
          
          <div className="
            flex 
            flex-col 
            md:flex-row 
            justify-center 
            md:justify-between 
            items-center 
            gap-4 
            md:gap-0
          ">
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SERVICES</a>

            <a 
              href="" 
              className="text-4xl md:text-6xl font-bold text-[#B58B61]"
            >
              SNPF
            </a>

            <a href="">PORTFOLIO</a>
            <a href="">CONTACT</a>
            <a href="">BLOG</a>
          </div>

        </div>
      </div>

      {/* Description */}
      <div className="flex justify-center mt-8 px-4">
        <div className="w-full md:max-w-[40%] text-center">
          <h1 className="text-lg md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita incidunt saepe, blanditiis fuga distinctio
          </h1>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center mt-6">
        <div className="
          flex 
          flex-col 
          sm:flex-row 
          justify-center 
          items-center 
          gap-4 
          sm:gap-10
        ">
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">YouTube</a>
        </div>
      </div>

    </div>
  );
}
