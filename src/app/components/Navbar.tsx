'use client';

import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='container pt-6 px-8 py-4'>
      <div className='flex justify-between items-center'>

        <div className='text-xl font-medium tracking-wide italic'>
          OCEAN BLOOM
        </div>

        <ul className={`gap-10 lg:gap-10 hidden md:flex`}>
          <li className='menulink'><a href='#hero'>Home</a></li>
          <li className='menulink'><a href='#destination'>Top Destination</a></li>
          <li className='menulink'><a href='#blog'>Blog</a></li>
          <li className='menulink'><a href='#about'>About</a></li>
          <li className='menulink'><a href='#contact'>Contact</a></li>
        </ul>

        <AiOutlineMenu
          className='md:hidden'
          size={30}
          onClick={toggleMenu}
          role='button'
          aria-label='Toggle menu'
        />
      </div>

      {isMenuOpen && (
        <ul className='mt-4 space-y-4 md:hidden'>
          <li><a href='#hero' onClick={toggleMenu}>Home</a></li>
          <li><a href='#destination' onClick={toggleMenu}>Top Destination</a></li>
          <li><a href='#blog' onClick={toggleMenu}>Blog</a></li>
          <li><a href='#about' onClick={toggleMenu}>About</a></li>
          <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
