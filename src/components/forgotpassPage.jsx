import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/sidemessage.css'
import './styles/forgotpassword.css'
import './styles/startup.css'

import Logo from './assets/logo.png'


const Login = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <>
    <div class="main-container">
    {screenWidth >= 768 && <SideMessage />}
        <ForgotPassword/>
    </div>
    </>
  );
}

const SideMessage = () => {
    
    const navigate = useNavigate();

    const handleSignUpButtonClick = () => {
        navigate('/signup');
    };

    return (
        <div class="side-message-container">
            <img class="logo-image-side " src={Logo} alt="My Image"/>
            <h1 class="medistation-h1">MEDISTATION</h1>
            <div class="strip">
                New Here?
            </div>
            <p class="quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit, sed do eiusmod aliqua.
            </p>
            <button class="signup-button" onClick={handleSignUpButtonClick}>SIGN UP</button>
        </div>
    );
}

const ForgotPassword = () => {
    return (
        <div class="forgot-password-container">
            <h1 class="forgot-h1">Forgot Password</h1>
            <p class="forgot-sub">
            did you forgot your password? 
            <br />you can reset it here.
            </p>
            <input type='text' class="input-forgot" placeholder='Email'></input>
            <p class='description'>Please provide us your email address so we can contact you, 
            <br></br>and send you a link to get back into your account</p>
            <button class="submit-button">SUBMIT</button>
        </div>
    );
}

export default Login;