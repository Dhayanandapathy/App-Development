import React from "react";
import { Link } from "react-router-dom";

function Crp(){

    return(
        <div className="body">
      <div className="container">
        <div className="logo">
            <div className="login-wrapper">
            <div className="input-box">
            <div className="input-label">Name</div>
                <input
                  type="text" required />
              </div>

              <div className="input-box">
                <div className="input-label">Username</div>
                <input
                  type="text" /> </div>

              <div className="input-box">
                <div className="input-label">
                  <span>Password</span>
                  <p>Forgot password?</p>
                </div>
                <input
                  type="password" required/>
              </div>

              <button className="submit-btn">
                UPDATE
              </button>

              
            </div>
   
        </div>
      </div>
    </div>
    )
}

export default Crp;