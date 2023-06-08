import React, { useEffect, useState } from "react";
import "./styles/mainpage.css";
import "./styles/create.css";

import NavigationBar from "./navigationBar";
import NavBarMobile from "./navBarMobile";
import TopBar from "./topBar";
import FriendsList from "./friendsList";

import CreateImage from "./assets/create-image.png"

function CreatePage() {
  const [pageToDisplay, setPageToDisplay] = useState("intro")

  const handleToDisplay = (str) => {
    setPageToDisplay(str);
  }


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <TopBar />
      <div class="mainpage-container">
        {screenWidth >= 768 && <NavigationBar selected={"Create"} />}
        <div class="create-page-container">
          {screenWidth <= 768 && <NavBarMobile selected={"Create"} />}
          {pageToDisplay === "intro" &&
            <div className="create-intro">
              <img alt="Empty Search" src={CreateImage} />
              <h2 >Create a New Post!</h2>
              <p >Drag & drop your photos & videos here</p>
              <button onClick={()=>{setPageToDisplay("crop")}}>Select from computer</button>
            </div>
          }
          {pageToDisplay === "crop" &&
            <div className="create-crop">
              
            </div>
          }
      </div>
      {screenWidth >= 768 && <FriendsList />}
    </div >
    </>
  );
}


export default CreatePage;
