import React from "react";

import './styles/topbar.css'

import Logo from "./assets/logo.png";

const TopBar = () => {
    return (
      <div class="top-container">
        {/* Render the logo image */}
        <img class="logo-image" src={Logo} alt="Logo" />
      </div>
    );
  };

export default TopBar;
