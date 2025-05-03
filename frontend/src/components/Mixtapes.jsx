import React from 'react'
import Data from '../Data'

const Mixtapes = () => {
  return (
    <div className=" pt-20 ">
      <h1 className="text-white text-3xl font-bold  text-center  "> Mixtapes</h1>
      <div className="flex flex-wrap justify-center">
        {Data.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div
              className="p-4 border-2 border-gray-400 hover:scale-105 overflow-hidden
             transition-transform duration-300 ease-in-out  rounded-lg"
            >
              <img
                className="w-full h-full object-cover rounded-lg text-white mb-3"
                src={item.img}
                alt="dd"
              />
              <a href={item.audio} className="text-white font-semibold border-2 border-gray-400 rounded p-1 px-4  text-lg mt-2">
                {item.desc}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mixtapes