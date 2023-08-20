import React from 'react';
import '../styles/skillssection.css'; // Import the CSS file

const SkillsSection = ({ scrollToSection }) => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS',
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git',
    // Add more skills here
  ];

  return (
    <section id="skills" className="h-screen bg-gray-100 p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-center mb-6">My Skills</h2>
        <div className="flex-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img
                src={`/images/${skill.toLowerCase()}-icon.png`} // Adjust the image path
                alt={`${skill} Icon`}
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToSection('experience')}
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-full self-center"
      >
        Next Section
      </button>
    </section>
  );
};

export default SkillsSection;
