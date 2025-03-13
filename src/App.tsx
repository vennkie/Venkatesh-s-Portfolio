import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar isDarkMode={isDarkMode} />
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Internships />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;