import './Style.css'
import Logoss from './logo.jpg'
import { useState } from "react"
import Signup from './Signup'

function Login() {

    const [ps, setps] = useState(true)

    return (
        <div className="body">
            <div className="container">
                <div className="logo">
                    <img src={Logoss} alt='logos' width="50%" height="100%" />
                    {ps && (<div className="login-wrapper">
                        <div className="input-box">
                            <div className="input-label">Student Id </div>
                            <input type="text" required />
                            <div className="input-label">Username</div>
                            <input type="text" required />
                        </div>


                        <div className="input-box">
                            <div className="input-label">
                                <span>Password</span>
                                <p>Forgot password?</p>
                            </div>
                            <input type="password" required />
                        </div>



                        <button className="submit-btn" >
                            Submit
                        </button>
                        <div className="info">
                            <span>New to NIPO? 
                                <button style={{ border: "none", color: "blue", cursor: "pointer" }} onClick={()=>{setps(false)}}>  Create an account.</button>
                            </span>
                        </div>
                    </div>)}
                    {
                        !ps && (<><div className="login-wrapper">
                            <div className="input-box">
                                <div className="input-label">Stuent ID</div>
                                <input type="text" required />
                                <div className="input-label">Username</div>
                                <input type="text" required />
                            </div>

                            <div className="input-box">
                                <div className="input-label">
                                    <span>Password</span>
                                </div>
                                <input type="password" required />
                            </div>

                            <button className="submit-btn" onClick={()=>{setps(true)}}>
                                Sign Up
                            </button>
                            <div className="info" onClick={()=>{setps(true)}}>
                                <span>
                                    <p>Already have an account?</p>
                                </span>
                            </div>
                        </div></>)
                    }
                </div>
            </div>


        </div>
    )
}

export default Login;