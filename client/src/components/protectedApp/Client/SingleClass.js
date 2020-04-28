import React from "react";
import image from "../../../img/yoga.jpg";

const SingleClass = () => {
  return (
    <div className="SingleClass">
      <div className="SingleClass-img">
        <img src={image} alt="doing yoga" />
      </div>
      <div className="Class-description">
        <div className="top-row">
          <p>yoga</p>
          <p>$11.00</p>
        </div>
        <p>60 mins</p>
        <p>11:30 AM</p>
      </div>
    </div>
  );
};

export default SingleClass;
