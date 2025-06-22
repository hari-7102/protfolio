import React  from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

import { Button, Card, CardContent, Typography } from '@mui/material';

import { AiFillGithub } from "react-icons/ai";

import { FaGithub } from "react-icons/fa6";

import { SlCallIn } from "react-icons/sl";

import { GoMail } from "react-icons/go";


import { FaLinkedin } from "react-icons/fa";
import ScrollToTop from "../components/ScrolltoTop";

const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  // Collect form data
  const formData = new FormData(event.target);
  formData.append("access_key", "34f49ee1-e777-46d3-8408-63fe17bf2760");

  // Convert form data to JSON
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const res = await response.json();

    if (res.success) {
      console.log("Success:", res);
      alert("Form submitted successfully");

      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert("Form submission failed. Please try again.");
      console.error("Error response:", res);
    }
  } catch (error) {
    alert("An error occurred. Please try again.");
    console.error("Submission error:", error);
  }
};

        

          // Clear the form fields


  return (  
    
    <div className="bg-gray-950">
      
      <Navbar />

      {/* Home Section */}
      <div className="flex flex-col-reverse bg-gray-950 lg:flex-row items-center justify-center lg:justify-evenly min-h-screen px-8 lg:px-24">
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
          <div className="flex items-center lg:justify-start justify-center gap- text-3xl cursor-pointer">
      {/* GitHub Icon with Hover Text */}
      <div className="relative group">
      <a
        href="https://github.com/hari-7102"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <FaGithub className="w-12 text-white" />
        <span className="absolute left-1/2 -translate-x-1/2 mt-14 text-sm text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
          GitHub
        </span>
      </a>
      </div>

      {/* LinkedIn Icon with Hover Text */}
      <div className="relative group">
      <a
        href="https://www.linkedin.com/in/hariharan-s-7b3298271/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center"
      >
        <FaLinkedin className="w-12  text-white" />
        <span className="absolute left-1/2 -translate-x-1/2 mt-14 text-sm text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
          LinkedIn
        </span>
        </a>
      </div>
      <div>
        <a href="/Hari-React.pdf">
        <span className="text-white text-lg font-serif ml-3">Download CV</span>
        </a>
      </div>
    </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}  
        >
<motion.img
  src="https://www.inmakes.com/assets/img/services-image/2.png"
  alt="React Developer"
  className="hidden md:block w-[34rem] h-auto"
  whileHover={{ scale: 1.1, rotate: 3 }}
  transition={{ duration: 0.5 }}
