import React, {useEffect, useState} from "react";

import "./styles/mainpage.css"
import "./styles/searchpage.css"



import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

const SearchPage = () => {
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
        {screenWidth >= 768 && <NavigationBar selected={'Search'}/>}
        <div class="searchpage-container">
          //dito na yung sa gitna sa search page to
        </div>
        {screenWidth >= 768 && <FriendsList/>}
      </div>
    </>
  );
};



export default SearchPage;