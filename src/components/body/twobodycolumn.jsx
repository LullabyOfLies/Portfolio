import React from 'react';
import './twobodycolumn.css'; // Import CSS for styling
import myImage from '../../assets/homepage/profile.webp';
import HomepageButton from '../buttons/homepagebtn'; // Import the custom button component
import pdfUrl from '../../assets/pdfs/CV.pdf'; // Import the PDF file
import LoadingScreen from '../loadingscreen/loadingscreen'; // Import the loading screen

const TwoColumnBody = ({ loading }) => {
  return (
    <>
      {/* Conditionally render LoadingScreen based on the loading state */}
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <div className="two-column-body">
            <div className="column left-column">
              <h2 className="introduction">
                <span className="greetings">Hello!👋 <br />My name is </span>
                <span className="myName"><br />Jean Lorenz <br /> Recato</span>
              </h2>
              <div className="subheadings">
                <h3 className="title">Designer & Developer</h3>
                <p className="quote">
                  I believe that simplicity in web design means <br />delivering functionality in the most direct and <br /> accessible way possible
                </p>
              </div>
            </div>
            <div className="column right-column">
              <div className="image-container">
                <img src={myImage} alt="Profile" className="responsive-image" />
              </div>
            </div>
          </div>
          <div className="button-container">
            <HomepageButton text="Download My CV" downloadUrl={pdfUrl} />
          </div>
        </>
      )}
    </>
  );
};

export default TwoColumnBody;
