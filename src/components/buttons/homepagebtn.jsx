// src/components/buttons/homepagebtn.js

import React from 'react';
import './homepagebtn.css'; // Import CSS for styling

const HomepageButton = ({ text, downloadUrl }) => {
  const handleClick = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'CV.pdf'; // The name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="homepage-btn gradient-btn " onClick={handleClick}> {/* Added cv-link class */}
      {text}
    </button>
  );
};

export default HomepageButton;
