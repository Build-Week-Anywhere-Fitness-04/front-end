import React from "react";
import ClientHomePage from "./Client/ClientHomepage";
import InstructorHomePage from "./instructor/InstructorHomePage";

const ProtectedMain = () => {
  return (
    <div>
      <ClientHomePage />
      <InstructorHomePage />
    </div>
  );
};

export default ProtectedMain;
