import React from "react";
import Navbar from "../components/Navbar";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col-reverse bg-gray-900 lg:flex-row items-center justify-evenly min-h-screen px-8 lg:px-24">
        <motion.div
          className="flex flex-col space-y-4 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            className="text-3xl text-purple-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.p 
            className="text-5xl font-bold text-purple-900"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hariharan
          </motion.p>

          <motion.p 
            className="text-2xl text-amber-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            React Developer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://www.inmakes.com/assets/img/services-image/2.png"
            alt="React Developer"
            className="w-[90%] md:w-[34rem] h-auto "
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Summary Section */}
      <div className="flex justify-center bg-gray-800 items-center min-h-screen  px-6 lg:px-0" id="about"             smooth={true} 
            duration={1000}  >
        <motion.div
          className="border border-gray-300 flex flex-col justify-center items-center 
            p-6 rounded-2xl w-full md:w-[70%] lg:w-[50%] bg-white shadow-2xl 
            transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <motion.h1
            className="text-4xl font-semibold text-black mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Summary
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 text-center leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugit ex officiis,
            reprehenderit quidem laudantium illum, similique recusandae animi nostrum vero reiciendis
            blanditiis assumenda saepe. Reiciendis perspiciatis illo pariatur libero delectus.
            Numquam odio, maiores, architecto quaerat consequuntur tempore quia error eos,
            consequatur possimus dolorum libero voluptatum veritatis ad magni!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
