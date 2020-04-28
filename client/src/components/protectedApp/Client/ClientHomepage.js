import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Header from "./Header";
import ClientDisplayClasses from "./ClientDisplayClasses";

const ClientHomePage = () => {
  const reducer = useSelector((state) => ({
    ...state,
  }));
  //   console.log("reducer here", reducer.clientReducer);
  return (
    <div>
      <Navbar />
      <Header />
      <ClientDisplayClasses />
    </div>
  );
};

export default ClientHomePage;
