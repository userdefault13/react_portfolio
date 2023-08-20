import React, { useState } from 'react';
import TimelineCard from './utils/TimeLineCard';
import '../styles/timeline.css'

const AboutSection = ({ scrollToSection }) => { 
    const milestones = [
        {
        title: 'Carpenter Apprenticeship',
        date: '2008 - 2012',
        description: 'Learned woodworking and gained hands-on experience.',
        },
        {
        title: 'Transition to Coding',
        date: '2013',
        description: 'Picked up coding as a hobby and started learning programming languages.',
        },
        {
            title: 'Carpenter Apprenticeship',
            date: '2008 - 2012',
            description: 'Learned woodworking and gained hands-on experience.',
            },
            {
            title: 'Transition to Coding',
            date: '2013',
            description: 'Picked up coding as a hobby and started learning programming languages.',
            },
        // Add more milestones here
    ];


    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const showNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % milestones.length);
        };
        
        const showPrevCard = () => {
            setCurrentCardIndex((prevIndex) => (prevIndex - 1 + milestones.length) % milestones.length);
        };

        return (
        <section id="about" className="h-screen bg-gray-100 p-8 overflow-hidden">
        <h2 className="text-2xl font-semibold text-center mb-6">My Journey</h2>
        <div className="flex items-center justify-center h-full">
            <button onClick={showPrevCard} className="mr-4">
            Back
            </button>
            <div className="w-full overflow-hidden">
            <div
                className="flex transition-transform duration-300"
                style={{
                transform: `translateX(-${currentCardIndex * 100}%)`,
                }}
            >
                {milestones.map((milestone, index) => (
                <div key={index} className="flex-none w-full p-4">
                    <TimelineCard {...milestone} />
                </div>
                ))}
            </div>
            </div>
            <button onClick={showNextCard} className="ml-4">
            Next
            </button>
        </div>
        <button
            onClick={() => scrollToSection('skills')}
            className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-full"
        >
            Next Section
        </button>
        </section>
    );
};

export default AboutSection;
