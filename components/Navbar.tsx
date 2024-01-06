"use client"

import  { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdClose, IoMdCloseCircle, IoMdCloseCircleOutline } from 'react-icons/io';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-30 flex w-full items-center bg-[#0A192F] px-6 py-3">
        <div className="flex w-full justify-between items-center">
          <div className="flex">
            <Image
              src="/logo1.png"
              alt="logo"
              height={100}
              width={100}
              className="md:p-1 p-2"
            />
          </div>
          <div className="hidden md:flex gap-8">
            {/* Display these menu items on screens that are medium (md) and larger */}
            <div className="flex items-center space-x-4 mr-2 text-[#B4BFDE]">
              <Link href="#about">About</Link>
              <Link href="#experience">Experience</Link>
              <Link href="#work">Work</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <a
              href="https://drive.google.com/file/d/1Jx40gxtwyujWsrwinUNpdLWnqRZdhnPH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-cyan-100 ml-4 rounded-md p-4 border-2 border-cyan-100">
                Resume
              </div>
            </a>
          </div>
          <div className="md:hidden relative">
            {/* Display this for screens smaller than medium (md) */}
            <div className="text-cyan-100 cursor-pointer" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            {isMenuOpen && (
              <div className="absolute top-14 right-0 bg-[#08101b] p-12 cursor-pointer  ">
                {/* Menu items go here */}
                <div className='space-y-4'>
                <Link href="#about" className="block text-[#B4BFDE]">About</Link>
                <Link href="#experience" className="block text-[#B4BFDE]">Experience</Link>
                <Link href="#work" className="block text-[#B4BFDE]">Work</Link>
                <Link href="#contact" className="block text-[#B4BFDE]">Contact</Link>
                <a href="https://drive.google.com/file/d/1ZUmNmShMFMMYKGe6chjoMc4C_m_OvDEr/view?usp=sharing" className="block mt-3 bg-cyan-100 rounded-lg p-1">Resume</a>
                </div>
                <IoMdClose
                  className="block text-cyan-100 mt-4  absolute top-0 right-1"
                  onClick={toggleMenu}
                  size= {30}
                >
                  Close
                </IoMdClose>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
