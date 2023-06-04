
import React from 'react';

import './styles/homepage.css'
import Logo from './assets/logo.png'

const HomePage = () => {
  return (
    <>
    <div class="homepage-main-container">
        <div class="nav-bar"><img class="logo-image-nav" src={Logo} alt="My Image"/></div>
    </div>
    </>
  );
}

export default HomePage;