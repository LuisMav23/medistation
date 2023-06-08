import React, { useEffect, useState } from "react";
import "./styles/mainpage.css";
import "./styles/create.css";

import NavigationBar from "./navigationBar";
import NavBarMobile from "./navBarMobile";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

import CreateImage from "./assets/create-image.png";
import ArrowBack from "./assets/arrow-back.png";
import ProfileImage from "./assets/profile-you.png";
import Tag from "./assets/tag.png";
import { useNavigate } from "react-router";

function CreatePage() {
  const navigator = useNavigate();
  const [pageToDisplay, setPageToDisplay] = useState("intro");

  const handleToDisplay = (str) => {
    setPageToDisplay(str);
  };

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
        {screenWidth >= 768 && <NavigationBar selected={"Create"} />}
        <div class="create-page-container">
          {screenWidth <= 768 && <NavBarMobile selected={"Create"} />}
          {pageToDisplay === "intro" && (
            <div className="create-intro">
              <img alt="Empty Search" src={CreateImage} />
              <h2>Create a New Post!</h2>
              <p>Drag & drop your photos & videos here</p>
              <button
                onClick={() => {
                  setPageToDisplay("crop");
                }}
              >
                Select from computer
              </button>
            </div>
          )}
          {pageToDisplay === "crop" && (
            <div className="create-crop">
              <div className="create-crop-window">
                <div className="create-crop-window-header">
                  <button
                    onClick={() => {
                      setPageToDisplay("intro");
                    }}
                  >
                    <img src={ArrowBack} />
                  </button>
                  <h1>Crop</h1>
                  <button
                    onClick={() => {
                      setPageToDisplay("post");
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
          {pageToDisplay === "post" && (
            <div className="create-post">
              <div className="create-post-window">
                <div className="create-crop-window-header">
                  <button
                    onClick={() => {
                      setPageToDisplay("crop");
                    }}
                  >
                    <img src={ArrowBack} />
                  </button>
                  <h1>Create New Post</h1>
                  <button
                    onClick={() => {
                      navigator("/homepage");
                    }}
                  >
                    Share
                  </button>
                </div>
                <div class="image-to-post">
                  <div class="inner-image"></div>
                </div>
                <div class="profile-to-post">
                  <div class="profile-to-post-container">
                    <img src={ProfileImage} />
                    <div class="name-container">
                      <p>Serlindipity</p>
                    </div>
                  </div>
                  <div class="tag">
                    <p>Tag People</p>
                    <img src={Tag} />
                  </div>
                </div>
                <div className="caption">
                  <textarea type="text" placeholder="Write your caption here..."/>
                  <div class="cancel-container">
                  <button onClick={()=>{setPageToDisplay("intro")}}>
                    Cancel
                  </button >
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {screenWidth >= 768 && <FriendsList />}
      </div>
    </>
  );
}

export default CreatePage;
