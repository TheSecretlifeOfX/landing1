import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

export default function CallToAction() {
  return (
    <section id="contact" className="py-20 text-center bg-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-6">We would love to hear about your project! Please provide the details, and we'll get back to you shortly.</p>

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-gray-700 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="job-details" className="block text-left text-gray-700 font-semibold mb-2">Project Details</label>
          <textarea
            id="job-details"
            name="job-details"
            placeholder="Tell us about the job you need done"
            className="w-full p-3 border border-gray-300 rounded-md h-32"
            required
          />
        </div>

        <div className="mb-6">
          <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>

      {/* Social Media Links with Icons */}
      <div className="mt-8">
        <p className="text-lg font-semibold">Follow and contact me on social media:</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaInstagram className="w-6 h-6" /> {/* Instagram Icon */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaTwitter className="w-6 h-6" /> {/* Twitter Icon */}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" /> {/* LinkedIn Icon */}
          </a>
        </div>
      </div>
    </section>
  );
}
