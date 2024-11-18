import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

export default function TopPage() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/laptop-screen.png")' }}
    >
      {/* Content inside the laptop screen */}
      <div className="absolute inset-0 flex flex-col items-center justify-start p-8">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="mt-20">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
