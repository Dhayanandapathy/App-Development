import React, { useState } from 'react'
import './Myst.css'
import aimg from './A.png'
import { Link } from 'react-router-dom';
import speak from "./txt-to-speech/index"


export default function T1() {

    const [text, setText] = useState("AH")
    const MyVoiceAssistent = speak();


    function onAskToSpeak() {
        return MyVoiceAssistent.speak(text)
    }   

    return (
        <>
        <div>
            <p className='hd'>What is the sound does this Make?</p> 

        </div>
      
        <div className='su'>
        <img className='imgt' onClick={()=>{setText("AH"); onAskToSpeak()}} src={aimg} /> 
        <div className='buts'>
        <button className='op1'>a</button>
        <button className='op3'>p</button>
        <button className='op3'>e</button>
        </div>
        </div>
        
        
        <div className='levfoot'>
            <button className='back'><Link  style={{textDecoration:"none",color:"inherit"}}to={'/home'}>BACK</Link></button>
            <button className='skip'>SKIP</button>
        </div>
        
           {/* < button className='' onClick={()=>{setText("kha"); onAskToSpeak()}} > Say {text}</button >*/}
        </>
    )
}
    