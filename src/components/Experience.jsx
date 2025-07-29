// src/components/Experience.jsx
import React from 'react';

const experiences = [


  {
    title: 'Junior Web Developer',
    company: 'ZT Engineering PLC',
    period: '2023 - 2025',
    description: 'Assisted in building and maintaining websites for small businesses. Learned industry best practices and modern web technologies.',
    bullets: [
      'Contributed to 6+ website projects',
      'Implemented responsive designs for mobile compatibility',
      'Reduced client support requests by improving documentation',
      'Collaborated with designers to enhance user experience',
      'Learned version control with Git and GitHub',
      'Gained experience in Agile development methodologies'
    ],
  },
  {
    title: 'Education',
    company: 'B.Sc. Software Engineering - ALXSE',
    period: '2022 - 2023',
    description: 'Graduated with honors in Software Engineering. Focused on web technologies, human-computer interaction, and software engineering principles.',
    bullets: [
      'Completed coursework in web development, algorithms, and data structures',
      'Participated in hackathons and coding competitions',
      'Capstone project: Developed a full-stack e-commerce application using MERN stack',
      'Capstone project: AI-powered recommendation engine',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            My Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform translate-y-2"></span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((item, index) => (
            <div key={index} className={`relative timeline-item pl-8 ${index < experiences.length - 1 ? 'pb-8' : ''}`}>
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full z-10"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{item.period}</span>
                </div>
                <h4 className="text-lg text-blue-600 mb-2">{item.company}</h4>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <ul className="list-disc pl-5 text-gray-600">
                  {item.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
