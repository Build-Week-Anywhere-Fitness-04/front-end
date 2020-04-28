import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import InstructorHeader from "./InstructorHeader";
import InstructorContent from "./InstructorContent";
import DisplayInstructorsClasses from "./DisplayInstructorsClasses";

const InstructionHomePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { instructorID, instructorClass } = reducer.userReducer;
  //   console.log("reducer here", instructorID);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/instructors/${id}/classes`)
      .then((res) => {
        console.log("response here ", res);
      })
      .catch((err) => {
        console.log(err);
        // dispatch({type: 'GETTING_INSTRUCTOR_CLASSES', payload: acti})
      });
  }, []);

  return (
    <div>
      <InstructorHeader />
      <InstructorContent />
      <DisplayInstructorsClasses />
    </div>
  );
};

export default InstructionHomePage;