/>


        </motion.div>
      </div>

      {/* About Section */}
      <div className="flex justify-center bg-gray-950  items-center min-h-screen  px-6 lg:px-0" id="about" 
         >
       <motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeInOut", delayChildren: 0.2, staggerChildren: 0.2 }}
  className="border border-violet-800 bg-gray-950 flex flex-col justify-center items-center 
    p-6 rounded-2xl w-full md:w-[70%] lg:w-[50%] shadow-[0px_0px_26px_-12px_#ad62f0]  
    transition-transform duration-300 hover:scale-105"
>
  <motion.h1
    className="text-4xl font-semibold text-violet-700 mb-4 text-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    About Me
  </motion.h1>

  <motion.p
    className="text-lg text-white text-center leading-relaxed px-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    Highly skilled React Developer with a strong track record of building dynamic, high-performance web applications. Proficient in React.js and modern JavaScript (ES6+), with deep expertise in state management, API integrations, and component-based architecture. Experienced in crafting responsive, accessible, and visually appealing user interfaces using Tailwind CSS, with a strong emphasis on performance and user experience. Skilled in implementing Framer Motion for smooth, modern animations that elevate UI interactions and engagement.
  </motion.p>
</motion.div>

      </div>
        {/* Skills */}
     <section id="skills" className="w-full bg-gray-950 py-24 min-h-screen text-gray-200">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl font-bold text-center text-violet-500 mb-28">Technical Skills</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {/* Skill Card Component */}
      {[
        {
          title: "Frontend",
          skills: ["HTML5", "JavaScript ES7", "Tailwind CSS", "React.js" , "Framer Motion"]
        },
        {
          title: "Backend",
          skills: ["Python", "Django", "REST API", "Express.js"]
        },
        {
          title: "Database",
          skills: ["MySQL", "MongoDB"]
        },
        {
          title: "Tools",
          skills: ["Git", "GitHub", "VS Code", "Vercel"]
        }
      ].map((category, index) => (
        <motion.div
          key={index}

                          
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4, delay: index * 0.3 }}
                 viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-950 border border-violet-800 rounded-2xl p-6 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-violet-800/50"
        >
          <h3 className="text-2xl font-semibold text-violet-400 mb-6 text-center">
            {category.title}
          </h3> 
          <ul className="space-y-3">
            {category.skills.map((skill, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-violet-800 hover:text-white transition"
              >
                <span className="w-2 h-2 bg-violet-500 rounded-full" />
                <span className="text-sm font-medium">{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>






        {/* Experience */}
      <section id="experience" className="bg-gray-950 py-24">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-center text-violet-700 mb-10">Experience</h2>

          <motion.div 
              initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4}}
                 viewport={{ once: true, amount: 0.2 }}

          className="bg-gray-950 border border-violet-700 rounded-2xl p-6 mb-18 shadow-[0px_0px_26px_-12px_#ad62f0]                 ">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-semibold text-violet-800">ReactJs Developer </h3>
              <span className="text-sm text-white">Dec 2024 - Present</span>
            </div>
            <p className="text-white italic mb-2">Regent Info Soutions - Coimbatore</p>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              {/* Project 1 */}
              <div className="flex-1">
                {/* <p className="text-xl text-white mb-2 underline-offset-8 underline"> Admin Panel Development</p> */}
                <ul className="list-disc mx-7  text-gray-300 space-y-1">
                  <li>Developed Scalable Web Applications: Built and optimized user interfaces using React.js, enhancing performance and maintainability across multiple modules..</li>
                  <li>State & Lifecycle Management: Implemented advanced React patterns using useState, useEffect, and Context API to handle complex UI logic and asynchronous data flows</li>
                  <li>UI/UX Implementation: Collaborated with design teams to build responsive, visually appealing interfaces using Tailwind CSS and Material-UI, improving user engagement.</li>
                  {/* <li>Responsive Design: Designed a user-friendly, responsive UI with Tailwind CSS and Material-UI, ensuring accessibility on all devices..</li>
                  <li>Optimized Performance: Focused on improving performance and scalability of the application for better user experience.</li> */}
                </ul>
              </div>
              {/* <div className="md:block hidden w-px bg-gray-300 h-48 " /> */}

              {/* Project 2 */}
              {/* <div className="flex-1">
                <p className="text-xl text-white mb-2 underline underline-offset-8"> Admin Panel Development</p>
                <ul className="  text-white space-y-1">
                  <li>Built and maintained scalable web applications using React and Node.js.</li>
                  <li>Integrated third-party APIs and improved system performance by 25%.</li>
                  <li>Led code reviews and mentored 2 junior developers.</li>
                </ul>
              </div> */}
            </div>

          </motion.div>

          <motion.div 
                      initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
                 viewport={{ once: true, amount: 0.2 }}

          className="bg-gray-950 border border-violet-900     shadow-[0px_0px_26px_-12px_#ad62f0]        rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-semibold text-violet-800">Python Full Stack Developer Intern</h3>
              <span className="text-sm text-gray-200">Aug 2024 - Nov 2024</span>
            </div>
            <p className="text-white italic mb-2">Inmakes Infotech - Chennai</p>
            <ul className="list-disc mx-7 text-gray-300 space-y-1">
              <li>Gained hands-on experience in full-stack development using Python, MySQL, and Django for backend development.</li>
              <li>Built and tested dynamic web applications with CRUD functionality, integrated RESTful APIs, and implemented server-side logic.</li>
              <li>Learned and applied frontend tools like HTML, CSS, JavaScriptand Reactjs enhancing UI/UX responsiveness and interactivity.</li>
              <li>Collaborated in a team environment, participated in code reviews, and used Git for version control.</li>
            </ul>
          </motion.div>

         

        </div>
      </section>

      {/* Project */}
      <section id="project" className="bg-gray-950 py-12">
  <div className="max-w-6xl mx-auto px-4 mt-10">
    <h2 className="text-4xl font-bold text-center text-violet-800 mb-10">Projects</h2>

    {/* Project Card */} 
    <motion.div 
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4}}
                 viewport={{ once: true, amount: 0.2 }}
          
    className="bg-gray-950 border border-violet-900 rounded-xl shadow-[0px_0px_26px_-12px_#ad62f0]       p-6 mb-16">
      <h3 className="text-2xl font-semibold text-gray-300 mb-2">Admin Panel Development</h3>
      <ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">
  <li>Developed and managed a robust Admin Panel using <strong className="text-violet-800">React.js</strong>, enhancing data management and user access control.</li>
  <li>Implemented efficient component logic with <strong className="text-violet-800">useState</strong> and <strong className="text-violet-800">useEffect</strong> for responsive and reactive data flow.</li>
  <li>Integrated secure <strong className="text-violet-800">REST APIs</strong> to enable real-time communication with backend systems.</li>
  <li>Designed a fully responsive, intuitive UI using <strong className="text-violet-800">Tailwind CSS</strong> and <strong>Material-UI</strong> to ensure cross-device compatibility.</li>
  <li>Ensured a seamless user experience with clean code structure and reusable UI components.</li>
</ul>

      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">React.js</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">HTML</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Javascript ES7</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Framer Motion</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">REST API</span>
      </div>
      {/* <a
        href="#"
        className="text-violet-700 hover:underline font-medium"
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Project →
      </a> */}
    </motion.div>
    <motion.div 
        initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8}}
                 viewport={{ once: true, amount: 0.2 }}

    className="bg-gray-950 border border-violet-900 rounded-xl  shadow-[0px_0px_26px_-12px_#ad62f0]            p-6 mb-16">
      <h3 className="text-2xl font-semibold text-gray-300 mb-2">Static Website Development</h3>
      <ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">
  <li>Developed and integrated About and Contact pages in the Products Project using <strong className="text-violet-800">React.js</strong>, focusing on modular design and user engagement.</li>
  <li>Implemented clean, reusable components and managed form inputs using <strong className="text-violet-800">useState</strong> for interactive user communication.</li>
  <li>Utilized <strong className="text-violet-800">useEffect</strong> to handle side effects and enhance component responsiveness.</li>
  <li>Applied responsive styling with <strong className="text-violet-800">Tailwind CSS</strong> to ensure mobile-friendly layouts and consistent visual branding.</li>
  <li>Enhanced overall user experience through a clean codebase and smooth page navigation..</li>
