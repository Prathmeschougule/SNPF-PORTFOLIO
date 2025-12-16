import React, { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Showcasing your Big Day in a Memorable & Unforgettable way.",
    name: "Sarah & Luke",
    image: "/testomonial/image.png",
  },
  {
    id: 2,
    quote: "Turning your dreams into timeless visual stories.",
    name: "Emma & Ryan",
    image: "public/portfolio/image2.png",
  },
  {
    id: 3,
    quote: "Capturing emotions that speak louder than words.",
    name: "Sophia & John",
    image: "public/portfolio/image1.png",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "right" ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction === "right" ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <div className="my-20 px-4">
      <h1 className="textHeading text-4xl md:text-5xl text-center py-10 font-semibold">
        Client Testimonials
      </h1>

      <div className="bg-[#F8F8F8] flex justify-center items-center gap-3 md:gap-5 flex-wrap md:flex-nowrap mx-auto max-w-6xl rounded-2xl shadow-sm p-5 md:p-10">
        {/* Left Arrow */}
        <div className="text-4xl md:text-5xl text-[#E9E1D9] flex justify-center items-center">
          <FaCircleArrowLeft
            className="cursor-pointer hover:text-amber-600 transition"
            onClick={prevSlide}
          />
        </div>

        {/* Animated Testimonial Box */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col md:flex-row justify-center items-center gap-5"
          >
            {/* Left Box - Text */}
            <div className="box1 h-[320px] sm:h-[350px] md:h-[400px] w-[90vw] sm:w-[350px] md:w-[400px] border border-amber-600 flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-md">
              <h1 className="text-7xl md:text-9xl font-bold text-[#E9E1D9] leading-none mb-2">
                "
              </h1>
              <p className="text-lg sm:text-xl text-center px-2">
                {testimonials[index].quote}
              </p>
              <h1 className="uppercase text-xl md:text-2xl p-3 font-bold text-amber-700">
                {testimonials[index].name}
              </h1>
            </div>

            {/* Right Box - Image */}
            <div className="box2 h-[320px] sm:h-[350px] md:h-[400px] w-[90vw] sm:w-[350px] md:w-[400px] bg-amber-600 rounded-2xl overflow-hidden shadow-md">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Arrow */}
        <div className="text-4xl md:text-5xl text-[#E9E1D9] flex justify-center items-center">
          <FaCircleArrowRight
            className="cursor-pointer hover:text-amber-600 transition"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
