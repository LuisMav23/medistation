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
        <Route exact path="/" Component={Login}/>
        <Route exact path="/signup" Component={Signup}/>
        <Route exact path="/forgot-password" Component={Forgot}/>
        <Route exact path="/homepage" Component={HomePage}/>
        <Route exact path="/search" Component={SearchPage}/>
        <Route exact path="/messages" Component={MessagePage}/>
        <Route exact path="/notifications" Component={NotificationPage}/>
        <Route exact path="/create" Component={CreatePage}/>
        <Route exact path="/profile" Component={ProfilePage}/>
        <Route exact path="/settings" Component={SettingsPage}/>
        
      </Routes>
    </Router>
  );
}

export default App;
