import React, { useState } from 'react';
import '../styles/skillscard.css';
import SkillCard from './utils/skillcard';

const SkillsSection = ({ scrollToSection }) => { 
  const skills = [
    {
      skillName: 'HTML',
      imageSrc: './html.png', 
      description: 'Building the structure of web pages.',
    },
    {
      skillName: 'CSS',
      imageSrc: '/css.png', 
      description: 'Styling and layout of web pages.',
    },
    {
      skillName: 'JavaScript',
      imageSrc: '/javascript.png', 
      description: 'Adding interactivity to web pages.',
    },
    {
      skillName: 'React.js',
      imageSrc: '/react.png', 
      description: 'Building user interfaces with React.',
    },
    {
      skillName: 'Node.js',
      imageSrc: '/node.png', 
      description: 'Building server-side applications with Node.js.',
    },
    {
      skillName: 'Express.js',
      imageSrc: '/express.png', 
      description: 'Building web applications with Express.js.',
    },
    {
      skillName: 'MongoDB',
      imageSrc: '/mongo.png', 
      description: 'Working with MongoDB databases.',
    },
    {
      skillName: 'MySQL',
      imageSrc: '/mysql.svg', 
      description: 'Working with relational databases.',
    },
    {
      skillName: 'Git',
      imageSrc: '/git.svg', 
      description: 'Version control and collaboration with Git.',
    },
    {
      skillName: 'Responsive Design',
      imageSrc: '/path/to/responsive-icon.png', 
      description: 'Creating web designs that work across devices.',
    },
    // Add more skills...
  ];
  const itemsPerPage = 20; // Number of skills per page
  const [currentPage, setCurrentPage] = useState(1);

  const skillsToDisplay = skills.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(skills.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="skills" className="h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">My Skills</h2>
      {/* Constrain the height of the grid */}
      <div className="grid-container max-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsToDisplay.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
      {/* Pagination */}
      {skills.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-full"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
        
      <button
            onClick={() => scrollToSection('experience')}
            className="mt-8 mx-auto block bg-blue-500 text-white px-4 py-2 rounded-full"
        >
        Next Section
      </button>
    </section>
  );
};

export default SkillsSection;