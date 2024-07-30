import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register =()=>{
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };
    const goTohome=()=>{
          navigate("/home")
    }
    return(
        <>
           <div className="container body4">
          <div className="Form Register-form">
                <h2>Register</h2>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <i className='bx bxs-user'></i>
                        <label htmlFor="#">Username</label>
                        <input type="text" placeholder="Enter Your Username*" 
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <i className='bx bxs-envelope'></i>
                        <input type="text" placeholder="Enter Your Password*" 
                          value={password}
                          onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="#">Password</label>
                    </div>
                    <div className="input-box">
                        <i className='bx bxs-envelope'></i>
                        <input type="text" placeholder="Enter Your Password*" />
                        <label htmlFor="#">Confirm Password</label>
                    </div>
                    <div className="forgot-section">
                        <span><input type="checkbox" id="checked" /> Remember Me</span>
                        <span><a href="#">Forgot Password ?</a></span>
                    </div>
                    <button className="btn loginBtn">Register</button>
                </form>
                <p>Or Sign up using</p>
                <div className="social-media">
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-twitter'></i>
                </div>
                <p className="LoginBtn"><a href="/">Login Now</a></p>
            </div>
            </div>
        </>
    )
}
export default Register