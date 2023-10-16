import React, { useState } from 'react';
import './Myst.css';
import aimg from './A.png';
import { Link } from 'react-router-dom';
import speak from "./txt-to-speech/index";
import PopupMessage from './PopupMessage'; // Import the PopupMessage component

export default function T1() {
  const [text, setText] = useState("AH");
  const [showPopup, setShowPopup] = useState(false); // State to control the popup
  const MyVoiceAssistant = speak();

  function onAskToSpeak() {
    return MyVoiceAssistant.speak(text);
  }

  function handleOp3Click() {
    setShowPopup(true); // Show the popup when "op3" is clicked
  }

  function closePopup() {
    setShowPopup(false); // Close the popup when the Close button is clicked
  }

  return (
    <>
      <div>
        <p className='hd'>What is the sound does this Make?</p>
      </div>

      <div className='su'>
        <img className='imgt' onClick={() => { setText("AH"); onAskToSpeak(); }} src={aimg} />
        <div className='buts'>
          <button className='op1'>a</button>
          <button className='op3' onClick={handleOp3Click}>p</button>
          <button className='op3'>e</button>
        </div>
      </div>

      <div className='levfoot'>
        <button className='back'><Link style={{ textDecoration: "none", color: "inherit" }} to={'/home'}>BACK</Link></button>
        <button className='skip'>SKIP</button>
      </div>

      {showPopup && <PopupMessage message="Wrong answer! Please try again." onClose={closePopup} />}
    </>
  );
}
