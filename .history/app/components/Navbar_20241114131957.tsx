// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-2 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center">
        {/* Logo Section on the Left */}
        <div className="flex items-center">
          <Link href="/">
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

        {/* Navigation Links Centered */}
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-gray-400">
              About Me
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Blog
            </a>
          </li>
        </ul>

        {/* "Book A Call" Button on the Right */}
        <ul className="flex items-center ml-auto">
  <li>
    <a
      href="#contact"
      className="flex items-center px-4 py-2 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Book A Call
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 ml-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L9.75 14.25M17.25 6.75H6.75v10.5"
        />
      </svg>
    </a>
  </li>
</ul>

      </div>
    </nav>
  );
}
