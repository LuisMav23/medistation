import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/mainpage.css";
import "./styles/messagepage.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import NavBarMobile from "./navBarMobile";

import Profile from "./assets/profile-you.png";
import YourMessages from "./assets/icons/your-messages-icon.png";

function MessagePage() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(null);

  const location = useLocation();

  useEffect(() => {
    // Perform any necessary actions when the route changes
    console.log("Route changed to:", location.pathname);
  }, [location]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <TopBar />
      <div class="mainpage-container">
      {screenWidth >= 768 && <NavigationBar selected={"Messages"} />}
        <div class="messagepage-container">
        {screenWidth <= 768 && <NavBarMobile selected={"Messages"} />}
          <div class="message-box-container">
            <div class="friends-container">
              <div class="friends-header">
                <p class="friends-header-text">Serlindipity</p>
              </div>
              <div class="horizontal-line"></div>
              <div class="messages-request-container">
                <p class="messages-text">Messages</p>
                <p class="requests-text">Requests</p>
              </div>
              <div class="friends-list-container">
                <FriendsList
                  username="Serlindipity"
                  status="Active now"
                  image={Profile}
                  onClick={() => {
                    setSelectedFriend("Serlindipity");
                    setCurrentStatus("Active now");
                  }}
                />
                <FriendsList
                  username="Maberik"
                  status="1hr ago"
                  image={Profile}
                  onClick={() => {
                    setSelectedFriend("Maberik");
                    setCurrentStatus("1hr ago");
                  }}
                />
                <FriendsList
                  username="JohnDoe"
                  status="Active now"
                  image={Profile}
                  onClick={() => {
                    setSelectedFriend("JohnDoe");
                    setCurrentStatus("Active now");
                  }}
                />
                <FriendsList
                  username="JaneSmith"
                  status="2hrs ago"
                  image={Profile}
                  onClick={() => {
                    setSelectedFriend("JaneSmith");
                    setCurrentStatus("2hrs ago");
                  }}
                />
              </div>
            </div>
            <div class="vertical-line"></div>
            <div class="friends-messages">
              {selectedFriend ? (
                <Message
                  username={selectedFriend}
                  message="Hello!"
                  image={Profile}
                  status={currentStatus}
                />
              ) : (
                <EmptyMessage />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const FriendsList = ({ username, status, image, onClick }) => {
  return (
    <div class="friend" onClick={onClick}>
      <div class="friend-image-container">
        <img class="friend-image" src={image} alt="friend" />
        {status === "Active now" && <div className="active-now"></div>}
      </div>
      <div class="friend-status-container">
        <p class="friend-username">{username}</p>
        <p class="friend-status">{status}</p>
      </div>
    </div>
  );
};

const EmptyMessage = () => {
  return (
    <div class="your-messages-container">
      <img
        class="your-messages-image"
        src={YourMessages}
        alt="your message logo"
      />
      <p class="your-messages-text">Your Messages</p>
      <p class="your-messages-subtext">Send private message to a friend.</p>
      <button class="your-messages-button">Send Message</button>
    </div>
  );
};

const Message = ({ username, message, image, status }) => {
  return (
    <>
      <div class="message-header">
        <div class="message-header-left">
          <div class="message-header-image-container">
            <img class="message-header-image" src={image} alt="friend" />
            {status === "Active now" && <div className="message-active-now"></div>}
          </div>
          <div class="message-header-details">
            <p class="message-header-username">{username}</p>
            <p class="message-header-status">{status}</p>
          </div>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="message-body">
        <p class="message-body-text">{message}</p>
      </div>
    </>
  );
};

export default MessagePage;