</ul>

      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-violet-100 border border-violet-800 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">React.js</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">HTML</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Javascript ES7</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Framer Motion</span>
      </div>
      {/* <a
        href="#"
        className="text-violet-700 hover:underline font-medium"
        target="_blank" 
        rel="noopener noreferrer"
        data-tooltip="Company Project"
      >
        View Project →
      </a> */}
    </motion.div>

    <h2 className="text-4xl font-bold text-center text-violet-800 mb-10">Personal Projects</h2>


     <motion.div 
        initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3}}
                 viewport={{ once: true, amount: 0.2 }}

    className="bg-gray-950 border border-violet-900 rounded-xl   shadow-[0px_0px_26px_-12px_#ad62f0]          p-6 mb-16">
      <h3 className="text-2xl font-semibold text-gray-300 mb-2">Replica of Rise Website </h3>
      <ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">
  {/* <li>
    Developed and integrated About and Contact pages in the Products Project using
    <strong className="text-violet-800"> React.js</strong>, focusing on modular design and user engagement.
  </li>
  <li>
    Implemented clean, reusable components and managed form inputs using
    <strong className="text-violet-800"> useState</strong> for interactive user communication.
  </li>
  <li>
    Utilized <strong className="text-violet-800">useEffect</strong> to handle side effects and enhance component responsiveness.
  </li>
  <li>
    Applied responsive styling with <strong className="text-violet-800">Tailwind CSS</strong> to ensure mobile-friendly layouts and consistent visual branding.
  </li>
  <li>
    Enhanced overall user experience through a clean codebase and smooth page navigation.
  </li> */}
