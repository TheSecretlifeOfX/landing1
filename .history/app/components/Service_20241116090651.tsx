import React from 'react';

export default function Service() {
  return (
    <section id="service" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Web Design Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Custom Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-gray-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-12 h-12 mx-auto"
              >
                <path
                  d="M9 14l3 3l3-3m-3-4v8m6-4v8M3 12v8m18-8H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Custom Web Design</h3>
            <p className="text-gray-600">
              We create visually stunning websites tailored to your brand and needs. Our designs are both aesthetic and user-friendly, ensuring a seamless experience for visitors.
            </p>
          </div>

          {/* Service 2: Responsive Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-12 h-12 mx-auto"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Responsive Web Design</h3>
            <p className="text-gray-600">
              We ensure your website is optimized for all devices, providing a smooth browsing experience whether it's on a phone, tablet, or desktop.
            </p>
          </div>

          {/* Service 3: E-commerce Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-12 h-12 mx-auto"
              >
                <path
                  d="M3 3h18v18H3V3zM10 7h4v10h-4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">E-commerce Web Design</h3>
            <p className="text-gray-600">
              Our team specializes in creating intuitive, functional, and secure e-commerce websites that provide a smooth shopping experience for your customers.
            </p>
          </div>

          {/* Service 4: UI/UX Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-12 h-12 mx-auto"
              >
                <path
                  d="M12 2v20m-8-8l8 8l8-8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              We focus on user experience and interface design to ensure your website or application is intuitive, easy to navigate, and provides a seamless user experience.
            </p>
          </div>

          {/* Service 5: Website Redesign */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-12 h-12 mx-auto"
              >
                <path
                  d="M21 10l-7-7l-7 7m7-7v14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Website Redesign</h3>
            <p className="text-gray-600">
              Give your existing website a fresh new look with a complete redesign. We modernize your site to improve functionality, aesthetics, and overall performance.
            </p>
          </div>

          {/* Service 6: WordPress Web Design */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-12 h-12 mx-auto"
              >
                <path
                  d="M9 3h6v18H9V3zm-6 9h18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">WordPress Web Design</h3>
            <p className="text-gray-600">
              We create custom WordPress websites that are both easy to manage and visually appealing. Get a fully customized site that reflects your brand’s personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
