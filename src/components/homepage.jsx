import React, {useEffect, useState} from "react";

import "./styles/mainpage.css"
import "./styles/homepage.css"



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
          //dito na yung sa gitna sa homepage to<br/>
          //scrollable na yan
        </div>
        {screenWidth >= 768 && <FriendsList/>}
      </div>
    </>
  );
};



export default HomePage;
