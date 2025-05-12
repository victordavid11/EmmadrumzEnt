import React from "react";
import emma from "../assets/emma.jpg";
import emma2 from "../assets/emma2.jpg";
import ogb from "../assets/ogb.jpg";
import ogb2 from "../assets/ogb2.jpg";
import sammy from "../assets/sammy.jpg";
import sammy2 from "../assets/sammy2.jpg";
import wizzy from "../assets/wizzy.jpg";
import wizzy2 from "../assets/wizzy2.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";  
import { motion } from "framer-motion";       



const Artists = () => {

  const iconVariants = (duration) => ({
    initial: { y: -5 },
    animate: {
      y: [5, -5],
      transition: {
        duration: duration,
        else: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <motion.div animate={{ x: 0 }} initial={{ x: 500 }} className="relative bg-black pt-20  ">
      <div className="text-white text-3xl font-bold text-center mb-4 ">
        Artists
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   ">
        <div className="  px-10 border-2 py-4 border-gray-400">
          <h2 className="text-white mb-5 ">EMMADRUMZ</h2>
          <p className="text-white text-start text-sm mb-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            animi dignissimos, ea assumenda officiis aliquid!
          </p>
          <div className="relative group cursor-pointer ">
            <img
              className=" mb-2 h-80 group-hover:opacity-0 transition-opacity duration-500 "
              src={emma2}
              alt=""
            />
            <img
              className=" top-0 left-0 absolute mb-2 h-80  opacity-0 group-hover:opacity-100 transition-opacity duration-500 "
              src={emma}
              alt=""
            />
          </div>
          <span className="flex gap-7 py-6">
            <motion.a
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaInstagram className="text-white text-3xl" />
            </motion.a>

            <motion.a
              variants={iconVariants(1.7)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaYoutube className="text-white text-3xl" />
            </motion.a>
            <motion.a
              variants={iconVariants(1.9)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaTiktok className="text-white text-3xl" />
            </motion.a>
            <motion.a
              variants={iconVariants(2.1)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaXTwitter className="text-white text-3xl" />
            </motion.a>

            <motion.a
              variants={iconVariants(2.3)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaFacebook className="text-white text-3xl" />
            </motion.a>
          </span>
        </div>
        <div className="  px-10 border-2 py-4 border-gray-400">
          <h2 className="text-white mb-5 ">WIZZYDRUMZ</h2>
          <p className="text-white text-start text-sm mb-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            molestiae aliquam in facilis porro ut.
          </p>
          <div className="relative group cursor-pointer ">
            <img
              className=" mb-2 h-80 group-hover:opacity-0 transition-opacity duration-500 "
              src={wizzy2}
              alt=""
            />
            <img
              className=" top-0 left-0 absolute mb-2 h-80  opacity-0 group-hover:opacity-100 transition-opacity duration-500 "
              src={wizzy}
              alt=""
            />
          </div>

          <span className="flex gap-7 py-6">
            <motion.a
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaInstagram className="text-white text-3xl" />
            </motion.a>

            <motion.a
              variants={iconVariants(1.7)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaYoutube className="text-white text-3xl" />
            </motion.a>
            <motion.a
              variants={iconVariants(1.9)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaTiktok className="text-white text-3xl" />
            </motion.a>
            <motion.a
              variants={iconVariants(2.1)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaXTwitter className="text-white text-3xl" />
            </motion.a>

            <motion.a
              variants={iconVariants(2.3)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaFacebook className="text-white text-3xl" />
            </motion.a>
          </span>
        </div>
        <div className="  px-10 border-2 py-4 border-gray-400">
          <h2 className="text-white mb-5 ">SAMMYDRUMS</h2>
          <p className="text-white text-start text-sm mb-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            veniam similique? Necessitatibus molestias vitae ab.
          </p>
          <div className="relative group cursor-pointer ">
            <img
              className=" mb-2 h-80 group-hover:opacity-0 transition-opacity duration-500 "
              src={sammy2}
              alt=""
            />
            <img
              className=" top-0 left-0 absolute mb-2 h-80  opacity-0 group-hover:opacity-100 transition-opacity duration-500 "
              src={sammy}
              alt=""
            />
            <span className="flex gap-7 py-6">
              <motion.a
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                href=""
              >
                <FaInstagram className="text-white text-3xl" />
              </motion.a>

              <motion.a
                variants={iconVariants(1.7)}
                initial="initial"
                animate="animate"
                href=""
              >
                <FaYoutube className="text-white text-3xl" />
              </motion.a>
              <motion.a
                variants={iconVariants(1.9)}
                initial="initial"
                animate="animate"
                href=""
              >
                <FaTiktok className="text-white text-3xl" />
              </motion.a>
              <motion.a
                variants={iconVariants(2.1)}
                initial="initial"
                animate="animate"
                href=""
              >
                <FaXTwitter className="text-white text-3xl" />
              </motion.a>

              <motion.a
                variants={iconVariants(2.3)}
                initial="initial"
                animate="animate"
                href=""
              >
                <FaFacebook className="text-white text-3xl" />
              </motion.a>
            </span>
          </div>
        </div>
        <div className="  px-10 border-2 py-4 border-gray-400">
          <h2 className="text-white mb-5 ">OGB</h2>
          <p className="text-white text-start text-sm mb-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ut
            eum vero veritatis distinctio quisquam.
          </p>
          <div className="relative group cursor-pointer ">
            <img
              className=" mb-2 h-80 group-hover:opacity-0 transition-opacity duration-500 "
              src={ogb2}
              alt=""
            />
            <img
              className=" top-0 left-0 absolute mb-2 h-80  opacity-0 group-hover:opacity-100 transition-opacity duration-500 "
              src={ogb}
              alt=""
            />
          </div>
          <span className="flex gap-7 py-6">
            <motion.a
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaInstagram className="text-white text-3xl" />
            </motion.a>

            <motion.a
              variants={iconVariants(1.7)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaYoutube className="text-white text-3xl" />
            </motion.a>
            <motion.a
              variants={iconVariants(1.9)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaTiktok className="text-white text-3xl" />
            </motion.a>
            <motion.a
              variants={iconVariants(2.1)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaXTwitter className="text-white text-3xl" />
            </motion.a>

            <motion.a
              variants={iconVariants(2.3)}
              initial="initial"
              animate="animate"
              href=""
            >
              <FaFacebook className="text-white text-3xl" />
            </motion.a>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Artists;
