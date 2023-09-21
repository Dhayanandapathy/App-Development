import IMAGE from './logo.jpg'
import './Home.css'
import store from './store';

function Home() {
  const name =store.getState().name.name
  return (
<div className='wrap'>  
    <div className="Header">
      <h1 className='title'>NIPO</h1>
      <div className='cards'>
      <div className='btn'> 
      <img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'/> 
      <p className='txt'>LEARN</p>
      </div>
      <div className='btn'>  
      <img className='im'src='https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg'/>
      <p className='txt'>LETTERS</p>
      </div>
      <div className='btn'> 
      <img className='im'src='https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg'/> 
      <p className='txt'>LEADERBOARD</p>
      </div>
      <div  className='btn'>  
      <img className='im'src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg'/>
      <p className='txt'>QUESTS</p>
      </div>
      <div  className='btn'>  
      <img className='im'src='https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg'/>
      <p className='txt'>SHOP</p>
      </div>
      <div className='btn'>  
      <img className='im'src='https://simg-ssl.duolingo.com/avatars/1265336797/pf242vSyXG/medium'/>
      <p className='txt'>PROFILE</p>
      </div>
      <div className='btn'> 
      <img className='im'src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg'/> 
      <p>MORE</p>
      </div>
      </div>
    </div>
    <div className='welcome'> 
    <p>UNIT 1 </p>
    <br></br>
    <p>PAIR LETTERS AND SOUNDS</p>
    </div>
    <div className='profile' >
      <h1 className='greet-person-home'>Welcome {name}</h1>
    </div>
    <div className='progress'>
    </div>
    </div>
    
  );
}
export default Home;