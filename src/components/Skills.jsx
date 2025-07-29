// src/components/Skills.jsx
import React, { useEffect } from 'react';
import '../index.css';

const technicalSkills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
];

const professionalSkills = [
  { name: 'Communication', level: 90 },
  { name: 'Teamwork', level: 85 },
  { name: 'Project Management', level: 80 },
  { name: 'Creativity', level: 95 },
];

const tools = [
  { icon: 'fab fa-html5', name: 'HTML5', color: 'text-orange-500' },
  { icon: 'fab fa-css3-alt', name: 'CSS3', color: 'text-blue-500' },
  { icon: 'fab fa-js', name: 'JavaScript', color: 'text-yellow-500' },
  { icon: 'fab fa-react', name: 'React', color: 'text-blue-400' },
  { icon: 'fab fa-node-js', name: 'Node.js', color: 'text-green-500' },
  { icon: 'fab fa-git-alt', name: 'Git', color: 'text-orange-600' },
  { icon: 'fab fa-figma', name: 'Figma', color: 'text-purple-500' },
  { icon: 'fas fa-database', name: 'MongoDB', color: 'text-blue-600' },
];

const Skills = () => {
  // Optional: Animate skill bars when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
              const width = bar.getAttribute('data-width');
              bar.style.width = width;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="skill-bar bg-blue-600 h-2.5 rounded-full"
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Professional Skills</h3>
            <div className="space-y-6">
              {professionalSkills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="skill-bar bg-blue-600 h-2.5 rounded-full"
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map(tool => (
              <div
                key={tool.name}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 w-24"
              >
                <i className={`${tool.icon} text-4xl ${tool.color} mb-2`}></i>
                <span className="text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
