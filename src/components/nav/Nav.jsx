import React, { useState } from 'react';
import './nav.css';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaUserTie } from 'react-icons/fa';
import { BiBookOpen } from 'react-icons/bi';
import { FcSelfServiceKiosk } from 'react-icons/fc';
import { MdContactPage } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiTwotoneHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('about')}
        className={activeNav === 'about' ? 'active' : ''}
      >
        <FaUserTie />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('experience')}
        className={activeNav === 'experience' ? 'active' : ''}
      >
        <BiBookOpen />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('services')}
        className={activeNav === 'services' ? 'active' : ''}
      >
        <FcSelfServiceKiosk />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('contact')}
        className={activeNav === 'contact' ? 'active' : ''}
      >
        <MdContactPage />
      </a>
    </nav>
  );
};

export default Nav;
