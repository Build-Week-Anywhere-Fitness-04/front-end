import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

const InstructorCardClass = ({ cls }) => {
  const { id, duration, image_url, name, price } = cls;
  const { url } = useRouteMatch();
  const history = useHistory();

  console.log("url here ", url);
  return (
    <div className="InstructorCardClass">
      <Link to={`${url}/${id}/more-info`}>
        <div className="InstructorCardClass-img">
          <img src={image_url} alt="doing yoga" />
        </div>
      </Link>
      <div className="InstructorCardClass-description">
        <div className="Instructor-top-row">
          <p className="name">{name}</p>
          <p className="price">${price}</p>
        </div>
        <p className="duration">
          <span>{duration}</span> mins
        </p>
        <div className="bottom-row">
          <p className="starts">11:30 AM</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCardClass;
