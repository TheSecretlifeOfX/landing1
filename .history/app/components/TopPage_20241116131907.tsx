import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

export default function TopPage() {
  return (
    <div
      id="top-page"
      className="relative w-full h-screen flex items-center justify-center bg-gray-100 mt-12"
    >
      {/* Laptop Mockup Image */}
      <div className="relative w-[80%] max-w-[1200px] h-[600px] bg-laptop">
        {/* Content inside the laptop screen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Solar System Animation */}
          <div id="solar" className="solar-system-container">
            <div className="sun"></div>
            <div className="planet orbit-1"></div>
            <div className="planet orbit-2"></div>
            <div className="planet orbit-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
