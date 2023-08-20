import React from 'react';
import '../styles/parallax.css';

const HeroSection = ({ scrollToSection }) => {
    return (
        <section
        id="hero"
        className="h-screen relative flex justify-end overflow-hidden bg-cover bg-no-repeat"
        style={{
            backgroundImage: '/hero.svg', // Use '/hero.svg' directly
            backgroundPosition: 'right',
            backgroundSize: '50%', // Reduce the size of the background image
        }}
        >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-y-0 left-20 flex items-center pl-4 z-10 w-1/2">
            <div className="text-right">
            <h1 className="text-4xl font-bold text-white mb-2">Julius Wong</h1>
            <h2 className='text-blue-500'>Design and Full-Stack Dev</h2>
            <button
                onClick={() => scrollToSection('about')}
                className="bg-white text-blue-500 px-4 py-2 rounded-full mt-2"
            >
                About Me
            </button>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