</ul>

<ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">
  <li>
    Built a responsive replica of the Rise website using
    <strong className="text-violet-800"> React.js</strong>,
    <strong className="text-violet-800"> HTML</strong>,
    <strong className="text-violet-800"> Tailwind CSS</strong>, and
    <strong className="text-violet-800"> JavaScript</strong> to strengthen frontend development skills.
  </li>
  <li>
    Focused on creating a <strong className="text-violet-800">mobile-first</strong>, fully responsive layout ensuring accessibility across all screen sizes.
  </li>
  <li>
    Developed <strong className="text-violet-800">reusable React components</strong> to improve performance and reduce loading times.
  </li>
  <li>
    Integrated <strong className="text-violet-800">Framer Motion</strong> to implement smooth animations and elevate the overall user experience.
  </li>
  <li>
    Emphasized clean code structure and UI consistency throughout the project.
  </li>
</ul>


      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">React.js</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">HTML</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Javascript ES7</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Framer Motion</span>
      </div>
    <a
  href="https://rise-web-one.vercel.app/"
  className="text-violet-700 hover:underline font-medium"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project →
</a>
    </motion.div>
     <motion.div 
        initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6}}
                 viewport={{ once: true, amount: 0.2 }}

    className="bg-gray-950 border border-violet-900 rounded-xl   shadow-[0px_0px_26px_-12px_#ad62f0]          p-6 mb-16">
      <h3 className="text-2xl font-semibold text-gray-300 mb-2">WorldSky Website </h3>
      <ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">

</ul>

<ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">
  <li>
    Built a responsive website of WorldSky using 
    <strong className="text-violet-800"> React.js</strong>, 
    <strong className="text-violet-800"> HTML</strong>, 
    <strong className="text-violet-800"> Tailwind CSS</strong>, and 
    <strong className="text-violet-800"> JavaScript</strong> to enhance frontend development proficiency.
  </li>
  <li>
    Designed a <strong className="text-violet-800">mobile-first</strong> layout with responsive behavior to ensure seamless user experience across all devices.
  </li>
  <li>
    Utilized <strong className="text-violet-800">CSS Grid</strong> and <strong className="text-violet-800">Tailwind utilities</strong> to create structured and scalable layouts.
  </li>
    <li>
    Developed <strong className="text-violet-800">reusable React components</strong> to improve performance and reduce loading times.
  </li>
  <li>
    Integrated <strong className="text-violet-800">Framer Motion</strong> to apply <strong className="text-violet-800">Advanced Animations</strong>, enhancing interactivity and UI appeal.
  </li>
  <li>
    Focused on improving skill sets by emphasizing clean UI design, reusable components, and smooth animations throughout the project.
  </li>
</ul>



      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">React.js</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">HTML</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">CSS</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Javascript ES7</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Framer Motion</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Advanced Animation</span>
      </div>
    <a
  href="https://hari-worldsky.vercel.app/"
  className="text-violet-700 hover:underline font-medium"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project →
