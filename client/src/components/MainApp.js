import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

const MainApp = () => {
  return (
    <div>
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
