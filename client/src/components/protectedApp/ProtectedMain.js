import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import ClientHomePage from "./Client/ClientHomepage";
import InstructorHomePage from "./instructor/InstructorHomePage";
import InstructorSingleClass from "./instructor/InstructorSingleClass";
import ClientSingleClass from "./Client/ClientSingleClass";
import EditClass from "./instructor/EditClass";

const ProtectedMain = () => {
  const { url } = useRouteMatch();

  return (
    <div>
      <Route exact path="/account/client/:id">
        <ClientHomePage />
      </Route>
      <Route exact path={`${url}/client/:id/:c_id/more-info`}>
        <ClientSingleClass />
      </Route>

      <Route exact path="/account/instructor/:id">
        <InstructorHomePage />
      </Route>

      <Route exact path={`${url}/instructor/:id/:c_id/more-info`}>
        <InstructorSingleClass />
      </Route>
      <Route exact path={`${url}/instructor/:id/edit/:c_id`}>
        <EditClass />
      </Route>
    </div>
  );
};

export default ProtectedMain;
