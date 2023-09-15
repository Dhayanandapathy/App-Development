import IMAGE from './logo.jpg'
import './home.css'
function home() {
  return (
  
    <div className="Header">
      <img src={IMAGE} alt="no" height="250px" width="250px"/>
      <br/>
      <button className="db">Dashboard  </button>
      <br/>
      <button className="ac">Alphabet Chart</button>
      <br/>
      <button className="lb">Leaderboard</button>
      <br/>
      <button className="profile">Profile</button>
      <br/>
      <button className="logout">Logout</button>
      <br/>
    </div>
  );
}
export default home;