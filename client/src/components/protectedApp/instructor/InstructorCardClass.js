import React from "react";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import testing from "../../../img/yoga.jpg";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const InstructorCardClass = ({ clss, deleteClass }) => {
  const {
    id,
    description,
    duration,
    image_url,
    intensity,
    location,
    max_class_size,
    name,
    price,
    start_time,
    type,
    status,
  } = clss;
  const match = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  //   console.log("match here ", match);
  //   console.log("url ", url, "path ", path);
  const editBtn = () => {
    history.push(`${url}/edit/${id}`);
  };
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
          <div className="icons">
            <div className="edit" onClick={editBtn}>
              <AiOutlineEdit />
            </div>
            <div className="del" onClick={deleteClass}>
              <AiOutlineDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCardClass;