</a>
    </motion.div>
    <motion.div 
        initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.9}}
                 viewport={{ once: true, amount: 0.2 }}

    className="bg-gray-950 border border-violet-900 rounded-xl   shadow-[0px_0px_26px_-12px_#ad62f0]          p-6 mb-6">
      <h3 className="text-2xl font-semibold text-gray-300 mb-2">Nexcent Website </h3>
      <ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">
  {/* <li>
    Developed and integrated About and Contact pages in the Products Project using
    <strong className="text-violet-800"> React.js</strong>, focusing on modular design and user engagement.
  </li>
  <li>
    Implemented clean, reusable components and managed form inputs using
    <strong className="text-violet-800"> useState</strong> for interactive user communication.
  </li>
  <li>
    Utilized <strong className="text-violet-800">useEffect</strong> to handle side effects and enhance component responsiveness.
  </li>
  <li>
    Applied responsive styling with <strong className="text-violet-800">Tailwind CSS</strong> to ensure mobile-friendly layouts and consistent visual branding.
  </li>
  <li>
    Enhanced overall user experience through a clean codebase and smooth page navigation.
  </li> */}
</ul>

<ul className="list-disc mx-8 text-gray-300 space-y-2 mb-4">
  <li>
    Built a responsive replica of the Nexcent website using
    <strong className="text-violet-800"> HTML</strong>,
    <strong className="text-violet-800"> Tailwind CSS</strong>,
    <strong className="text-violet-800"> JavaScript</strong>, and
    <strong className="text-violet-800"> Framer Motion</strong> to enhance frontend development skills.
  </li>
  <li>
    Implemented a <strong className="text-violet-800">mobile-first design</strong> approach to ensure seamless user experience across all device sizes.
  </li>
  <li>
    Focused on <strong className="text-violet-800">clean UI structure</strong> and consistent design patterns to maintain visual coherence throughout the project.
  </li>
  <li>
    Utilized <strong className="text-violet-800">Framer Motion</strong> to create smooth, engaging animations and improve overall interactivity.
  </li>
  <li>
    Prioritized <strong className="text-violet-800">responsive layout</strong>, code reusability, and performance optimization across the frontend.
  </li>
</ul>


      <div className="flex flex-wrap gap-3 mb-4">
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">React.js</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">HTML</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Javascript ES7</span>
        <span className="bg-violet-100 text-violet-800 text-sm font-medium px-3 py-1 rounded-full">Framer Motion</span>
      </div>
      <a
        href="https://lanching-page.vercel.app/"
        className="text-violet-700 hover:underline font-medium"
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </motion.div>
   

  </div>
</section>

{/* Contact  */}
<div id="contact" className="min-h-screen pt-12 pb-16 bg-gray-950 flex flex-col items-center justify-end">

      <motion.div
        className="bg-gray-950 rounded-2xl  p-8 border   shadow-[0px_0px_26px_-12px_#ad62f0]   border-violet-700 max-w-lg w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-violet-800">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-700 outline-none text-white"
            />

          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-700 outline-none text-white"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md duration-300 focus:ring-2 focus:ring-violet-700 outline-none text-white"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded-md font-semibold hover:bg-violet-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Send Message
          </motion.button>
        </form>

      </motion.div>

      
        <div className="flex items-center space-x-2 mt-11 text-gray-300">
  <SlCallIn className="text-violet-800" />
 <a href="tel:+91 6379749009" className="text-base font-medium hover:underline" data-tooltip="Phone: +91 63797 49009"><span>+91 6383037102</span></a>
</div>

  <div className="flex items-center space-x-2 mt-6 text-gray-300">
    <GoMail className="text-violet-800" />
    <a
      href="mailto:hariharanbvn28@gmail.com"
      className="text-base font-medium hover:underline"
    >
      hariharanbvn28@gmail.com
    </a>
  </div>

  <p className="text-purple-900 text-lg items-center mt-8">
    © 2025 Hariharan S . All rights reserved.
  </p>
    </div>

      
    
    </div>
  );
};

export default Home;
