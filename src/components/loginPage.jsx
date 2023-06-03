
import React from 'react';
import './styles/sidemessage.css'
import './styles/mainlogin.css'
import './styles/startup.css'

import Logo from './assets/logo.png'

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div class="main-container">
        <SideMessage/>
        <MainLogin/>
    </div>
    </>
  );
}

const SideMessage = () => {
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
            <Link to="/signup">
            <button class="signup-button">SIGN UP</button>
            </Link>
            
        </div>
    );
}

const MainLogin = () => {
    return (
        <div class="main-login-container">
            <h1 class="login-h1">Login to Your Account</h1>
            <p class="login-sub">login using your social networks</p>
            <input type='text' class="input" placeholder='Email'></input>
            <input type='password' class="input" placeholder='Pasword'></input>
            <button class="signin-button">SIGN IN</button>
        </div>
    );
}

export default Login;