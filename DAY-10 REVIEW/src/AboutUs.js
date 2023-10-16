import React from 'react';
import './AboutUS.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
        
            <header className="about-us-header">
                <h1>About Us</h1>
                <p>Discover our story, mission, and the team behind NIPO.</p>
            </header>
            <section className="about-us-content">
                <h2>Our Story</h2>
                <p>Here's where you talk about your platform's inception, journey, and evolution.</p>

                <h2>Our Team</h2>
                <p>Introduce the driving forces behind your platform, their passions, and their roles.</p>

                <h2>Our Mission</h2>
                <p>Share what drives your platform forward and the impact you aim to create in the world.</p>
            </section>
            <footer>
                © 2023 NIPO. All Rights Reserved.
            </footer>
        </div>
    );
};

export default AboutUs;
