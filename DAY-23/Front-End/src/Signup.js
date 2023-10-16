import { useState } from 'react';
import Login from './Login';
import logoss from './logo.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('');

  const handleSignUp = async () => { 
      const response = await axios.post('http://localhost:9090/api/v1/auth/register',{
        name:name,
        email:email,
        password:password,
        role:"CUSTOMER"
      }).then((response)=>{
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      });
  };
  return (
    <div className='body'>
    <div className="container">
        <div className="logo">

       {/* <img src={logoss} alt='logos' width="350" height="500"/>*/}
           {/* <img src="https://ariafilm.pl/wp-content/uploads/2021/07/Cinekid_af4.png" width="330" height="80"/>*/}
        </div>
        <div> 

        </div>
        <div className="login-wrapper">
            <div className="input-box">
                <div className="input-label">Name</div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>

                <div className="input-label" >Email</div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <div className="input-label">Password</div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button className="submit-btn" onClick={handleSignUp}>
                Sign Up
            </button>
            <div className="info">
            <span> 
            <p><Link to={"/login"}>Already have an account?</Link></p>
                </span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Signup;