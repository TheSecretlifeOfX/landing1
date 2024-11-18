// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 p-4 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
          <Image
            src="Images/logo.jpg"
            alt="MyBrand Logo"
            width={40}
            height={40}
            className="cursor-pointer"
            priority
          />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-200">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200">
              Book A Call
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
