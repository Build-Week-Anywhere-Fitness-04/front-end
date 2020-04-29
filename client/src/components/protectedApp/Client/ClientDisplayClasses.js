import React from "react";
import SingleClass from "./SingleClass";

const ClientDisplayClasses = ({ allClasses }) => {
  return (
    <div className="ClientDisplayClasses">
      <h3>hello</h3>
      <div className="ClientDisplayClasses-wrapper">
        {allClasses.map((cls) => (
          <SingleClass key={cls.id} cls={cls} />
        ))}
      </div>
    </div>
  );
};

export default ClientDisplayClasses;
