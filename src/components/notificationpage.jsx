import React, { useEffect, useState, useCallback } from "react";
import "./styles/mainpage.css";
import "./styles/notification.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

function NotificationPage() {
  return (
    <>
      <TopBar />
      <div class="mainpage-container">
        <NavigationBar selected={"Notifications"} />
        <div class="notificationpage-container"></div>
        <FriendsList />
      </div>
    </>
  );
}

export default NotificationPage;
