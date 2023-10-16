
import './Profile.css'
import store from './store';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState(false);

  const token = localStorage.getItem('jwtToken');

  const uid = localStorage.getItem('uid');

  const headers = {
    'Authorization': `Bearer ${token}`
  }
  const fetchUser = async () => {
    console.log("new");
    try {
      const response = await fetch(`http://localhost:9090/api/v1/auth/getById/${uid}`);
      const data = await response.json()
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }

  };
  useEffect(() => {
    fetchUser()
  }, [])


  /* const [users, setUsers] = useState([]);
   useEffect(() => {
     
     axios.get('/api/users')
      fetch("http://localhost:8080/api/learns/getAll",{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}})
     .then(res=>res.json())
       .then((response) => {
       
         setUsers(response.data);
       })
       .catch((error) => {
         console.error('Error fetching user data:', error);
       });
   }, []); */

  return (
    <div className='wrap'>
      <div className="Header">
        <h1 className='title'>NIPO</h1>
        <div className='cards'>
          <div className='btn'>
            <img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/home"}>LEARN</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/letters"}>LETTERS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/leaderboard"}>LEADERBOARD</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/quests"}>QUESTS</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/shop"}>SHOP</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://simg-ssl.duolingo.com/avatars/1265336797/pf242vSyXG/medium' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/profile"}>PROFILE</Link></p>
          </div>
          <div className='btn'>
            <img className='im' src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg' />
            <p className='txt'><Link style={{ textDecoration: "none", color: "inherit" }} to={"/more"}>MORE</Link></p>
          </div>
        </div>
      </div>
      <div className="profile-avatar">
        <img
          src="https://pic.onlinewebfonts.com/thumbnails/icons_274763.svg"
          alt="Profile Avatar"
          className="avatar-image"
        />
      </div>

      <div className="newcon">
        <p className="hiar">PERSONAL DETAILS</p>
        <p className="hiar1">FIRST NAME</p>
        <p className="hiar2">Username</p>
        <p className="ans">{user.name}</p>
        <p className="ans1">{user.username}</p>
        <p className="hiar3">LANGUAGE</p>
        <p className="hiar4">EMAIL</p>
        <p className="ans2">HINDI</p>
        <p className="ans3">{user.email}</p>
        <p className="hiar5">PASSWORD</p>
        <p className="ans5">****</p>
        <button className='ot' >UPDATE</button>
      </div>
      <p className="topper">Statistics</p>
      <div className='smallcon'>
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg" className='pictures1'>
        </img>
        <p className='numer'>0</p>
        <p className='streak'>Day Steak</p>
      </div>

      <div className='smallcon1'>
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg" className='pictures2'>
        </img>
        <p className='numer'>28</p>
        <p className='streak'>Total XP</p>
      </div>

      <div className='smallcon2'>
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/1b4fb092de75e4ecefd8e92f10b4ddd2.svg" width="11%" className='pictures2'>
        </img>
        <p className='numer2'>28</p>
        <p className='streak2'>Total XP</p>
      </div>
      <div className='smallcon3'>
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/105f8a43d07cdbbe393f9588eba784f8.svg" width="11%" className='pictures2'>
        </img>
        <p className='numer3'>0</p>
        <p className='streak3'>Top 3 Finisher</p>
      </div>

    </div>



  )

}
export default Profile;