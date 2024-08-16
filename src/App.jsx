import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import TwoColumnBody from './components/body/twobodycolumn'; // Import your other components
import Projects from './components/body/projects';
import Skills from './components/body/skills';
import Contact from './components/body/contact';
import bgBackground from './assets/homepage/bgbackground.gif'; // Import the background GIF
import Footer from './components/footer/footer';
import LoadingScreen from './components/loadingscreen/loadingscreen'; // Import the loading screen

import './App.css'; // General CSS for the app

function App() {
  const [activeLink, setActiveLink] = useState('#home');
  const [loading, setLoading] = useState(true); // State to control loading screen
  const [slideDown, setSlideDown] = useState(false); // State to control slide-down effect

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDown(true); // Trigger the slide-down animation
    }, 5000); // Delay for 5 seconds before starting the slide-down

    const loadingTimer = setTimeout(() => {
      setLoading(false); // Hide the loading screen after slide-down completes
    }, 7000); // Give an additional 1 second for the slide-down animation to complete

    return () => {
      clearTimeout(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  const renderMainContent = () => {
    switch (activeLink) {
      case '#home':
        return <TwoColumnBody />;
      case '#projects':
        return <Projects />;
      case '#skills':
        return <Skills />;
      case '#contact':
        return <Contact />;
      default:
        return <TwoColumnBody />;
    }
  };

  return (
    <div className="App">
      {/* Render main content first, behind the loading screen */}
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <main className={`main-content ${loading ? 'hidden' : ''}`}>
        {activeLink === '#home' && (
          <div
            className="background-image"
            style={{ backgroundImage: `url(${bgBackground})` }}
          ></div>
        )}
        {renderMainContent()}
      </main>
      {activeLink !== '#home' && <Footer />}

      {/* Loading screen, displayed above the main content */}
      {loading && <LoadingScreen slideDown={slideDown} />}
    </div>
  );
}

export default App;
