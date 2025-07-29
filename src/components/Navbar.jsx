import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const links = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  // ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      document.querySelectorAll('section[id]').forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll behavior
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const target = document.getElementById(link);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
      setMobileOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-blue-600">
            Merdasa Belay
          </a>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <a
                key={link}
                href={`#${link}`}
                onClick={(e) => handleLinkClick(e, link)}
                className={`nav-link capitalize transition ${
                  activeLink === link
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3">
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`nav-link capitalize transition ${
                    activeLink === link
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
