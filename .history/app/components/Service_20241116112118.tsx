import React from 'react';
import customDesignIcon from '../public/icons/custom-design.png';
import responsiveDesignIcon from '../public/icons/responsive-design.jpeg';
import ecommerceIcon from '../public/icons/ecommerce.png';
import uiuxIcon from '../public/icons/uiux.png';
import redesignIcon from '../public/icons/redesign.jpg';
import wordpressIcon from '../public/icons/wordpress.png';

export default function Service() {
  return (
    <section id="service" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Web Design Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1: Custom Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={customDesignIcon.src}
              alt="Custom Web Design Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Custom Web Design</h3>
            <p className="text-gray-600">
              We create visually stunning websites tailored to your brand and needs. Our designs are both aesthetic and user-friendly.
            </p>
          </div>

          {/* Service 2: Responsive Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={responsiveDesignIcon.src}
              alt="Responsive Design Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Responsive Web Design</h3>
            <p className="text-gray-600">
              We ensure your website is optimized for all devices, providing a smooth browsing experience on any screen size.
            </p>
          </div>

          {/* Service 3: E-commerce Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={ecommerceIcon.src}
              alt="E-commerce Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">E-commerce Web Design</h3>
            <p className="text-gray-600">
              We specialize in creating intuitive and secure e-commerce websites for a seamless shopping experience.
            </p>
          </div>

          {/* Service 4: UI/UX Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={uiuxIcon.src}
              alt="UI/UX Design Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              We focus on user experience and interface design to ensure your website is intuitive and easy to navigate.
            </p>
          </div>

          {/* Service 5: Website Redesign */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={redesignIcon.src}
              alt="Website Redesign Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Website Redesign</h3>
            <p className="text-gray-600">
              Give your website a fresh new look with a complete redesign to enhance its functionality and appearance.
            </p>
          </div>

          {/* Service 6: WordPress Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={wordpressIcon.src}
              alt="WordPress Design Icon"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">WordPress Web Design</h3>
            <p className="text-gray-600">
              We create custom WordPress websites that are both easy to manage and visually appealing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
