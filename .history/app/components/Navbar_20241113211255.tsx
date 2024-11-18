// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/hero" className="hover:text-gray-200">
            Hero Section
          </Link>
        </li>
        <li>
          <Link href="/features" className="hover:text-gray-200">
            Features
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
