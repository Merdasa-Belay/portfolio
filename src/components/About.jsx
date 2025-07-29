// src/components/About.jsx
import React from 'react';
import '../index.css';
import aboutImage from '../assets/about-image.jpg'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </span>
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="About Merdasa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Info */}
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate frontend developer with expertise in creating modern, responsive web applications.
              With a background in computer science and design, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My journey in web development started 2 years ago, and since then I've worked with startups and established
              companies to build digital experiences that users love.
            </p>

            {/* Personal Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-calendar-alt text-blue-600 mr-3"></i>
                <span><strong>Age:</strong> 31</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-600 mr-3"></i>
                <span><strong>Email:</strong> merdasabelay@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-blue-600 mr-3"></i>
                <span><strong>Phone:</strong> +251 (091) 302-4687</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                <span><strong>Location:</strong>Ethiopia, Addis Ababa </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Merdasa-Belay"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/merdasa-belay-795a03128/"
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-2 rounded-lg font-medium transition duration-300"
              >
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
