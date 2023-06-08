import React, { useEffect, useState, useCallback } from "react";
import "./styles/mainpage.css";
import "./styles/searchpage.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import FriendsList from "./friendsList";
import NavBarMobile from "./navBarMobile";

import SearchIcon from "./assets/icons/searchIcon.svg";
import NoSearch from "./assets/noSearch.png";
import ProfileImage from './assets/profile-you.png';

const SearchPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the screenWidth state when the window is resized
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up by removing event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isSearchEmpty, setisSearchEmpty] = useState(true);
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <TopBar />
      <div class="mainpage-container">
        {/* Render NavigationBar component only if the screenWidth is greater than or equal to 768 */}
        {screenWidth >= 768 && <NavigationBar selected={'Search'} />}
        <div class="searchpage-container">
          {/* Render NavBarMobile component only if the screenWidth is less than or equal to 768 */}
          {screenWidth <= 768 && <NavBarMobile selected={"Search"} />}
          <div class="search-bar-container">
            <input type="text" class="search-bar" placeholder="Search" onChange={handleInput} />
            <button className="search-button" onClick={() => { setisSearchEmpty(false); setSearchQuery(input) }}>
              <img src={SearchIcon} alt="Search Icon" className="search-icon" />
            </button>
          </div>
          {isSearchEmpty === true && <EmptySearch />}
          {isSearchEmpty === false && <SearchList searchQuery={searchQuery} />}
        </div>
        {/* Render FriendsList component only if the screenWidth is greater than or equal to 768 */}
        {screenWidth >= 768 && <FriendsList />}
      </div>
    </>
  );
};

const EmptySearch = () => {
  return (
    <div class="empty-search">
      <img class="empty-search-image" alt="Empty Search" src={NoSearch} />
      <h2 class="empty-search-heading">Looking for something?</h2>
      <p class="empty-search-p">Your searches will appear here</p>
    </div>
  );
};

const SearchList = ({ searchQuery }) => {
  return (
    <div class="search-list">
      <div className="search-for-container">
        <p className="search-for">Search for <span>{searchQuery}</span></p>
      </div>
      <SearchItem username="Serlindipity" name="Erlin Fernandez" isFollowing={true} />
      <SearchItem username="Serlindipity" name="Erlin Fernandez" isFollowing={false} />
      <SearchItem username="Serlindipity" name="Erlin Fernandez" isFollowing={true} />
    </div>
  );
};

const SearchItem = ({ username, name, isFollowing }) => {
  const [profileIsFollowing, setProfileIsFollowing] = useState(isFollowing);

  const handleFollowButtonClick = useCallback(() => {
    setProfileIsFollowing(!profileIsFollowing);
  }, [profileIsFollowing]);

  return (
    <div className="search-item">
      <div className="search-profile-container">
        <div className="search-item-image-container">
          <img className="search-item-image" src={ProfileImage} alt="Search Item" />
        </div>
        <div className="search-item-name-container">
          <p className="search-item-username">{username}</p>
          <p className="search-item-name">{name}</p>
        </div>
      </div>
      <button className="search-item-follow-button" onClick={handleFollowButtonClick}>
        {profileIsFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default SearchPage;
