import React, { useEffect, useState } from "react";
import "./styles/mainpage.css";
import "./styles/notification.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";
import Notif from "./assets/notif.png"
import NavBarMobile from "./navBarMobile";

function NotificationPage() {
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
        <div class="notificationpage-container">
        {screenWidth <= 768 && <NavBarMobile selected={"Messages"} />}
          <div class="empty-search">
            <img class="empty-search-image" alt="Empty Search" src={Notif} />
            <h2 class="empty-search-heading">No Notifications Yet</h2>
            <p class="empty-search-p">Notifications will appear here when  you have one</p>
          </div>
        </div>
        {screenWidth >= 768 && <FriendsList/>}
      </div>
    </>
  );
}

export default NotificationPage;
