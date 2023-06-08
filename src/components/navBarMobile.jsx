import React from "react";
import { useNavigate } from "react-router";

import "./styles/navmobile.css";

import Home from "./assets/icons/home-icon.png";
import Search from "./assets/icons/search-icon.png";
import Messages from "./assets/icons/message-icon.png";
import Notifications from "./assets/icons/notifications-icon.png";
import Create from "./assets/icons/create-icon.png";
import Profile from "./assets/icons/profile-icon.png";
import Settings from "./assets/icons/settings-icon.png";
import Logout from "./assets/icons/logout-icon.png";

const NavBarMobile = ({ selected }) => {
  const navigate = useNavigate();

  return (
    <div class="navbar">
      {/* Mobile Navigation Bar */}
      <div class="navbar-mobile-container">
        {/* Home */}
        <button
          class={`bar-item-mobile ${selected === 'Home' ? 'selected' : ''}`}
          onClick={() => { navigate('/homepage') }}
        >
          <img class="bar-item-image-mobile" src={Home} alt="Home" />
        </button>

        {/* Search */}
        <button
          class={`bar-item-mobile ${selected === 'Search' ? 'selected' : ''}`}
          onClick={() => { navigate('/search') }}
        >
          <img class="bar-item-image-mobile" src={Search} alt="Search" />
        </button>

        {/* Messages */}
        <button
          class={`bar-item-mobile ${selected === 'Messages' ? 'selected' : ''}`}
          onClick={() => { navigate('/messages') }}
        >
          <img class="bar-item-image-mobile" src={Messages} alt="Messages" />
        </button>

        {/* Notifications */}
        <button
          class={`bar-item-mobile ${selected === 'Notifications' ? 'selected' : ''}`}
          onClick={() => { navigate('/notifications') }}
        >
          <img class="bar-item-image-mobile" src={Notifications} alt="Notifications" />
        </button>

        {/* Create */}
        <button
          class={`bar-item-mobile ${selected === 'Create' ? 'selected' : ''}`}
          onClick={() => { navigate('/create') }}
        >
          <img class="bar-item-image-mobile" src={Create} alt="Create" />
        </button>

        {/* Profile */}
        <button
          class={`bar-item-mobile ${selected === 'Profile' ? 'selected' : ''}`}
          onClick={() => { navigate('/profile') }}
        >
          <img class="bar-item-image-mobile" src={Profile} alt="Profile" />
        </button>

        {/* Settings */}
        <button
          class={`bar-item-mobile ${selected === 'Settings' ? 'selected' : ''}`}
          onClick={() => { navigate('/settings') }}
        >
          <img class="bar-item-image-mobile" src={Settings} alt="Settings" />
        </button>
      </div>
    </div>
  );
};

export default NavBarMobile;
