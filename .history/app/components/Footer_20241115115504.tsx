import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright Notice on the Left */}
        <div className="text-sm">
          <p>&copy; 2024 CopyRight. All rights reserved.</p>
        </div>

        {/* Double Line Divider */}
        <div className="w-1/12 border-t-2 border-white mx-4"></div> {/* Double Line Divider */}

        {/* Logo on the Right */}
        <div>
          <Image
            src="/Images/Logo.png" 
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}
