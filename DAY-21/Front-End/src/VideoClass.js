import React from "react";
import { Link } from "react-router-dom";
import './VideoClass.css'
import store from './store';



 
function VideoClass() {
    const users = store.getState().name.users
    console.log(users);
    const data = [
      
    ];
    const progress = 60;
 
    return(
<div className='wrap'>
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
  <div className="appimg">
  <div className="App">
    <div className='mooku'>
    <header className="App-heer">
      <h1>ONLINE COURSE</h1>
    </header>
    
    

<div classname="video1">
<div>
    <h2 className='nikitha1'>Video link 1</h2>

<video> width="640" height="360" controls</video>
<iframe width="560" height="315" src="https://www.youtube.com/embed/U3MfXjiL0rM" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

  


  <div classname="video2">
<div>
    <h2 className='nikitha1'>Video link 2</h2>

<video> width="640" height="360" controls</video>
<iframe width="560" height="315" src="https://www.youtube.com/embed/jeyQyVQminc" frameborder="0" allowfullscreen></iframe>
    </div>
</div>


<div classname="video3">
<div>
    <h2 className='nikitha1'>Video link 3</h2>

<video> width="640" height="360" controls</video>
<iframe width="560" height="315" src="https://www.youtube.com/embed/i1ptPKaAw7Q" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
<div classname="video3">

<div>
    <h2 className='nikitha1'>Video link 4</h2>

<video> width="640" height="360" controls</video>
<iframe width="560" height="315" src="https://www.youtube.com/embed/KfM-bA6x1Bw" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

</div>
</div>
</div>
</div>
)
}
export default VideoClass;