import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Navbar from './Navbar'

const MainApp = () => {
  return (
    <div>
      <Navbar />
      
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </div>
  );
};

export default MainApp;
