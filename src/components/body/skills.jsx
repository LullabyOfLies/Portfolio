import React from 'react';
import './skills.css'; // Updated the file name
import Card from '../../components/cards/card'; // Assuming the card component is in this path
import Footer from '../../components/footer/footer'; // Import the Footer component

// Import images for each skill
import FlutterImage from '../../assets/skills/flutter.png';
import JavaScriptImage from '../../assets/skills/javascript.png';
import ReactJSImage from '../../assets/skills/react.png';
import CSS3Image from '../../assets/skills/css.png';
import FirebaseImage from '../../assets/skills/firebase.png'; // New image import
import ChatGPTImage from '../../assets/skills/chatgpt.png'; // New image import
import GitHubImage from '../../assets/skills/github.png'; // New image import
import FigmaImage from '../../assets/skills/figma.png'; // New image import

const skillsData = [
  {
    title: 'Flutter',
    description: 'To create smooth, cross-platform mobile apps with a single codebase.',
    image: FlutterImage,
  },
  {
    title: 'JavaScript',
    description: 'To bring web pages to life with interactive features and dynamic content.',
    image: JavaScriptImage,
  },
  {
    title: 'ReactJS',
    description: 'To build fast, component-based user interfaces for web apps.',
    image: ReactJSImage,
  },
  {
    title: 'CSS3',
    description: 'To style and layout web pages, enhancing their visual appeal and responsiveness.',
    image: CSS3Image,
  },
  // New skills
  {
    title: 'Firebase',
    description: 'To manage backend services, like real-time data and user authentication.',
    image: FirebaseImage,
  },
  {
    title: 'ChatGPT',
    description: 'To automate content creation and assist in general inquiries about web design and development.',
    image: ChatGPTImage,
  },
  {
    title: 'GitHub',
    description: 'For version control and collaboration on my development projects.',
    image: GitHubImage,
  },
  {
    title: 'Figma',
    description: 'To design and prototype user interfaces, collaborating with my team in real-time.',
    image: FigmaImage,
  },
];

const Skills = () => {
  const firstRowSkills = skillsData.slice(0, 4);
  const secondRowSkills = skillsData.slice(4);

  return (
    <>
      <div className="row skills-container">
        <div className="upper-row slidedown">
          <h2 className="skillsintro">
            <span>/skills</span>
          </h2>
          <span className='subtitle'>Selected Technologies I’ve used in my career</span>
        </div>
        <div className="bottom-row">
          <div className="bottom-inner-row slideright" >
            {firstRowSkills.map((skill, index) => (
              <Card key={index} title={skill.title} description={skill.description} image={skill.image} />
            ))}
          </div>
          <div className="bottom-inner-row slideleft" >
            {secondRowSkills.map((skill, index) => (
              <Card key={index} title={skill.title} description={skill.description} image={skill.image} />
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Skills;
