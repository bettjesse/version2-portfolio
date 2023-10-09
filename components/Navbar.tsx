"use client"




import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <>
    <nav className="fixed top-0 z-30 flex w-full items-center bg-[#0A192F] px-6 py-3">
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <h1>Logo</h1>
        </div>
        <div className="hidden md:flex gap-8">
          {/* Display these menu items on screens that are medium (md) and larger */}
          <div className="flex items-center space-x-4 mr-2 text-[#B4BFDE]">
            <Link href= "#about">About</Link>
            <Link href= "#experience">Experience</Link>
            <Link href= "#work">Work</Link>
            <Link href= "#contact">Contact</Link>
          </div>
          <div className="text-cyan-100 ml-4 rounded-md p-4 border-2 border-cyan-100">
            Resume
          </div>
        </div>
        <div className="md:hidden">
          {/* Display this for screens smaller than medium (md) */}
          <div className="text-cyan-100 cursor-pointer">
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
        </div>
      </div>
    </nav>
    
  </>
  );
};

export default Navbar;
