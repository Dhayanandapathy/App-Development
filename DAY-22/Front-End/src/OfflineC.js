import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './OfflineC.css'

function OfflineC() {
  const [offline, setOffline] = useState({
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    courses: ""
  });

  const navigate = useNavigate();
  const { name, email, phonenumber, address, courses } = offline;

  const onSubmit = async (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/api/learns/postoffline", { ...offline }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  const onInputChange = (e) => {
    setOffline({ offline, [e.target.name]: e.target.value });
  };

  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setOffline({ offline, courses: e.target.value });
  }

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

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="oncon" >
          <p className="onoff">OFFLINE LEARNING</p>
          <div>
            <p className="onname">Name</p>
            <input type="text" id="name" name="name" className="input" placeholder="Enter your name" value={name} onChange={(e) => onInputChange(e)} />

            <p className="onname">Email</p>
            <input type="text" id="email" name="email" className="input" placeholder="Enter your email" value={email} onChange={(e) => onInputChange(e)} />

            <p className="onname">Phone Number</p>
            <input type="text" id="phonenumber" name="phonenumber" className="input" placeholder="Enter your number" value={phonenumber} onChange={(e) => onInputChange(e)} />

            <p className="onname">Address</p>
            <input type="text" id="address" name="address" className="input" placeholder="Enter your address" value={address} onChange={(e) => onInputChange(e)} />


            <p className="onname">Courses</p>


            {/* Dropdown button for course selection */}
            <p className="onname">Courses</p>
            <select
              id="courseSelect"
              name="courseSelect"
              className="input"
              value={selectedCourse}
              onChange={(e) => handleCourseChange(e)}
            >
              <option value="" disabled>Select a course</option>
              <option value="course1">Hindi</option>
              <option value="course2">Korean</option>
              <option value="course3">French</option>
            </select>
            {selectedCourse && (
              <p className="onname">Selected Course: {selectedCourse}</p>
            )}
          </div>
          <div className="btn">
            <button type="Submit" className="sub">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default OfflineC;