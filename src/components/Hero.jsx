// src/components/Hero.jsx
import React from 'react';
import '../index.css';
import heroImage from '../assets/hero-image.jpg'; 

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Merdasa Belay</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
            I build fast, responsive, and modern websites using React, Next.js, and Tailwind CSS — with a strong focus on clean code and great user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1SP4CcTr3Zw958yedYCzKGauwK0GIMQsy/view?usp=sharing"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image + Experience Badge */}
          <div
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fadeIn"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={heroImage}
                  alt="Merdasa Belay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-2">
                    <i className="fas fa-code text-blue-600"></i>
                  </div>
                  <span className="font-medium">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
