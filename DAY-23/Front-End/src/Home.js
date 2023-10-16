import IMAGE from './logo.jpg'
import './Home.css'
import store from './store';
import myimage from './l1.png'
import limage from './lock.png'
import lemage from './lc.png'
import lamage from './pl.png'
import lzmage from './bl.png'
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import qimg from './quest.png'
import himg from './st.png'
import Learnles from './Learnles';
function Home() {
  
  const name = store.getState().name.name
  const [showMoreButtons, setShowMoreButtons] = useState(false);

  const toggleMoreButtons = () => {
    setShowMoreButtons(!showMoreButtons);
  };

  const moreButtonsStyle = {
    display: showMoreButtons ? "block" : "none",
  };

  return (
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
        {/*  <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg' />
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/more"}>MORE</Link></p>
  </div>*/}
   <div className="btn" onMouseEnter={toggleMoreButtons} onMouseLeave={toggleMoreButtons}>
        <img
          className="im"
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg"
        />
        <p className="txt">MORE</p>
        <div className="more-buttons" style={moreButtonsStyle}>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/VideoClass"}>
            <button>VIDEO MATERIALS</button>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/offlinecourse"}>
            <button>OFFLINE CLASSES</button>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/lettersadmin"}>
            <button>ASSESMENTS</button>
          </Link>
        </div>
      </div>
        </div>
      </div>
      <div className='abc'>
        <h1 className='greet-person-home'>Welcome {name}</h1>
        <div className='welcome'>
          <div className='wlh'>  <p>Unit 1</p></div>
          <br></br>
          <div className='wlt'>
            <p>Pair Letters and Sounds</p>
          </div>

          <div className='progress'>
         {/*   <div className='sth'>
            <img className='starthere' src={himg}></img>
  </div>*/}
            <Link to={"/.levl1"}><img className='l1' src={myimage}/></Link>

          </div>
          <div className='nextlevel'>
            <img className='l2' onClick='' src={limage} />
          </div>
          <div className='nextlevel'>
            <img className='l3' onClick='' src={limage} />
          </div>
          <div className='nextlevel'>
            <img className='l4' onClick='' src={limage} />
          </div>
          <div className='nextlevel'>
            <img className='l5' onClick='' src={lemage} />
          </div>
          <Learnles/>
      
          
        </div>
          {/* <h1 className='greet-person-home'>Welcome {name}</h1> */}
        
      

      </div>
      <div className='footer'>
        <div className='left'>
        <div className='bun'>
          <div className='bun_wrap'> 
            <img className='imgbun' src='https://i.pinimg.com/originals/c9/5f/ed/c95feda97082d86ee8d541c1fa315b46.png'/>
          </div>
          </div>  
          <div className='fire'>
            <div className='fir-wrap'>
            <img className='imgfire' src='https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg'/>
            </div>
          </div>
          <p className='fn'> 2</p>
          <div className='gem'>
          <div className='gem-wrap'>
          <img className='imggem' src='https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg'/>
          </div>
          </div>
          <p className='fn1'> 505</p>
          <div className='heart'>
          <div className='heart-wrap'>
          <img className='imgheart' src='https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg'/>
          </div>
          </div>
          <p className='fn2'>2</p>
        </div>
        <div className='bun_options'>
        <div className='myc1'><p>MY COURSE</p></div>
        <div className='myc2'><p>HINDI</p></div>
        <div className='myc3'>ADD NEW COURSE</div>
        </div>

          <div class="lboard">
            <div>
              <h2 class="ltitle">Unlock Leaderboards!</h2>
              <div class='lwrap'>
                <img class="imglb" src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg"/>
                  <div class="lbmsg">Complete 10 more lessons to start competing</div>
              </div>
             </div>
          </div>
          <div className='quest'>
            <div className='quest-wrap'>
              <img className='imgquest' src={qimg}/>
            </div>
          </div>
          <div className='footdet'>
            <h2 className='footh2'><Link style={{textDecoration:"none",color:"inherit"}}to ={'/about'}>About</Link></h2>
            <h2 className='footh2'><Link style={{textDecoration:"none",color:"inherit"}}to={'/terms'}>Terms</Link></h2>
            <h2 className='footh2'><Link style={{textDecoration:"none",color:"inherit"}}to={'/policy'}>Policy</Link></h2>
            <h2 className='footh2'><Link style={{textDecoration:"none",color:"inherit"}}to={'/carrer'}>Carrers</Link></h2>
          </div>
        </div>
        </div>   
  );
}
export default Home;