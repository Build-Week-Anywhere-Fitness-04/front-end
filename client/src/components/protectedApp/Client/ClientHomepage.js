import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import Navbar from "./Navbar";
import Header from "./Header";
import ClientDisplayClasses from "./ClientDisplayClasses";

const ClientHomePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { allClasses } = reducer.clientReducer;
  //   console.log("reducer here", reducer.clientReducer);
  useEffect(() => {
    dispatch({ type: "FETCHING_CLIENT_CLASSES" });
    axiosWithAuth()
      .get(`/api/classes`)
      .then((res) => {
        //   console.log(res);
        dispatch({ type: "SAVING_CLIENT_CLASSES", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SAVING_ERROR", payload: err });
      });
  }, [dispatch]);

  const joinClass = (item) => {
    const class_id = item.id;
    axiosWithAuth()
      .post(`/api/clients/${id}/classes`, { class_id })
      .then((res) => {
        //   console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("clicked ", item);
  };
  return (
    <div>
      <Navbar />
      <Header />
      <ClientDisplayClasses allClasses={allClasses} joinClass={joinClass} />
    </div>
  );
};

export default ClientHomePage;
