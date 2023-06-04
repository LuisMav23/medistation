import React from "react";
import "./styles/homepagetopbar.css";
import "./styles/homepageleftside.css";

import Logo from "./assets/logo.png";
import Home from "./assets/icons/home-icon.png";
import Search from "./assets/icons/search-icon.png";
import Messages from "./assets/icons/message-icon.png";
import Notifications from "./assets/icons/notifications-icon.png";
import Create from "./assets/icons/create-icon.png";
import Profile from "./assets/icons/profile-icon.png";
import Settings from "./assets/icons/settings-icon.png";
import Logout from "./assets/icons/logout-icon.png";

import './styles/homepage.css'
import Logo from './assets/logo.png'

const HomePage = () => {
  return (
    <>
      <TopBar />
      <div class="main-container">
        <LeftSideBar />
      </div>
    </>
  );
};

const TopBar = () => {
  return (
    <div class="top-container">
      <img class="logo-image" src={Logo} alt="Logo" />
    </div>
  );
};

const LeftSideBar = () => {
  return (
    <div class="bar-container">
        <div class="app-name">
          <p class="app-name-text">MEDISTATION</p>
        </div>
      <div class="bar">
        <div class="bar-item-home">
          <img class="bar-item-image" src={Home} alt="Home" />
          <p class="bar-item-text">Home</p>
          </div>
          <div class="bar-item">
          <img class="bar-item-image" src={Search} alt="Search" />
            <p class="bar-item-text">Search</p>
          </div>
          <div class="bar-item">
          <img class="bar-item-image" src={Messages} alt="Messages" />
            <p class="bar-item-text">Messages</p>
          </div>
          <div class="bar-item">
          <img class="bar-item-image" src={Notifications} alt="Notifications" />
            <p class="bar-item-text">Notifications</p>
          </div>
          <div class="bar-item">
          <img class="bar-item-image" src={Create} alt="Create" />
            <p class="bar-item-text">Create</p>
          </div>
          <div class="bar-item">
          <img class="bar-item-image" src={Profile} alt="Profile" />
            <p class="bar-item-text">Profile</p>
          </div>
          <div class="bar-item">
          <img class="bar-item-image" src={Settings} alt="Settings" />
            <p class="bar-item-text">Settings</p>
          </div>
          <div class="bar-item-logout">
        <img class="bar-item-image" src={Logout} alt="Logout" />
        <p class="bar-item-text">SIGN OUT</p>
        </div>
        </div>
      </div>
  );
};

export default HomePage;
