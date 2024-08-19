import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import TwoColumnBody from './components/body/twobodycolumn'; // Import your other components
import Projects from './components/body/projects';
import Skills from './components/body/skills';
import Contact from './components/body/contact';
import bgBackground from './assets/homepage/bgbackground.gif'; // Import the background GIF
import Footer from './components/footer/footer';
import './App.css'; // General CSS for the app

function App() {
  const [activeLink, setActiveLink] = useState('#home');
  const [loading, setLoading] = useState(true); // State to control loading screen

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false); // Hide the loading screen after it's done
    }, 7000); // Adjust time to match the duration of your loading screen

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  const renderMainContent = () => {
    switch (activeLink) {
      case '#home':
        return <TwoColumnBody loading={loading} />; // Pass loading state to TwoColumnBody
      case '#projects':
        return <Projects />;
      case '#skills':
        return <Skills />;
      case '#contact':
        return <Contact />;
      default:
        return <TwoColumnBody loading={loading} />; // Pass loading state to TwoColumnBody
    }
  };

  return (
    <div className="App">
      {/* Conditionally render Navbar only when loading is complete */}
      {!loading && <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />}
      <main className="main-content">
        {activeLink === '#home' && (
          <div
            className="background-image"
            style={{ backgroundImage: `url(${bgBackground})` }}
          ></div>
        )}
        {renderMainContent()}
      </main>
      {activeLink !== '#home' && <Footer />}
    </div>
  );
}

export default App;
