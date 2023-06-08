import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/sidemessage.css";
import "./styles/mainsignup.css";
import "./styles/startup.css";

import Logo from "./assets/logo.png";



const Signup = () => {
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
      <div className="main-container">
        {screenWidth >= 768 && <SideMessage />}
        <MainSignup />
      </div>
    </>
  );
};

const SideMessage = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="side-message-container">
      <img className="logo-image-side " src={Logo} alt="My Image" />
      <h1 className="medistation-h1">MEDISTATION</h1>
      <div className="strip">Have an account already?</div>
      <p className="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        <br />
        elit, sed do eiusmod aliqua.
      </p>
        <button className="signup-button" onClick={handleLoginButtonClick}>LOG IN</button>
    </div>
  );
};

const MainSignup = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
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
    <div className="main-signup-container">
      {screenWidth <= 768 && <img class="logo-image" src={Logo} alt="My Image"/>}
      {screenWidth <= 768 && <h1 class="medistation-h1">MEDISTATION</h1>}
      <h1 className="login-h1">Sign Up Now!</h1>
      <p className="login-sub">
        start your relaxing and mindful journey with us.
      </p>
      <input type="text" className="input" placeholder="Username"></input>
      <div className='first-last-name'>
        <input type="text" className="input" placeholder="First Name"></input>
        <input type="text" className="input" placeholder="Last Name"></input>
      </div>
        <input type="email" className="input" placeholder="Email"></input>
        <input type="password" className="input" placeholder="Pasword"></input>
      <div className="birthday-gender">
      <input
        type="date"
        className="input"
        placeholder="Birthday"
        id="dateInput"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <select className="input">
        <option value="" disabled selected hidden>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Fiemale</option>
      </select>  
      </div>
      <button className="signin-button">SIGN UP</button>
    </div>
  );
};

export default Signup;
