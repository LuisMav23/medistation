
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles/sidemessage.css'
import './styles/mainlogin.css'
import './styles/startup.css'

import Logo from './assets/logo.png'

import { Link } from 'react-router-dom';

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
            <MainLogin/>
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
            <img class="logo-image" src={Logo} alt="My Image"/>
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

const MainLogin = () => {
    const navigate = useNavigate();

    const handleSignInButtonClick = () => {
        navigate('/homepage');
    }
    const handleSignUpButtonClick = () => {
        navigate('/signup');
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgot-password');
    };

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
        <div class="main-login-container">
            {screenWidth <= 768 && <img class="logo-image" src={Logo} alt="My Image"/>}
            {screenWidth <= 768 && <h1 class="medistation-h1">MEDISTATION</h1>}
            <h1 class="login-h1">Login to Your Account</h1>
            <p class="login-sub">login using your social networks</p>
            <input type='text' class="input" placeholder='Email'></input>
            <input type='password' class="input" placeholder='Pasword'></input>
            <p class='forgot-password' onClick={handleForgotPasswordClick}>Forgot Password?</p>
            <button class="signin-button" onClick={handleSignInButtonClick}>SIGN IN</button>
            {screenWidth <= 768 && <button class="signup-button" onClick={handleSignUpButtonClick}>SIGN UP</button>}
        </div>
    );
}

export default Login;