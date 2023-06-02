

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
        <div className="home-container">
        <h1 className="home-title">Welcome to Marvel Universe</h1>
        <div className="home-content">
            <div className="home-section">
            <h2 className="home-section-title">Marvel Movies</h2>
            <p className="home-section-text">
                Explore the epic world of Marvel movies, from Iron Man to Avengers and beyond.
            </p>
            <button className="home-section-button">View Movies</button>
            </div>
            <div className="home-section">
            <h2 className="home-section-title">Marvel Characters</h2>
            <p className="home-section-text">
                Get to know your favorite Marvel characters, their stories, and powers.
            </p>
            <button className="home-section-button">View Characters</button>
            </div>
        </div>
        </div>
    </>
  );
};

export default Home;
