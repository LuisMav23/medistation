import React from "react";
import { useNavigate } from "react-router";

import "./styles/friendsList.css";

import ProfileImage from './assets/profile-you.png'

const FriendsList = () => {
    const navigate = useNavigate();

    return (
      <div class="list-container">
        <div class="your-profile-container">
            <img class="your-profile-image" src={ProfileImage}/>
            <div class="your-name-container">
                <p class="your-username">
                    Serlindipity
                </p>
                <p class="your-fullname">
                    Erlin Fernandez
                </p>
            </div>
            <button class="switch-profile">
                Switch
            </button>
        </div>
        <p class="follow-suggestions-text">
        Following Suggestions
        </p>
        <Profile username="Marebik" name="Luis Gabriel"/>
        <Profile username="Marebik" name="Luis Gabriel"/>
        <Profile username="Marebik" name="Luis Gabriel"/>
      </div>
          
    );
  };


const Profile = ({username, name}) => {
    return (
        <div class="profile-container">
                <img class="profile-image" src={ProfileImage}/>
                <div class="name-container">
                    <p class="username">
                        {username}
                    </p>
                    <p class="fullname">
                        {name}
                    </p>
                </div>
                <button class="visit-profile">
                    Visit
                </button>
        </div>
    )
}
  
export default FriendsList;