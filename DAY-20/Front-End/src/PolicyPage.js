import React from 'react';
import './PolicyPage.css';

const PolicyPage = () => {
    return (
        <div className="policy-container">
            <header className="policy-header">
                <h1>Privacy Policy</h1>
                <p>Last Updated: [Date]</p>
            </header>
            <section className="policy-content">
                <div className="policy-block">
                    <i className="fas fa-user-circle policy-icon"></i>
                    <h2>Personal Information</h2>
                    <p>We respect your privacy, ensuring secure storage for details like your name, email, and payment data.</p>
                </div>
                <div className="policy-block">
                    <i className="fas fa-cookie policy-icon"></i>
                    <h2>Cookies</h2>
                    <p>We use cookies for a tailored user experience, understanding your preferences to better adapt our platform.</p>
                </div>
                <div className="policy-block">
                    <i className="fas fa-shield-alt policy-icon"></i>
                    <h2>Data Protection</h2>
                    <p>Your data stays protected with encrypted databases and stringent security protocols.</p>
                </div>
            </section>
        </div>
    );
};

export default PolicyPage;
