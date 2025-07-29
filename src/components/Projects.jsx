// src/components/Projects.jsx
import React from 'react';

const projectList = [
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for online stores with analytics, inventory management, and order processing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    stack: ['React', 'Node.js', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    title: 'EV Maintenance SaaS Platform',
    description: 'A SaaS web application for an EV maintenance company, offering customer booking, service tracking, real-time diagnostics, and workshop management tools tailored for electric vehicles.',
    image: 'https://plus.unsplash.com/premium_photo-1661963979733-4f39ac603294?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    live: 'https://your-saas-demo-link.com',
    code: 'https://github.com/your-repo-link',
  },
  


  

  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies to showcase professional work.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: '#',
    code: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a href={project.live} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.code} className="text-gray-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
