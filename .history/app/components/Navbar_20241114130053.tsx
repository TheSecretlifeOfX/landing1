// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-[-12px] left-0 w-full bg-gray-800 p-2 text-black shadow-md z-50 ">
      <div className="container mx-auto flex items-center">
        <div className="text-2xl font-bold">
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
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-gray-200">
              About Me
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-200">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Blog
            </a>
          </li>
          <li className="ml-20">
            <a href="#contact" className="hover:text-gray-200">
              Book A Call
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
