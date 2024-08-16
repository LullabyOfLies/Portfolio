import React from 'react';
import './Footer.css'; // Import CSS for styling
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h3 className='sayhello'>Say Hello</h3>
                <div className="footer-row">
                    <FaEnvelope className="footer-icon" />
                    <p>abcd@gmail.com</p>
                </div>
                <div className="footer-row">
                    <FaLinkedin className="footer-icon" />
                    <p><a href="https://t.ly/XHpt6" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>
            <div className="footer-right">
                <h4>© JL.Dev 2024</h4>
            </div>
        </footer>
    );
};

export default Footer;
