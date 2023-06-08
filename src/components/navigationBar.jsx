import React from "react";
import { useNavigate } from "react-router";

import "./styles/navigationBar.css";

import Home from "./assets/icons/home-icon.png";
import Search from "./assets/icons/search-icon.png";
import Messages from "./assets/icons/message-icon.png";
import Notifications from "./assets/icons/notifications-icon.png";
import Create from "./assets/icons/create-icon.png";
import Profile from "./assets/icons/profile-icon.png";
import Settings from "./assets/icons/settings-icon.png";
import Logout from "./assets/icons/logout-icon.png";

const NavigationBar = ({ selected }) => {
  const navigate = useNavigate();

  return (
    <div class="bar-container">
      {/* App Name */}
      <div class="app-name">
        <p class="app-name-text">MEDISTATION</p>
      </div>

      {/* Navigation Bar */}
      <div class="bar">
        {/* Home */}
        <button
          class={`bar-item ${selected === 'Home' ? 'selected' : ''}`}
          onClick={() => { navigate('/homepage') }}
        >
          <img class="bar-item-image" src={Home} alt="Home" />
          <p class="bar-item-text">Home</p>
        </button>

        {/* Search */}
        <button
          class={`bar-item ${selected === 'Search' ? 'selected' : ''}`}
          onClick={() => { navigate('/search') }}
        >
          <img class="bar-item-image" src={Search} alt="Search" />
          <p class="bar-item-text">Search</p>
        </button>

        {/* Messages */}
        <button
          class={`bar-item ${selected === 'Messages' ? 'selected' : ''}`}
          onClick={() => { navigate('/messages') }}
        >
          <img class="bar-item-image" src={Messages} alt="Messages" />
          <p class="bar-item-text">Messages</p>
        </button>

        {/* Notifications */}
        <button
          class={`bar-item ${selected === 'Notifications' ? 'selected' : ''}`}
          onClick={() => { navigate('/notifications') }}
        >
          <img class="bar-item-image" src={Notifications} alt="Notifications" />
          <p class="bar-item-text">Notifications</p>
        </button>

        {/* Create */}
        <button
          class={`bar-item ${selected === 'Create' ? 'selected' : ''}`}
          onClick={() => { navigate('/create') }}
        >
          <img class="bar-item-image" src={Create} alt="Create" />
          <p class="bar-item-text">Create</p>
        </button>

        {/* Profile */}
        <button
          class={`bar-item ${selected === 'Profile' ? 'selected' : ''}`}
          onClick={() => { navigate('/profile') }}
        >
          <img class="bar-item-image" src={Profile} alt="Profile" />
          <p class="bar-item-text">Profile</p>
        </button>

        {/* Settings */}
        <button
          class={`bar-item ${selected === 'Settings' ? 'selected' : ''}`}
          onClick={() => { navigate('/settings') }}
        >
          <img class="bar-item-image" src={Settings} alt="Settings" />
          <p class="bar-item-text">Settings</p>
        </button>

        {/* Logout */}
        <button class="bar-item-logout" onClick={() => { navigate('/') }}>
          <img class="bar-item-image" src={Logout} alt="Logout" />
          <p class="bar-item-text">SIGN OUT</p>
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
