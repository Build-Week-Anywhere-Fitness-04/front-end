import React from "react";
import { useSelector } from "react-redux";
import InstructorHeader from "./InstructorHeader";
import InstructorContent from "./InstructorContent";

const InstructionHomePage = () => {
  const reducer = useSelector((state) => ({
    ...state,
  }));
  console.log("reducer here", reducer.userReducer);

  return (
    <div>
      <InstructorHeader />
      <InstructorContent />
    </div>
  );
};

export default InstructionHomePage;
