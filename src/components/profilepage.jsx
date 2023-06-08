import React, { useEffect, useState, useCallback } from "react";
import "./styles/mainpage.css";
import "./styles/profilepage.css";

import NavigationBar from "./navigationBar";
import NavBarMobile from "./navBarMobile";
import TopBar from "./topBar";

import Image from "./assets/profile-you.png";
import Settings from "./assets/icons/settings-icon.png";

function ProfilePage() {
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
      {screenWidth >= 768 && <NavigationBar selected={"Profile"} /> }
        
        <div class="profilepage-container">
        {screenWidth <= 768 && <NavBarMobile selected={"Profile"} />}
          <ProfileHeader
            username="Serlindipty"
            posts="9"
            followers="5"
            following="5" 
            name="Erlin Joy Fernandez"
            gender="she/her"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          />
          <div class="profilepage-posts-container">
            <PostGrid/>
            <PostGrid/>
            <PostGrid/>
            <PostGrid/>
            <PostGrid/>
            <PostGrid/>
            </div>
        </div> 
      </div>
    </>
  );
}

const ProfileHeader = ({
  username,
  posts,
  followers,
  following,
  name,
  gender,
  bio,
}) => {
  return (
    <div class="profilepage-header">
      <div class="profile-image-container">
        <img src={Image} alt="Profile" class="main-profile-image" />
      </div>
      <div class="profile-details-container">
      <div class="profile-edit-settings-container">
        <div class="profile-username">{username}</div>
        <button class="profile-edit-button">Edit Profile</button>
        <img src={Settings} alt="Settings" class="profile-settings-icon" />
      </div>
      <div class="post-follower-following-container">
        <div class="profile-post-count"><b>{posts}</b> posts</div>
        <div class="profile-followers-count"><b>{followers}</b> followers</div>
        <div class="profile-following-count"><b>{following}</b> following</div>
      </div>
      <div class="profile-name-gender-container">
        <div class="profile-name">{name}</div>
        <div class="profile-gender">{gender}</div>
      </div>
      <div class="profile-bio-container">
        <div class="profile-bio">{bio}</div>
      </div>
      </div>
    </div>
  );
};


const PostGrid = ({ image }) => {
    return (
        <div class="post-grid">
            <div class="post-container-grid"></div>
        </div>
    );

};
export default ProfilePage;
