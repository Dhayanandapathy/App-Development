import React from 'react';
import './TermsPage.css';
import { Link } from 'react-router-dom';

const TermsPage = () => {
    return (
        
        <div className="terms-container">
            <div className="Header">
        <h1 className='title'>NIPO</h1>
        <div className='cards'>
          <div className='btn'>
            <img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}} to={"/home"}>LEARN</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/letters"}>LETTERS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/leaderboard"}>LEADERBOARD</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/quests"}>QUESTS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/shop"}>SHOP</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://simg-ssl.duolingo.com/avatars/1265336797/pf242vSyXG/medium' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/profile"}>PROFILE</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/more"}>MORE</Link></p>
          </div>
        </div>
      </div>
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
