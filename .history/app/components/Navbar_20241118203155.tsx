'use client'; // Add this line at the top of your file

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/components/_navbar.scss"; // Import the SCSS file

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-2 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section on the Left */}
        <div className="flex items-center mr-10 ml-[-50px]">
          <Link href="#solar">
            <Image
              src="/Images/Logo.png"
              alt="MyBrand Logo"
              width={60}
              height={60}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden items-center space-x-2 p-2"
          onClick={toggleMenu}
          aria-label="Toogle Menu"
        >
          <span className="block w-6 h-4 bg-white mb-1"></span>
          {/* <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span> */}
        </button>

        {/* Navigation Links Centered */}
        <ul className={`lg:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <a href="#hero" className="text-white hover:text-gray-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#features" className="text-white hover:text-gray-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#service" className="text-white hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#blog" className="text-white hover:text-gray-400">
              Blog
            </a>
          </li>
        </ul>

        {/* "Book A Call" Button on the Right */}
        <ul className="flex items-center ml-auto">
          <li>
            <a
              href="#contact"
              className="flex items-center px-4 py-2 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 underline"
            >
              Book A Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 ml-2"
              >
                <path
                  d="M7 17L17 7M7 7h10v10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
