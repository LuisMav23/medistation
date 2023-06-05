import React, { useEffect, useState, useCallback } from "react";
import "./styles/mainpage.css";
import "./styles/messagepage.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

function MessagePage() {
  return (
    <>
      <TopBar />
      <div class="mainpage-container">
        <NavigationBar selected={"Messages"} />
        <div class="messagepage-container"></div>
        <FriendsList />
      </div>
    </>
  );
}

export default MessagePage;
