// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-blue-400">
              Merdasa Belay
            </a>
            <p className="mt-2 text-gray-400">Creating digital experiences that matter.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com/Merdasa-Belay" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/merdasa-belay-795a03128/" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://x.com/MerdasaBelay" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
         
            </div>
            <p className="text-gray-400 text-sm">© 2025 Merdasa Belay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
