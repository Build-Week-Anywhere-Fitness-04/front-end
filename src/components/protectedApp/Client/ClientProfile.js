import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiAccountCircleLine } from "react-icons/ri";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Sharednav from "../Sharednav";
import ClientJoined from "./ClientJoined";

const ClientProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [update, setUpdate] = useState("");
  const reducer = useSelector((state) => state.clientReducer.classesJoined);
  //   console.log("checking classesd joined ", reducer);

  useEffect(() => {
    dispatch({ type: "FETCHING_RERENDER_CLASSES" });
    axiosWithAuth()
      .get(`/api/clients/${id}/classes`)
      .then((res) => {
        console.log("rerendering ".res);
        dispatch({ type: "RERENDERING_JOINED_CLASSES", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_RERENDERING_JOINED_CLASSES", payload: err });
      });
  }, [update, dispatch, id]);

  const deletedJoined = (item) => {
    dispatch({ type: "REMOVING_JOINED_CLASS" });
    axiosWithAuth()
      .delete(`api/clients/${id}/classes/${item.class_id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "REMOVED_CLASS_SUCCESSFULLY" });
        setUpdate(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR_REMOVING_CLASS", payload: err });
      });
  };

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
            {reducer.length === 0 && (
              <p>looks like you haven't join any classes yet.</p>
            )}

            <div className="find-classes">
              <Link to={`/account/client/${id}`}>find classes</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="show-joined-classes">
        {reducer.map((cls) => (
          <ClientJoined
            key={cls.id}
            cls={cls}
            deletedJoined={() => deletedJoined(cls)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientProfile;
