import React, { useEffect, useState } from "react";

import "./styles/mainpage.css";
import "./styles/settings.css";

import NavigationBar from "./navigationBar";
import TopBar from "./topBar";
import NavBarMobile from "./navBarMobile";

import Settings from "./assets/icons/settings-icon.png";
import Profile from "./assets/profile-you.png";

const SettingsPage = () => {
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

  const [selected, setSelected] = useState("Edit Profile");

  return (
    <>
      <div class="top">
        <TopBar />
      </div>
      <div class="mainpage-container">
        {screenWidth >= 768 && <NavigationBar selected={"Home"} />}
        <div class="settings-main-container">
          {screenWidth <= 768 && <NavBarMobile selected={"Home"} />}
          <div class="settings-container">
            <div class="settings-option-container">
              <div class="settings-header">
                <img class="settings-image" src={Settings} alt="Settings" />
                <p class="settings-header-text">Settings</p>
              </div>
              <div class="horizontal-line"></div>
              <button
                class={`settings-option ${
                  selected === "Edit Profile" ? "selected" : ""
                }`}
                onClick={() => {
                  setSelected("Edit Profile");
                }}
              >
                <p class="settings-option-text">Edit Profile</p>
              </button>
              <button
                class={`settings-option ${
                  selected === "Change Password" ? "selected" : ""
                }`}
                onClick={() => {
                  setSelected("Change Password");
                }}
              >
                <p class="settings-option-text">Change Password</p>
              </button>
              <button
                class={`settings-option ${
                  selected === "Privacy Security" ? "selected" : ""
                }`}
                onClick={() => {
                  setSelected("Privacy Security");
                }}
              >
                <p class="settings-option-text">Privacy & Security</p>
              </button>
              <button
                class={`settings-option ${
                  selected === "Help" ? "selected" : ""
                }`}
                onClick={() => {
                  setSelected("Help");
                }}
              >
                <p class="settings-option-text">Help</p>
              </button>
            </div>
            <div class="vertical-line"></div>
            <div class="main-settings-container">
              {selected === "Edit Profile" && (
                <EditProfile
                  editusername="Serlindipity"
                  firstName="Erlin Joy"
                  lastName="Fernandez"
                  email="erlinguine@gmail.com"
                  bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
                  pronouns="She/Her"
                />
              )}
              {selected === "Change Password" && <ChangePassword />}
              {selected === "Privacy Security" && <PrivacySecurity />}
              {selected === "Help" && <Help />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PrivacySecurity = () => {
  return (
    <>
      <div class="privsec-container">
        <div class="privsec-header-container">
          <h1>Account Privacy</h1>
        </div>
        <div class="privsec-content-header-container">
          <input type="checkbox" name="privateAccount" value="1" />
          <p>Private Account</p>
        </div>
        <div class="privsec-content-text">
          When your account is public, your profile and posts can be seen by
          anyone, on or off Instagram, even if they don't have an Instagram
          account.
          <br />
          When your account is private, only the followers that you approve can
          see what you share, including your photos or videos on hashtag and
          location pages, and your followers and following lists.
        </div>
        <div class="privsec-header-container">
          <h1>Activity Status</h1>
        </div>
        <div class="privsec-content-header-container">
          <input type="checkbox" name="showActivityStatus" value="1" />
          <p>Show Activity Status</p>
        </div>
        <div class="privsec-content-text">
          Allow accounts that you follow and anyone you message to see when you
          were last active or are currently active on Instagram apps. When this
          is turned off, you won't be able to see the activity status of other
          accounts.
        </div>
        <div class="save-button-container">
          <button class="privacy-save">Save</button>
        </div>
      </div>
    </>
  );
};

const Help = () => {
  return (
    <>
      <div class="help-container">
        <div class="help-header-container">
          <h1>How Can We Help You</h1>
        </div>
        <div class="help-faq-container">
          <p>FAQs</p>
        </div>
        <div class="help-content">
          <p class="help-content-title">1. What is Medistation for?</p>
          <div class="help-content-body">
            Medistation is a social networking platform, promoting mental
            wellness. This social media app will connect its Users to a
            community that goes through the same challenges, allowing them to
            share experiences, and offer self-care advice. Medistation will also
            provide information and serve as an instrument for therapy,
            mindfulness training, and meditation to its users.
          </div>
        </div>
        <div class="help-content">
          <p class="help-content-title">2. What should I post?</p>
          <div class="help-content-body">
            Medistation allows its users to create post for photos or videos. A
            post couldn’t be done without posting a image or video content.
            Posts can be created with or without a caption and location
            depending on what the users prefer.
          </div>
        </div>
        <div class="help-content">
          <p class="help-content-title">
            3. How to handle negative comments on social media?
          </p>
          <div class="help-content-body">
            Some brands have this common misconception that social media is a
            place full of negativity. Even if it were so, it's better to know
            that there is a place where customers express all sorts of opinions,
            rather than being oblivious. When it comes to handling this type of
            comments, we suggest that the victim should report the said comment
            immediately.
          </div>
        </div>
        <div class="help-hmq-container">
          <p>Have More Questions?</p>
        </div>
        <div class="help-sendemail-container">
          <p>
            Send us an email or contact us{" "}
            <span>@medistationofficial@gmail.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

const EditProfile = ({
  editusername: initialUsername,
  firstName: initialFirstName,
  lastName: initialLastName,
  email: initialEmail,
  bio: initialBio,
  pronouns: initialPronouns,
}) => {
  const [editusername, setUsername] = useState(initialUsername);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [email, setEmail] = useState(initialEmail);
  const [bio, setBio] = useState(initialBio);
  const [pronouns, setPronouns] = useState(initialPronouns);
  const [bioText, setBioText] = useState(bio);

  const handleBioChange = (event) => {
    const text = event.target.value;
    if (text.length <= 60) {
      setBioText(text);
    }
  };

  return (
    <>
      <div class="editprofile-container">
        <div class="editprofile-header-container">
          <div class="editprofile-image-username-container">
            <div class="editprofile-image-container">
              <img src={Profile} alt="Profile" class="editprofile-image" />
            </div>
            <div class="editprofile-username">{editusername}</div>
          </div>
        </div>
        <div class="editprofile-content-container">
          <div class="edit-username-container">
            <div class="edit-username-side-text">Username</div>
            <div class="edit-username-input-container">
              <input
                type="text"
                class="edit-username-input"
                value={editusername}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div class="edit-username-input-description">
                You can change & update your username in this section.
              </div>
            </div>
          </div>
          <div class="edit-firstname-container">
            <div class="edit-firstname-side-text">First Name</div>
            <div class="edit-firstname-input-container">
              <input
                type="text"
                class="edit-firstname-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div class="edit-lastname-container">
            <div class="edit-lastname-side-text">Last Name</div>
            <div class="edit-lastname-input-container">
              <input
                type="text"
                class="edit-lastname-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div class="edit-first-lastname-input-description">
                You are only allowed to change your first & last name once a
                month, make sure you entered the right names.
              </div>
            </div>
          </div>
          <div class="edit-email-container">
            <div class="edit-email-side-text">Email</div>
            <div class="edit-email-input-container">
              <input
                type="text"
                class="edit-email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div class="edit-email-input-description">
                You can update & confirm your email in this section.
              </div>
            </div>
          </div>
          <div class="edit-bio-container">
            <div class="edit-bio-side-text">Bio</div>
            <div class="edit-bio-input-container">
              <textarea
                class="edit-bio-input"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                  handleBioChange(e); // Call handleBioChange separately
                }}
                maxLength={60}
              />
              <div class="edit-bio-input-description">
                {bioText.length} / 60
              </div>
            </div>
          </div>
          <div class="edit-pronouns-container">
            <div class="edit-pronouns-side-text">Pronouns</div>
            <div class="edit-pronouns-input-container">
              <input
                type="text"
                class="edit-pronouns-input"
                value={pronouns}
                onChange={(e) => setPronouns(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div class="editprofile-save-button-container">
          <button class="edit-save-button">Save</button>
        </div>
      </div>
    </>
  );
};

const ChangePassword = ({ username }) => {
  return (
    <>
      <div class="changepassword-container">
        <div class="changepassword-header-container">
          <div class="changepassword-image-username-container">
            <div class="changepassword-image-container">
              <img src={Profile} alt="Profile" class="changepassword-image" />
            </div>
            <div class="changepassword-username">Username</div>
          </div>
        </div>
        <div class="changepassword-content-container">
          <div class="changepassword-oldpassword-container">
            <div class="changepassword-oldpassword-side-text">Old Password</div>
            <div class="changepassword-oldpassword-input-container">
              <input type="password" class="changepassword-oldpassword-input" />
              <div class="changepassword-oldpassword-input-description">
                Please enter your old password.
              </div>
            </div>
          </div>
          <div class="changepassword-newpassword-container">
            <div class="changepassword-newpassword-side-text">New Password</div>
            <div class="changepassword-newpassword-input-container">
              <input type="password" class="changepassword-newpassword-input" />
            </div>
          </div>
          <div class="changepassword-confirmnewpassword-container">
            <div class="changepassword-confirmnewpassword-side-text">
              Confirm New Password
            </div>
            <div class="changepassword-confirmnewpassword-input-container">
              <input
                type="password"
                class="changepassword-confirmnewpassword-input"
              />
              <div class="changepassword-confirmnewpassword-input-description">
                Please enter your desired new password & confirm it. Password
                must consist with 8 characters and special elements
              </div>
            </div>
          </div>
          <div class="changepassword-save-button-container">
            <button class="changepassword-save-button">Change password</button>
            <div class="forgot-password-text">Forgotten Your Password?</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
