import React from 'react';
import './CareersPage.css';

const CareersPage = () => {
    return (
        <div className="careers-container">
            <header className="careers-header">
                <h1>Join Our Team</h1>
                <p>Help us bridge language gaps and connect cultures.</p>
            </header>
            <section className="job-listings">
                <div className="job">
                    <h2>Language Curriculum Designer</h2>
                    <p>Help design comprehensive language courses that cater to all learning styles.</p>
                    <button className="apply-button">Apply Now</button>
                </div>
                <div className="job">
                    <h2>Web Developer</h2>
                    <p>Join our tech team to enhance and expand our digital learning platform.</p>
                    <button className="apply-button">Apply Now</button>
                </div>
                
            </section>
            <section className="team-photos">
             
            </section>
            <section className="testimonials">
                <blockquote>"Working at NIPO has been a transformative experience. I've grown professionally and personally."</blockquote>
               
            </section>
        </div>
    );
};

export default CareersPage;
