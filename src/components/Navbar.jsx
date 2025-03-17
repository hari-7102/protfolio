import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbar = [
   
    // { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'Experience', link: '/experience' }, 
    { name: 'Project', link: '/project' },
    { name: 'Resume', link: '/resume' },
    { name: 'Certificate', link: '/certificate' },
    { name: 'Contact ', link: '/contact' },
  ];

  return (
    <nav className=" bg-yellow-500 text-base py-1.5">
      <ul className="flex justify-end items-center gap-9 mx-14 py-2.5 text-white ">
        {navbar.map((item, index) => (
          <li key={index} className="">
            <Link
              to={item.link}
              className="bg-black px-3 py-1 rounded-lg my-2  "
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
