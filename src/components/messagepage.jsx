import React, { useEffect, useState, useCallback } from "react";
import "./styles/mainpage.css";
import "./styles/messagepage.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";


function MessagePage() {
  return (
    <>
      <TopBar />
      <div class="mainpage-container">
        <NavigationBar selected={"Messages"} />
        <div class="messagepage-container">
          <div class="message-box-container">

          </div>
        </div>
        <div class="right-container"></div>
      </div>
    </>
  );
}

export default MessagePage;
