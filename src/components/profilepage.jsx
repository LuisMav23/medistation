import React, { useEffect, useState, useCallback } from "react";
import "./styles/mainpage.css";
import "./styles/profilepage.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";

import Image from "./assets/profile-you.png";
import Settings from "./assets/icons/settings-icon.png";

function ProfilePage() {
  return (
    <>
      <TopBar />
      <div class="mainpage-container">
        <NavigationBar selected={"Profile"} />
        <div class="profilepage-container">
          <ProfileHeader
            username="Serlindipty"
            post="2"
            followers="2"
            name="Erlin Joy Fernandez"
            gender="she/her"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          />
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
        <img src={Image} alt="Profile" class="profile-image" />
      </div>
      <div class="profile-edit-settings-container">
        <div class="profile-username">{username}</div>
        <button class="profile-edit-button">Edit Profile</button>
        <img src={Settings} alt="Settings" class="profile-settings-icon" />
      </div>
      <div class="post-follower-following-container">
        <div class="profile-post-count">{posts} posts</div>
        <div class="profile-follower-count">{followers} followers</div>
        <div class="profile-following-count">{following} following</div>
      </div>
      <div class="profile-name-gender-container">
        <div class="profile-name">{name}</div>
        <div class="profile-gender">{gender}</div>
      </div>
      <div class="profile-bio-container">
        <div class="profile-bio">{bio}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
