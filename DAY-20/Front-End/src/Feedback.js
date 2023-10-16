import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Admin() {
  const [feed, setFeed] = useState({
    id: '',
    name: '',
    email: '',
    message: '',
  });

  const { id, name, email, message } = feed;
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setFeed({ ...feed, [e.target.name]: e.target.value });
  };

  const handlefeedback = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      // Log the data being sent to the API
      console.log('Sending feedback data:', feed);

      const response = await axios.post(
        'http://localhost:9090/feedback/postfeed',
        feed,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('API Response:', response.data);

      // Assuming the data has been successfully stored, navigate to another page
      navigate('/');
    } catch (error) {
      console.error('Error updating:', error);
    }
  };

  return (
    <div className='wrap'>
    <div className="Header">
        <h1 className='title'>NIPO</h1>
        <div className='cards'>
          <div className='btn'>
            <img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/home"}>LEARN</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/letters"}>LETTERS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/leaderboard"}>LEADERBOARD</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/quests"}>QUESTS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/shop"}>SHOP</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://simg-ssl.duolingo.com/avatars/1265336797/pf242vSyXG/medium' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/profile"}>PROFILE</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/more"}>MORE</Link></p>
          </div>
        </div>
      </div>
    <div className="feedcon">
      <div className="feedback-container">
        <div className="feedcon1">
          <p className="feedpara">FEEDBACK</p>
        </div>
        <form className="feedback-form">
          <h1 className="feedhead1">Name :</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />

          <h1 className="feedhead2">Email :</h1>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />

          <h1 className="feedhead3">ID :</h1>
          <input
            type="text"
            name="id"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => onInputChange(e)}
          />

          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => onInputChange(e)}
            placeholder="Type your feedback here..."
          ></textarea>

          <button type="submit" onClick={handlefeedback}>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Admin;