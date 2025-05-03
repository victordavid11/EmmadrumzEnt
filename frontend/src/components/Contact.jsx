import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { BsEnvelopePaperFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="text-white pt-20 text-3xl text-center">Contact Us</div>
      <div className="flex flex-wrap justify-between pt-6 lg:px-28 ">
        <div>
          <ul className="text-white  mb-4">
            <li className="flex gap-3 items-center mb-4">
              <AiFillPhone className="text-gray-900 h-10 w-10" />
              <a href="tel:+1234567890" className="text-white">
                +1234567890
              </a>
            </li>
            <li className="flex gap-3 items-center mb-4">
              <BsEnvelopePaperFill className="text-gray-900 h-10 w-10" />
              <a
                href="Emmadrumzentertainment@gmail.com "
                className="text-white"
              >
                Emmadrumzentertainment@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <form className=" p-6 border-2 border-gray-900 rounded-lg shadow-md w-96 lg:w-5/12 ">
          <h2 className="text-white text-2xl mb-4">Get in Touch</h2>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full p-2 border-b-2 bg-transparent text-white outline-none focus:border-gray-500 "
              placeholder="Full Name"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border-b-2 bg-transparent text-white outline-none focus:border-gray-500"
              type="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border-b-2 bg-transparent text-white outline-none focus:border-gray-500"
              id="message"
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact