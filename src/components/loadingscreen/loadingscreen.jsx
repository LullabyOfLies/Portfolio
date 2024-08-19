import React, { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './LoadingScreen.css';

import Cat from '../../assets/homepage/catroll.gif'


const LoadingScreen = ({ slideDown }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Just cleaning up');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 30) setText('Just cleaning up');
        if (newProgress === 60) setText('Hold on.');
        if (newProgress === 90) setText('Almost There');
        return newProgress;
      });
    }, 50); // Increment progress every 50ms to reach 100% in 5 seconds

    if (progress === 100) {
      setTimeout(() => {
        slideDown();
      }, 1000); // 1-second delay before slide-down
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress, slideDown]);

  return (
    <div className={`loading-screen ${progress === 100 ? 'slide-down' : ''}`}>
      <div  className='main-column'>
        <CircularProgressbarWithChildren className='circularprogressbar'
          value={progress}
          styles={buildStyles({
            pathColor: '#f5f3ed',
            textColor: '#f5f3ed',
            trailColor: '#2d2d2d',
            strokeLinecap: 'round ',
            pathTransition: 'stroke-dashoffset 0.5s ease 0s',
          })}
        >
             <img
            className="cat-gif"
            src={Cat}
            alt="cat"
          />
          
        </CircularProgressbarWithChildren>
        <div className='loading-text'>
            <strong>{text}</strong>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
