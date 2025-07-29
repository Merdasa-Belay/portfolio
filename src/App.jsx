// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';


function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
