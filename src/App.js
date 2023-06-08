import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Login from './components/loginPage'
import Signup from "./components/signupPage";
import Forgot from "./components/forgotpassPage";
import HomePage from "./components/homepage";
import SearchPage from "./components/searchpage";
import MessagePage from "./components/messagepage";
import NotificationPage from "./components/notificationpage";
import CreatePage from "./components/createpage";
import ProfilePage from "./components/profilepage";
import SettingsPage from "./components/settingspage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route exact path="/" Component={Login}/>
        
        {/* Route for the signup page */}
        <Route exact path="/signup" Component={Signup}/>
        
        {/* Route for the forgot password page */}
        <Route exact path="/forgot-password" Component={Forgot}/>
        
        {/* Route for the homepage */}
        <Route exact path="/homepage" Component={HomePage}/>
        
        {/* Route for the search page */}
        <Route exact path="/search" Component={SearchPage}/>
        
        {/* Route for the messages page */}
        <Route exact path="/messages" Component={MessagePage}/>
        
        {/* Route for the notifications page */}
        <Route exact path="/notifications" Component={NotificationPage}/>
        
        {/* Route for the create page */}
        <Route exact path="/create" Component={CreatePage}/>
        
        {/* Route for the profile page */}
        <Route exact path="/profile" Component={ProfilePage}/>
        
        {/* Route for the settings page */}
        <Route exact path="/settings" Component={SettingsPage}/>
      </Routes>
    </Router>
  );
}

export default App;
