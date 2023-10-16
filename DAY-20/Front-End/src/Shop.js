import React from "react"
import gimage from './green.jpg'
import { Link } from "react-router-dom"
import './Shop.css';
import qimg from './quest.png'
function Shop(){
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
            <p className='txt'><Link style={{textDecoration:"none",color:"inherit"}}to={"/lettersadmin"}>MORE</Link></p>
          </div>
        </div>
      </div>
      <div className="vun">
      <div className="image-container">
      <img className="let" src={gimage} alt="Background Image" />
      <div className="text-overlay">
        <h1 className="hds">Start a learning plan!</h1>
        <p className="prs">Save on Super Nipo when you learn with friends</p>
        <button className="bts">Learn More</button>
      </div>
      <p className="hea">Hearts</p>

      <div>
        <div className="redheart">
        <div className="line1"></div>
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/547ffcf0e6256af421ad1a32c26b8f1a.svg" width="150px" height="150px" className="img1"/>
        <p className="pars">Refill Hearts</p>
        <p className="pras">Get full hearts you can worry less </p>
        <p className="pras">about making mistakes in a lesson.</p>
        </div>

        <div className="gheart">
        <div className="line2"></div>
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/4f3842c690acf9bf0d4b06e6ab2fffcf.svg" width="150px" height="150px" className="img2"/>
        <h1 className="pars">Unlimited hearts</h1>
        <h className="pras">Never run out of hearts with Super!</h>
        <button className="btts">Free Trail</button>
        
        </div>

        <div>
            
        <h1 className="had">Power-Ups</h1>
        <div className="line3"></div>
        <div className="pun">
        <img src="https://static.wikia.nocookie.net/duolingo/images/a/a7/Streak-freeze-new.svg" width="150px" height="150px"className="img3"/>
        <h1 className="str">Streak Freeze</h1>
        <p className="strs">Streak Freeze allows your streak one full day of inactivity.</p>
        <p className="strs"> </p>
        <button className="btstr">Get For: 200</button>
        </div>

      
        <div  className="line4"></div>
            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/47112600732328e46768927036578c8b.svg"  width="30%" height="20%" className="img4" />
            <h1 className="cha">Double or Nothing</h1>
            <h className=" hac">Double 50 gem wager by </h>
            <h className=" hac">maintaining a 7 day streak.</h>
            <button className="chbt">Get For: 50</button>
        </div>
      </div>
      </div>
        
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
      
    )
}
export default Shop;

