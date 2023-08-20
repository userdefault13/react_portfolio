import React from 'react';
import '../styles/experiencesection.css';

const ExperienceSection = ({ scrollToSection }) => {
    const experiences = [
        // Add your experience data here
        {
        imageUrl: '/experience1.jpg', // Adjust the image path
        title: 'Experience 1',
        },
        {
        imageUrl: '/experience2.jpg', // Adjust the image path
        title: 'Experience 2',
        },
        {
        imageUrl: '/experience1.jpg', // Adjust the image path
        title: 'Experience 1',
        },
        {
        imageUrl: '/experience2.jpg', // Adjust the image path
        title: 'Experience 2',
        },
        // Add more experiences here
    ];

    return (
        <section id="experience" className="h-screen  p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">My Experience</h2>
        <div className="experience-carousel">
            <div className="experience-carousel-inner">
            {experiences.map((experience, index) => (
                <div key={index} className="experience-card">
                <img src={experience.imageUrl} alt={`Experience ${index + 1}`} className="w-full h-64 object-cover" />
                <h4 className="text-lg font-semibold mt-2">{experience.title}</h4>
                </div>
            ))}
            </div>
        </div>
        <div className="center-button">
            <button
            onClick={() => scrollToSection('connect')} // Change 'connect' to the appropriate section ID
            className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-full"
            >
            Next Section
            </button>
        </div>
        </section>
    );
};

export default ExperienceSection;
