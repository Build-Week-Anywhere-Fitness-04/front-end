import React from "react";
import { Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Navbar from "./Navbar";

import ProtectedMain from "./protectedApp/ProtectedMain";
import PrivateRoute from "../private/PrivateRoute";

const MainApp = () => {
  return (
    <div>
      <Route exact path="/signup">
        <Navbar />
        <SignUp />
      </Route>
      <Route exact path="/login">
        <Navbar />
        <Login />
      </Route>
      <PrivateRoute path="/account" component={ProtectedMain} />
    </div>
  );
};

export default MainApp;
