import React, { useState } from 'react';
import './projects.css'; // Import CSS for styling
import pomodoroImage from '../../assets/projectImages/pomodoro.webp';
import nassipyImage from '../../assets/projectImages/nassipy.webp';
import bizfriendImage from '../../assets/projectImages/bizfriend.webp';

const Projects = () => {
    const [activeProject, setActiveProject] = useState('project1');
    const projectData = {
        project1: {
            title: 'Pomodoro.app',
            description: 'A time management web app that uses 25-minute work sessions separated <br /> by short breaks to keep you focused and prevent burnout.',
            image: pomodoroImage,
            link: 'https://beta-pomodoro-app.netlify.app/', // Example external link
        },
        project2: {
            title: 'Nassipy',
            description: 'Built an easy-to-use web app that introduces Python programming to beginners <br /> through Nassi-Shneiderman Diagrams, with a focus on teaching the logic flow, syntax, and basic control structures for accurate code writing',
            image: nassipyImage,
            link: 'https://nassipy.netlify.app/', // Example external link
        },
        project3: {
            title: 'BizFriend',
            description: 'Mobile Application that  simplifies business management with its integrated mobile POS system <br /> and sales analytics, making it easy to track growth and progress.',
            image: bizfriendImage,
            link: 'https://bizzfriend.softr.app/', // Example external link
        },
    };

    return (
        <>
            <div className="two-column-body">
                <div className="column left-column">
                    <h2 className="projectintro">
                        <span className="greetings">/projects</span>
                    </h2>
                    <h4 className='sub'>Selected works I've taken on in the pasts</h4>
                    <div className="subheadings">
                        {Object.keys(projectData).map((key) => (
                            <div key={key} className={key}>
                                <h3
                                    onClick={() => setActiveProject(key)}
                                    className={activeProject === key ? 'active' : ''}
                                >
                                    {activeProject === key ? `> ${projectData[key].title}` : projectData[key].title}
                                </h3>
                                {activeProject === key && (
                                    <>
                                               <p dangerouslySetInnerHTML={{ __html: projectData[key].description }}></p>

                                        <a
                                            href={projectData[key].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="checkout-button"
                                        >
                                            Checkout &rarr;
                                        </a>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="column right-column">
                    <div className="image-container">
                        <img src={projectData[activeProject].image} alt={activeProject} className="responsive-image" />
                    </div>
                </div>
                
            </div>
        
        </>
        
    );
};

export default Projects;
