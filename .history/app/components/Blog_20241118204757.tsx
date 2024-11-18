import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3">
            <Image 
              src="/Images/Bimage1.jpg" 
              alt="Blog Image 1" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">The Future of Web Design</h3>
              <p className="text-gray-600 mb-4">
                Web design is evolving rapidly. In this post, we explore how artificial intelligence, machine learning, and other cutting-edge technologies are shaping the future of web design.
              </p>
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-gray-600 inline-block mt-4"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3">
            <Image 
              src="/Images/Bimage2.jpg" 
              alt="Blog Image 2" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">10 Tips for a Stunning Portfolio Website</h3>
              <p className="text-gray-600 mb-4">
                A portfolio website is often the first impression clients will have of you. Here are 10 tips that will help you create a portfolio that stands out and makes a lasting impact.
              </p>
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-gray-600 inline-block mt-4"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3">
            <Image 
              src="/Images/Bimage3.jpeg" 
              alt="Blog Image 3" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">How to Choose the Right Color Scheme for Your Website</h3>
              <p className="text-gray-600 mb-4">
                Choosing the right color scheme can make or break your website's design. Learn how to choose colors that align with your brand and improve the user experience.
              </p>
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-gray-600 inline-block mt-4"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3">
            <Image 
              src="/Images/Bimage4.png" 
              alt="Blog Image 4" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Why Website Speed is Crucial for User Experience</h3>
              <p className="text-gray-600 mb-4">
                A slow website can lead to high bounce rates. In this article, we discuss the importance of website speed and share techniques to optimize your site's loading time.
              </p>
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-gray-600 inline-block mt-4"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3">
            <Image 
              src="/Images/Bimage5.webp" 
              alt="Blog Image 5" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">The Role of Typography in Web Design</h3>
              <p className="text-gray-600 mb-4">
                Typography is one of the most overlooked aspects of web design. Discover how to choose the right fonts for your website and improve readability.
              </p>
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-gray-600 inline-block mt-4"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3">
            <Image 
              src="/Images/Bimage6.png" 
              alt="Blog Image 6" 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Understanding User-Centered Design</h3>
              <p className="text-gray-600 mb-4">
                User-centered design is at the heart of great user experiences. This post explains what it is and how you can implement it in your next web design project.
              </p>
              <a
                href="#"
                className="text-gray-400 font-semibold hover:text-gray-600 inline-block mt-4"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
