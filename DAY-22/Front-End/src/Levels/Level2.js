import React, { useState } from 'react';
import './Myst.css';
import gimg from './ND.png';
import { Link } from 'react-router-dom';
import speak from "../txt-to-speech/index";
import PopupMessage from '../PopupMessage';
import Celebration from './Celebration'; // Import the Celebration component

export default function Level2() {
  const [text, setText] = useState("namaste dhaya");
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
        <img className='imgt' onClick={() => { setText("namaste dhaya"); onAskToSpeak(); }} src={gimg} />
        <div className='buts'>
          <button className='op1' onClick={handleOp3Click}>avo dhaya</button>
          <button className='op3' onClick={handleOp2Click}>namaste dhaya</button>
          <button className='op3' onClick={handleOp3Click}>jatha dhaya</button>
        </div>
      </div>

      <div className='levfoot'>
        <button className='back'><Link style={{ textDecoration: "none", color: "inherit" }} to={'/home'}>BACK</Link></button>
        <button className='skip'>SKIP</button>
      </div>

      {showPopup && <PopupMessage message="Wrong answer! Please try again." onClose={() => setShowPopup(false)} />}
      {showCelebration && <Celebration onClose={() => setShowCelebration(false)} />}
    </>
  );
}
