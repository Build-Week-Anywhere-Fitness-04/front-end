import React from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import testing from "../../../img/yoga.jpg";

const InstructorSingleClass = () => {
  const { url, path } = useRouteMatch();
  const params = useParams();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { instructorClass } = reducer.userReducer;

  console.log("reucer", reducer);
  console.log("url ", url, "path ", path);
  console.log("params ", params);
  return (
    <div className="InstructorSingleClass">
      <div className="InstructorSingleClass-wrapper">
        <h3>hllo</h3>
      </div>
    </div>
  );
};

export default InstructorSingleClass;
