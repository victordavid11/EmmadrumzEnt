import React from "react";
import drum from "../assets/drum.png";

const About = () => {
  return (
    <div className="bg-black pt-20">
      <div className="text-white font-bold text-3xl text-center font-serif  ">
        About Us
      </div>
      <span className="flex justify-center lg:justify-start pt-16">
        <p className="my-2 max-w-xl pl-10 py-6 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam
          eum eveniet reiciendis harum odit aperiam dolores eaque obcaecati
          magnam, voluptas ex, corrupti et. Voluptatum quae esse, omnis
          asperiores ratione assumenda alias obcaecati! Rem officia provident
          suscipit quo culpa voluptatum laudantium tempore delectus sint
          excepturi, fugiat, in, at minima iste quia unde accusantium dolores!
          Nemo, ea libero. Quod, soluta adipisci repellendus et corrupti nostrum
          recusandae unde nam alias veritatis at.
        </p>
        <img className="h-full mx-auto" src={drum} alt="" />
      </span>
    </div>
  );
};

export default About;
