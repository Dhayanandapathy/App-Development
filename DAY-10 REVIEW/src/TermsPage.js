import React from 'react';
import './TermsPage.css';

const TermsPage = () => {
    return (
        <div className="terms-container">
            <header className="terms-header">
                <h1>Terms of Service</h1>
                <p>Last Updated: [Date]</p>
            </header>
            <section className="terms-content">
                <h2>Introduction</h2>
                <p>Welcome to [Your Platform's Name], the place where language learning meets cultural discovery. As you embark on this linguistic journey, here are some guidelines to keep in mind.</p>

                <h2>Acceptance of Terms</h2>
                <p>Embracing a new language? Great! Just remember, by using our platform, you're agreeing to these terms.</p>

                {/* ... Other terms sections ... */}

                <h2>Termination</h2>
                <p>We always hope it doesn’t come to this, but we might need to part ways if these terms are violated. Remember, this platform thrives on mutual respect and understanding.</p>
            </section>
        </div>
    );
};

export default TermsPage;
