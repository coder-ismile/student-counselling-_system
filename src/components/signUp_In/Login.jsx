import React, { useState } from "react";
// import"./style.css"
import { useNavigate } from "react-router-dom";
const Login=()=>{
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
            <div className="Form login-form">
                <h2>Login</h2>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <i className='bx bxs-user'></i>
                        <label htmlFor="#">Username</label>
                        <input type="text" 
                        placeholder="Enter Your Username*"   
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <i className='bx bxs-envelope'></i>
                        <input type="text" placeholder="Enter Your Password*" />
                        <label htmlFor="#">Password</label>
                    </div>
                    <div className="forgot-section">
                        <span><input type="checkbox" 
                        id="checked" 
                        value={password}
                        onChange={(e) => setUsername(e.target.value)}
                        /> Remember Me</span>
                        <span><a href="#">Forgot Password ?</a></span>
                    </div>
                    <button className="btn" onClick={goTohome}>Login</button>
                </form>
                <p>Or Sign up using</p>
                <div className="social-media">
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-twitter'></i>
                </div>
                <p className="RegisteBtn RegiBtn"><a href="/register">Register Now</a></p>
            </div>
          
        </div>
        
        </>
    )
}
   
export default Login 
