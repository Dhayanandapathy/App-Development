import Login from './Login';
import logoss from './logo.jpg'
function Signup() {

  return (
    <div className='body'>
    <div className="container">
        <div className="logo">
        <img src={logoss} alt='logos' width="350" height="500"/>
           {/* <img src="https://ariafilm.pl/wp-content/uploads/2021/07/Cinekid_af4.png" width="330" height="80"/>*/}
        </div>
        
        <div className="login-wrapper">
            <div className="input-box">
                <div className="input-label">Stuent ID</div>
                <input type="text" required/>
                <div className="input-label">Username</div>
                <input type="text" required/>
            </div>

            <div className="input-box">
                <div className="input-label">
                    <span>Password</span>
                </div>
                <input type="password"required/>
            </div>
          
            <button className="submit-btn">
                Sign Up
            </button>
            <div className="info">
            <span> 
            <p>Already have an account?</p>
                </span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Signup;