import React, { useEffect, useState } from 'react';
import './Myst.css';
import aimg from './A.png';
import { Link, useNavigate } from 'react-router-dom';
import speak from "../txt-to-speech/index";
import PopupMessage from '../PopupMessage';
import Celebration from './Celebration'; // Import the Celebration component
import Axios from 'axios'
import axios from 'axios';
export default function T1() {
  const [text, setText] = useState("AH");
  const [showPopup, setShowPopup] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [datzz, setDatzz] = useState([])
  const [top, setTop] = useState(0)
  const MyVoiceAssistant = speak();
  const nav = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9090/api/learns/getAllf", { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } })
      .then(res => res.json())
      .then(data => {
        setDatzz(data);
      })
  }, [])

  function moveThen() {
    if (top + 100 < datzz.length * 100) {
      setTop((pre) => pre + 100)
    }
    else {
      alert("Finish");
      nav("/home")
    }
  }

  function onAskToSpeak() {
    return MyVoiceAssistant.speak(text);
  }

  function handleOp2Click() {
    // Show the celebration when "op2" is clicked
    setShowCelebration(true);
    moveThen()

    // Automatically close the celebration after a few seconds
    setTimeout(() => {
      setShowCelebration(false);
    }, 5000);
  }

  function handleOp3Click() {

    // Axios.get("http://localhost:8080/x").then(res => console.log(res.data))
    setShowPopup(true);
  }

  return (
    <>
      <div className='lvl1-content'>
        <div style={{ top: `-${top}%`, height: `${datzz.length * 100}%` }} className='lvl1-runner'>
          {
            datzz.map((elem) => {
              return (
                <>
                  <div className='letter-box'>
                    <div>
                      <p className='hd'>{elem.letter}</p>
                    </div>

                    <div className='su'>
                      <img className='imgt' onClick={() => { setText("AH"); onAskToSpeak(); }} src={aimg} />
                      <div className='buts'>
                        <button className='op1' onClick={(() => {
                          return elem.option1 === elem.correct ? handleOp2Click.bind(this) : handleOp3Click.bind(this)
                        })()}>{elem.option1}</button>
                        <button className='op3' onClick={(() => {
                          return elem.option2 === elem.correct ? handleOp2Click.bind(this) : handleOp3Click.bind(this)
                        })()}>{elem.option2}</button>
                        <button className='op3' onClick={(() => {
                          return elem.option3 === elem.correct ? handleOp2Click.bind(this) : handleOp3Click.bind(this)
                        })()}>{elem.option3}</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className='levfoot'>
        <button className='back'><Link style={{ textDecoration: "none", color: "inherit" }} to={'/home'}>BACK</Link></button>
        <button className='skip' onClick={moveThen.bind(this)}>SKIP</button>
      </div>

      {showPopup && <PopupMessage message="Wrong answer! Please try again." onClose={() => setShowPopup(false)} />}
      {showCelebration && <Celebration onClose={() => setShowCelebration(false)} />}
    </>
  );
}
