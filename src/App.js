import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

const App = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header */}
      {showHeader && <Header />}

      {/* Sections */}
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection scrollToSection={scrollToSection} />
      <SkillsSection scrollToSection={scrollToSection} />
      <ExperienceSection scrollToSection={scrollToSection}/>
      <ConnectSection scrollToSection={scrollToSection} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
