import React, {useEffect, useState} from "react";

import "./styles/mainpage.css"
import "./styles/homepage.css"

import ProfileImage from './assets/profile-you.png'

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

const HomePage = () => {
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
      <TopBar />
      <div class="mainpage-container">
        {screenWidth >= 768 && <NavigationBar selected={'Home'}/>}
        <div class="homepage-container">
          <div class="stories-container">
              <Story username="Marebik"/>
              <Story username="Marebik"/>
              <Story username="Marebik"/>
              <Story username="Marebik"/>
              <Story username="Marebik"/>
              <Story username="Marebik"/>
          </div>
        </div>
        {screenWidth >= 768 && <FriendsList/>}
      </div>
    </>
  );
};

const Story = ({ username }) => {
  return (
    <div class="story">
      <div class="story-image-container">
        <img class="story-image" src={ProfileImage} alt="story"/>
      </div>
      <p class="story-username">
        {username} 
      </p>
    </div>
  );
}



export default HomePage;
