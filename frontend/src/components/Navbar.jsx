import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex  justify-between items-center h-20 py-10 px-20 z-10 fixed backdrop-blur-lg bg-transparent w-full text-white">
        <img className="w-40 h-40" src={logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <NavLink to="/">
            <li className="after:content-[''] after:block after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
              HOME
            </li>
          </NavLink>

          {["ABOUT", "ARTISTS",'MIXTAPES', "SERVICES", "EVENTS", "CONTACT"].map(
            (item, index) => (
              <NavLink key={index} to={`/${item.toLowerCase()}`}>
                <li className="after:content-[''] after:block after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  {item}
                </li>
              </NavLink>
            )
          )}
        </ul>

        {/* Hamburger Icon (Mobile Only) */}
        <div
          className="md:hidden cursor-pointer z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "" : "☰"}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
        >
          <div className="flex justify-end p-8">
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <ul className="flex flex-col items-center gap-10 pt-20 bg-black bg-opacity-90 h-screen">
            <NavLink to="/">
              <li className="text-2xl">HOME</li>
            </NavLink>

            {["ABOUT", "ARTISTS", "SERVICES", "EVENTS", "CONTACT"].map(
              (item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  <li className="text-2xl">{item}</li>
                </NavLink>
              )
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
