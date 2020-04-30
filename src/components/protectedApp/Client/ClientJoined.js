import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const ClientJoined = ({ cls, deletedJoined }) => {
  const { id, image_url } = cls;
  const { url } = useRouteMatch();
  const params = useParams();
  console.log("parms here ", params);

  //   /account/client/5/8/more-info   expencting
  //  /account/ceilnt/8/more-info    current
  return (
    <div className="InstructorCardClass">
      <Link to={`/account/client/${params.id}/${id}/more-info`}>
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
