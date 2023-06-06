import React, { useEffect, useState } from "react";
import "./styles/mainpage.css";
import "./styles/notification.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

function CreatePage() {
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
        {screenWidth >= 768 && <NavigationBar selected={"Notifications"} />}
        <div class="create-page-container">

        </div>
        {screenWidth >= 768 && <FriendsList/>}
      </div>
    </>
  );
}

export default CreatePage;
