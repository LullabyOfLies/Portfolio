import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = ({ activeLink, setActiveLink }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isOpen) {
      toggleSidebar(); // Close sidebar on link click if open
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">JL.Dev</div>
        <div className="burger-icon" onClick={toggleSidebar}>
          &#9776; {/* This is the HTML code for a hamburger icon */}
        </div>
        <ul className="navbar-links">
          <li
            className={`nav-item ${activeLink === '#home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#home')}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`nav-item ${activeLink === '#projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#projects')}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={`nav-item ${activeLink === '#skills' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#skills')}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={`nav-item ${activeLink === '#contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#contact')}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-close" onClick={toggleSidebar}>
          &times; {/* This is the HTML code for a close icon */}
        </div>
        <ul className="sidebar-links">
          <li
            className={`sidebar-item ${activeLink === '#home' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#home')}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`sidebar-item ${activeLink === '#projects' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#projects')}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={`sidebar-item ${activeLink === '#skills' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#skills')}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={`sidebar-item ${activeLink === '#contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#contact')}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
