import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const ClientJoined = ({ cls, deletedJoined }) => {
  const { id, image_url } = cls;
  const { url } = useRouteMatch();

  return (
    <div className="InstructorCardClass">
      <Link to={`${url}/${id}/more-info`}>
        <div className="InstructorCardClass-img">
          <img src={image_url} alt="doing yoga" />
        </div>
      </Link>
      <div className="InstructorCardClass-description">
        <div
          className="delete-joined"
          id="delete-joined"
          onClick={deletedJoined}
        >
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default ClientJoined;
