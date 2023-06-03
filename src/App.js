import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Login from './components/loginPage'
import Signup from "./components/signupPage";
import Forgot from "./components/forgotpassPage";
import HomePage from "./components/homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route exact path="/signup" Component={Signup}/>
        <Route exact path="/forgot-password" Component={Forgot}/>
        <Route exact path="/homepage" Component={HomePage}/>
      </Routes>
    </Router>
  );
}

export default App;
