import React from "react";
import Navbar from "../components/Navbar";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import { Button, Card, CardContent, Typography } from '@mui/material';


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
      <div className="flex justify-center bg-gray-800 items-center min-h-screen  px-6 lg:px-0" id="about" smooth={true}
        duration={1000}  >
        <motion.div
          className="border bg-gray-900 flex flex-col justify-center items-center 
            p-6 rounded-2xl w-full md:w-[70%] lg:w-[50%]  shadow-2xl 
            transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <motion.h1
            className="text-4xl font-semibold text-violet-700 mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-lg text-white text-center leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Highly skilled React Developer with a strong track record of building dynamic, high-performance web applications. Proficient in React.js and modern JavaScript (ES6+), with deep expertise in state management, API integrations, and component-based architecture. Experienced in crafting responsive, accessible, and visually appealing user interfaces using Tailwind CSS, with a strong emphasis on performance and user experience. Skilled in implementing Framer Motion for smooth, modern animations that elevate UI interactions and engagement.


          </motion.p>
        </motion.div>
      </div>

      <section id="experience" className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-violet-700 mb-10">Experience</h2>

          <div className="bg-gray-900 shadow-md border border-violet-700 rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-semibold text-white">ReactJs Developer </h3>
              <span className="text-sm text-white">Dec 2024 - Present</span>
            </div>
            <p className="text-white italic mb-2">Regent Info Soutions - Coimbatore</p>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              {/* Project 1 */}
              <div className="flex-1">
                <p className="text-xl text-white mb-2 underline-offset-8 underline"> Admin Panel Development</p>
                <ul className="  text-white space-y-1">
                  <li>Developed and Managed: Created and maintained an Admin Panel using React.js for efficient data management and user control.</li>
                  <li>State Management: Utilized useState and useEffect hooks for optimal state and lifecycle management..</li>
                  <li>API Integrations: Integrated third-party APIs for seamless data fetching and user interaction..</li>
                  <li>Responsive Design: Designed a user-friendly, responsive UI with Tailwind CSS and Material-UI, ensuring accessibility on all devices..</li>
                </ul>
              </div>
              <div className="md:block hidden w-px bg-gray-300 h-48 " />

              {/* Project 2 */}
              <div className="flex-1">
                <p className="text-xl text-white mb-2 underline underline-offset-8"> Admin Panel Development</p>
                <ul className="  text-white space-y-1">
                  <li>Built and maintained scalable web applications using React and Node.js.</li>
                  <li>Integrated third-party APIs and improved system performance by 25%.</li>
                  <li>Led code reviews and mentored 2 junior developers.</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="bg-gray-900 border shadow-md rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-semibold text-gray-700">Intern - Web Developer</h3>
              <span className="text-sm text-gray-500">Jun 2022 - Dec 2022</span>
            </div>
            <p className="text-gray-600 italic mb-2">ABC Tech, Bangalore</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Assisted in frontend development using HTML, CSS, and JavaScript.</li>
              <li>Contributed to UI/UX improvements and bug fixing.</li>
            </ul>
          </div>

        </div>
      </section>


    </div>
  );
};

export default Home;
