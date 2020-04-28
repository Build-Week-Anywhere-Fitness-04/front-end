import React from "react";
import { Route } from "react-router-dom";
import ClientHomePage from "./Client/ClientHomepage";
import InstructorHomePage from "./instructor/InstructorHomePage";

const ProtectedMain = () => {
  return (
    <div>
      <Route exact path="/account/client">
        <ClientHomePage />
      </Route>

      <Route exact path="/account/instructor">
        <InstructorHomePage />
      </Route>
    </div>
  );
};

export default ProtectedMain;
