import React, { useState } from 'react';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';

export default function Home() {
  const slides = [home1, home2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const headings = ["Men Fashion", "Women Fashion"];

  return (
    <div>
      {/* Main Container */}
      <div
        className="relative w-full min-h-[80vh] mx-auto flex flex-col md:flex-row items-center  bg-center p-4 md:p-8"
        style={{
          backgroundImage: `url(${slides[currentIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
       <div className='flex items-center justify-center'>
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 bg-white text-gray-400 p-2 rounded-full hover:bg-gray-200 z-10"
            >
              ❮
            </button>

            <div className="flex justify-center pl-11 items-center gap-80">
              {/* Text Section */}
            <div className=" ">
              <h3 className="text-lg uppercase  text-gray-700">Welcome to Fashion</h3>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">{headings[currentIndex]}</h1>
              <a
                href="#"
                className="inline-block mt-4 bg-red-500 text-white px-6 py-2 md:px-10 md:py-3 border border-red-500 rounded-md hover:bg-white hover:text-black hover:border-red-500 transition-all duration-300"
              >
                Shop Now
              </a>
            </div>

            {/* Slideshow Section */}
            {/* <div className="" >
              <img
                src={slides[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className=" relative w-full min-h-[80vh] mx-auto flex flex-col md:flex-row items-center bg-no-repeat  bg-cover bg-center p-4 md:p-8" 
              />
            </div> */}
            

            </div>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 bg-white text-gray-400 p-2 rounded-full hover:bg-gray-200 z-10"
            >
              ❯
            </button>
       </div>
      </div>
    //  </div>
  );
}
