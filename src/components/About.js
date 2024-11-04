import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [funFact, setFunFact] = useState('');

  const funFacts = [
    'React was created by Jordan Walke, a software engineer at Facebook.',
    'React was first deployed on Facebook’s News Feed in 2011 and on Instagram in 2012.',
    'React allows developers to create large web applications that can update and render efficiently in response to data changes.',
    'React is maintained by Facebook and a community of individual developers and companies.',
    'React can be used as a base in the development of single-page or mobile applications.'
  ];

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFunFact(funFacts[randomIndex]);
  };

  return (
    <div className="about-container">
      <h1>About Our App</h1>
      <p>
        Welcome to our app! This application is designed to help users manage their tasks efficiently and effectively.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Task Management: Create, update, and delete tasks.</li>
        <li>Reminders: Set reminders for important tasks.</li>
        <li>Collaboration: Share tasks with team members.</li>
        <li>Analytics: Track your productivity with detailed reports.</li>
      </ul>
      <h2>Purpose</h2>
      <p>
        Our app aims to improve productivity by providing a simple and intuitive interface for task management. Whether you are working individually or as part of a team, our app helps you stay organized and on top of your tasks.
      </p>
      <h2>Fun Fact</h2>
      <button onClick={getRandomFact} className="fun-fact-button">
        Show Fun Fact
      </button>
      {funFact && <p className="fun-fact-text">{funFact}</p>}
    </div>
  );
};

export default About;
