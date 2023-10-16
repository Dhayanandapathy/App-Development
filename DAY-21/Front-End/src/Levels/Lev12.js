import React, { useState } from 'react';
import './Myst.css';
import dimg from './AI2.png';
import cimg from './OO.png';
import eimg from './O2.png';
import fimg from './AA.png';

import { Link } from 'react-router-dom';
import speak from "../txt-to-speech/index";
import PopupMessage from '../PopupMessage';
import Celebration from './Celebration'; // Import the Celebration component

export default function Level12() {
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
        <p className='hd'>Select the correct charcter for "U"</p>
      </div>

      <div className='om'>
      <img className='imgo1' onClick={handleOp3Click} src={dimg} />
        <img className='imgto2'  onClick={handleOp3Click}src={cimg} />
        <img className='imgto3' onClick={handleOp2Click}src={eimg} />
        <img className='imgto4'  onClick={handleOp3Click}src={fimg} />
        {/*
        <img className='imgo1' onClick={() => { setText("namaste dhaya"); onAskToSpeak(); }} src={dimg} />
        <img className='imgto2' onClick={() => { setText("namaste dhaya"); onAskToSpeak(); }} src={cimg} />
        <img className='imgto3' onClick={() => { setText("namaste dhaya"); onAskToSpeak(); }} src={eimg} />
        <img className='imgto4' onClick={() => { setText("namaste dhaya"); onAskToSpeak(); }} src={fimg} />*/}
    { /*   <div className='buts'>
          <button className='op1' onClick={handleOp3Click}>o</button>
          <button className='op3' onClick={handleOp3Click}>e</button>
          <button className='op3' onClick={handleOp2Click}>a</button>
        </div>*/}
      </div>

      <div className='levfoot'>
        <button className='back'><Link style={{ textDecoration: "none", color: "inherit" }} to={'/.levl1'}>BACK</Link></button>
        <button className='skip'><Link style={{ textDecoration: "none", color: "inherit" }} to={'/lp1'}>SKIP</Link></button>
      </div>

      {showPopup && <PopupMessage message="Wrong answer! Please try again." onClose={() => setShowPopup(false)} />}
      {showCelebration && <Celebration onClose={() => setShowCelebration(false)} />}
    </>
  );
}
