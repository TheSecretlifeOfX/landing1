import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/_navbar.scss"; // Import the SCSS file

export default function Navbar() {
  // State for toggling the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
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

        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#hero">About Me</a>
          <a href="#features">Portfolio</a>
          <a href="#service">Services</a>
          <a href="#blog">Blog</a>
        </div>

        {/* "Book A Call" Button */}
        <div className="navbar-button">
          <a href="#contact" className="flex items-center">
            Book A Call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                d="M7 17L17 7M7 7h10v10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#hero">About Me</a>
          </li>
          <li>
            <a href="#features">Portfolio</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact" className="navbar-button">
              Book A Call
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
