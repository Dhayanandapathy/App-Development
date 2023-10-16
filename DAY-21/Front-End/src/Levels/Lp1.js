import React, { useState } from 'react';
import './Myst.css';
import aimg from './A.png';
import bimg from './AI.png';
import { Link } from 'react-router-dom';
import speak from "../txt-to-speech/index";
import PopupMessage from '../PopupMessage';
import Celebration from './Celebration'; // Import the Celebration component


export default function T1() {
  const [text, setText] = useState("aye");
  const [showPopup, setShowPopup] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false); 
  const MyVoiceAssistant = speak();

  function onAskToSpeak() {
    return MyVoiceAssistant.speak(text);
  }

  function handleOp2Click() {
    // Show the celebration when "op2" is clicked
    setShowCelebration(true);

    // Automatically close the celebration after a few seconds
    setTimeout(() => {
      setShowCelebration(false);
    }, 5000);
  }

  function handleOp3Click (){
    setShowPopup(true); 
  }

  return (
    <>
      <div>
        <p className='hd'>What is the sound does this Make?</p>
      </div>

      <div className='su'>
        <img className='imgt' onClick={() => { setText("aye"); onAskToSpeak(); }} src={bimg} />
        <div className='buts'>
          <button className='op1' onClick={handleOp3Click}>o</button>
          <button className='op3' onClick={handleOp3Click}>e</button>
          <button className='op3' onClick={handleOp2Click}>ai</button>
        </div>
      </div>

      <div className='levfoot'>
        <button className='back'><Link style={{ textDecoration: "none", color: "inherit" }} to={'/levl12'}>BACK</Link></button>
        <button className='skip'><Link style={{ textDecoration: "none", color: "inherit" }} to={'/lp1'}>SKIP</Link></button>
      </div>

      {showPopup && <PopupMessage message="Wrong answer! Please try again." onClose={() => setShowPopup(false)} />}
      {showCelebration && <Celebration onClose={() => setShowCelebration(false)} />}
    </>
  );
}
