import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const pages = ["Home", "About", "Projects", "Skills", "Contact"];

  

  const navigate = useNavigate('')
  
  // const navbar = [
   
  //   // { name: 'About', link: '#/about' },
  //   { name: 'Skills', link: '#skills' },
  //   { name: 'Experience', link: '#experience' }, 
  //   { name: 'Project', link: '#project' },
  //   { name: 'Resume', link: '/resume' },
  //   { name: 'Certificate', link: '/certificate' },
  //   { name: 'Contact ', link: '/contact' },
  // ];

  return (
    <nav className="fixed bg-yellow-500 text-base w-full py-1.5">
      <div className='flex justify-between items-center'>
        <p className='text-black text-4xl px-9  cursor-pointer'   onClick={() =>navigate('/')}>Hariharan </p>
      <ul className="flex justify-end items-center gap-9 mx-14 py-2.5 text-white ">
        {/* {navbar.map((item, index) => (
          <li key={index} className="">
            <Link
              to={item.link}
              className="bg-black px-3 py-1 rounded-lg my-2  "
            >
              {item.name}
            </Link>
          </li>
        ))} */}
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Project</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
