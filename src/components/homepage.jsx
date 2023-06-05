import React, { useEffect, useState } from "react";

import "./styles/mainpage.css";
import "./styles/homepage.css";

import ProfileImage from "./assets/profile-you.png";
import PostImage from "./assets/post-image.png";
import Like from "./assets/icons/like-icon.png";
import Comment from "./assets/icons/comment-icon.png"

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

const HomePage = () => {
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
      <div class="top">
      <TopBar />
      </div>
      <div class="mainpage-container">
        {screenWidth >= 768 && <NavigationBar selected={"Home"} />}
        <div class="homepage-container">
          <div class="stories-container">
            <Story username="Marebik" />
            <Story username="Marebik" />
            <Story username="Marebik" />
            <Story username="Marebik" />
            <Story username="Marebik" />
            <Story username="Marebik" />
          </div>
          <div class="horizontal-line"></div>
          <div class="posts-container">
            <Post username="Marebik" location="Kathmandu" time="2h" />
            <Post username="Marebik" location="Kathmandu" time="2h" />
            <Post username="Marebik" location="Kathmandu" time="2h" />
          </div>
        </div>
        {screenWidth >= 768 && <FriendsList />}
      </div>
    </>
  );
};

const Story = ({ username }) => {
  return (
    <div class="story">
      <div class="story-image-container">
        <img class="story-image" src={ProfileImage} alt="story" />
      </div>
      <p class="story-username">{username}</p>
    </div>
  );
};

const Post = ({ username, location, time, image }) => {
  return (
    <div class="post">
      <div class="post-header">
        <div class="post-header-left">
          <img class="post-header-image" src={ProfileImage} alt="profile" />
          <div class="post-header-details">
            <p class="post-header-username">{username}</p>
            <p class="post-header-location">{location}</p>
          </div>
          <div class="ellipse"></div>
          <p class="post-header-time">{time}</p>
        </div>
      </div>
      <img class="post-image" src={PostImage} alt="post-image" />
      <div class="like-comment-container">
        <div class="like-container">
          <img class="like-image" src={Like} alt="like  " />
          <p class="like-by">Liked by <b>Marebik</b></p>
        </div>
        <div class="comment-number-container">
          <p class="comment-number"><b>2</b> comments</p>
          <img class="comment-image" src={Comment} alt="comment" />
          </div>
        </div>
        <div class="comment-container">
          <div class="comment-username"><b>Marebik</b></div>
          <div class="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div class="see-more">See more</div>
          </div>
    </div>
  );
};

export default HomePage;
