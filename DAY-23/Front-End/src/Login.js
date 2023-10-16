import './Style.css';
import React, { useState,useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"; // Import useDispatch for Redux
import { setName } from "./loginreducer";
import axios from 'axios';

function Login() {
  const [ps, setPs] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get dispatch from Redux

  const handleLogin = async () => {
    try {
      if (email.trim() === "" || password.trim() === "") {
        console.error('Please fill in both username and password');
        return;
      }

      const response = await axios.post('http://localhost:9090/api/v1/auth/login', {
        email: email,
        password: password
      });

      if (response.status === 200) {

        window.localStorage.setItem("token",response.data.token)
        window.localStorage.setItem("uid",response.data.uid)
        // Authentication successful, set the name in Redux
        const name = response.data.name; // Adjust this based on your API response
        dispatch(setName(name));

        if (email.includes("null")) {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } else {
        // Authentication failed
        console.error('Authentication failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="logo">
          {ps && (
            <div className="login-wrapper">
              <div className="input-box">
                <div className="input-label">Username</div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="loginemailInput"
                />
              </div>

              <div className="input-box">
                <div className="input-label">
                  <span>Password</span>
                  <p>Forgot password?</p>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  id="loginPasswordInput"
                />
              </div>

              <button className="submit-btn" onClick={handleLogin}>
                Submit
              </button>

              <div className="info" onClick={() => navigate("/signup")}>
                <span>
                  New to NIPO?
                  <button
                    style={{ border: "none", color: "blue", cursor: "pointer" }}
                    onClick={() => {
                      setPs(false);
                    }}
                  >
                    Create an account.
                  </button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
