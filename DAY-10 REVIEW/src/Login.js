import './Style.css'
import Logoss from './logo.jpg'
import { useState } from "react"
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'
import store from './store'
import { setName } from "./loginreducer"

function Login() {

    const [ps, setps] = useState(true)
    let nav = useNavigate();
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
                            <input id='loginUserNameInput' type="text" required />
                        </div>


                        <div className="input-box">
                            <div className="input-label">
                                <span>Password</span>
                                <p>Forgot password?</p>
                            </div>
                            <input type="password" required />
                        </div>



                        <button className="submit-btn" onClick={() => {
                            const name = document.querySelector("#loginUserNameInput").value;
                            store.dispatch(setName(name))
                            if (name.includes("@admin")) {
                                nav("/admin")
                                return
                            }
                            nav("/home")

                        }}>
                            Submit
                        </button>
                        <div className="info">
                            <span>New to NIPO?
                                <button style={{ border: "none", color: "blue", cursor: "pointer" }} onClick={() => { setps(false) }}>  Create an account.</button>
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

                            <button className="submit-btn" onClick={() => { setps(true) }}>
                                Sign Up
                            </button>
                            <div className="info" onClick={() => { setps(true) }}>
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