import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ClientDisplayClasses from "./ClientDisplayClasses";

const ClientHomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ClientDisplayClasses />
    </div>
  );
};

export default ClientHomePage;
