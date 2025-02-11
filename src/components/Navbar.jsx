import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbar = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Project', link: '/project' },
    { name: 'Resume', link: '/resume' },
  ];

  return (
    <nav className="bg-gray-400 w-72 h-screen flex flex-col items-start px-10 py-32 shadow-lg">
      <ul className="w-full space-y-11">
        {navbar.map((item, index) => (
          <li key={index} className="w-full">
            <Link
              to={item.link}
              className="block text-black hover:text-gray-800 text-2xl font-semibold py-3 pl-4 rounded-md hover:bg-gray-300 transition duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
