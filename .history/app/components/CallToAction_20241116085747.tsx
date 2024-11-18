import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

export default function CallToAction() {
  return (
    <section id="contact" className="py-3 text-center bg-gray-600 text-white mb-10">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-4">We would love to hear about your project! Please provide the details, and we'll get back to you shortly.</p>

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-3">
          <label htmlFor="name" className="block text-left text-gray-700 font-semibold mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="block text-left text-gray-700 font-semibold mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="job-details" className="block text-left text-gray-700 font-semibold mb-1">Project Details</label>
          <textarea
            id="job-details"
            name="job-details"
            placeholder="Tell us about the job you need done"
            className="w-full p-2 border border-gray-300 rounded-md h-28"
            required
          />
        </div>

        <div className="mb-4 py-7">
          <button type="submit" className="px-5 py-1 bg-gray-200 text-black font-semibold rounded-lg shadow-lg hover:bg-gray-400">
            SUBMIT
          </button>
        </div>
      </form>

      {/* Social Media Links with Icons */}
      <div className="mt-4">
        <p className="text-lg font-semibold">Follow and contact me on social media:</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
