import React from "react";
import emmavid from '../assets/1231.mp4';
import wizzyvid from '../assets/1232.mp4';
import { useState, useEffect } from "react";
import emmavid2 from '../assets/1229m.mp4';
import wizzyvid2 from '../assets/0104.mp4';
import About  from "./About";
import Artists from "./Artists";
import Services from "./Services";
import Contact from "./Contact";
import Event from "./Events";
import Navbar from "./Navbar";



const slides = [emmavid, wizzyvid]

const mobileSlide = [emmavid2, wizzyvid2]


const Home = () => {

    const [current, setCurrent] = useState(0);
    const [theMobile, setTheMobile] = useState(window.innerWidth <= 1024);


    useEffect(() => {
      const handleResize = () => {
        setTheMobile(window.innerWidth <= 1024);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    },[]);

    const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const activeSlides = theMobile ? mobileSlide : slides; 
    

  return (
    <>
      <div className="relative w-full  h-screen   overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {activeSlides.map((slide, index) => (
            <video
              key={index}
              autoPlay
              loop
              muted
              playsInline
              className="w-full flex-shrink-0"
            >
              <source src={slide} type="video/mp4" />
            </video>
          ))}
        </div>


       {/* slide button  */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full"
        >  
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full"
        >
          ❯
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* <About/>
      <Artists/> */}
    </>
  );
};

export default Home; 
