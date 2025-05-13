import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger and close icons

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed bg-gray-700 top-0 left-0 w-full  text-base z-50 ">
      <div className="flex justify-between items-center px-6 py-3">
        <p
          className="text-violet-900 text-3xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Hariharan
        </p>

        {/* Hamburger Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="text-black cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="text-black cursor-pointer" onClick={toggleMenu} />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-lg">
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#skills" className="hover:text-black">Skills</a></li>
          <li><a href="#experience" className="hover:text-black">Experience</a></li>
          <li><a href="#project" className="hover:text-black">Project</a></li>
          <li><a href="#contact" className="hover:text-black">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center h-screen gap-4 bg-yellow-500 py-4 md:hidden text-white text-lg">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#project" onClick={toggleMenu}>Project</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
