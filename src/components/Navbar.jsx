import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger and close icons
import { motion } from "framer-motion";


const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const link = ["#about" , "#skills" , "#experience" , "#project" , ""]

  return (
    <nav className="fixed bg-gray-950 top-0 left-0 w-full  text-base z-50 ">
      <div className="flex justify-between items-center px-6 py-3">
        <p
          className="text-purple-800 text-3xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Hariharan
        </p>

        {/* Hamburger Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="text-white cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="text-white cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-lg">
          <li><a href="#about" className="hover:text-violet-800">About</a></li>
          <li><a href="#skills" className="hover:text-violet-800">Skills</a></li>
          <li><a href="#experience" className="hover:text-violet-800">Experience</a></li>
          <li><a href="#project" className="hover:text-violet-800">Project</a></li>
          <li><a href="#contact" className="hover:text-violet-800">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center h-screen gap-12 bg-gray-950 py-4 mt-20 md:hidden text-white text-lg">
          <motion.li transition={{ duration: 0.5 , delay : 0.8 }} ><a href="#about" onClick={toggleMenu}>About</a></motion.li>
          <motion.li transition={{ duration: 0.5 , delay : 0.6 }}><a href="#skills" onClick={toggleMenu}>Skills</a></motion.li>
          <motion.li transition={{ duration: 0.5 , delay : 0.4 }}><a href="#experience" onClick={toggleMenu}>Experience</a></motion.li>
          <motion.li transition={{ duration: 0.5 , delay : 0.2 }}><a href="#project" onClick={toggleMenu}>Project</a></motion.li>
          <motion.li transition={{ duration: 0.5 , delay : 0.2 }}><a href="#contact" onClick={toggleMenu}>Contact</a></motion.li>
        </motion.ul>
      )}


      <hr className="my-2 mx-28 border-t-2 border-gray-800" />

    </nav>
  );
};

export default Navbar;
