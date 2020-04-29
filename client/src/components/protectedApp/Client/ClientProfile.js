import React from "react";
import { Link, useParams } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import Sharednav from "../Sharednav";

const ClientProfile = () => {
  const { id } = useParams();
  //   console.log("params here", params);
  return (
    <div className="ClientProfile">
      <Sharednav />
      <div className="ClientProfile-wrapper">
        <div className="profile-icon">
          <RiAccountCircleLine />
        </div>
        <div className="flex">
          <h2>Schedule</h2>
          <div className="toggle-message">
            <p>looks like you haven't join any classes yet.</p>
            <div className="find-classes">
              <Link to={`/account/client/${id}`}>find classes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
