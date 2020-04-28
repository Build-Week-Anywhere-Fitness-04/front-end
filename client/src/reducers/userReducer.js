/// react II only
import { initialValues } from "./initialValues";

export const userReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "SAVE_INSTRUCTOR_ID":
      // const id = JSON.parse(localStorage.getItem("id"));
      return {
        ...state,
        instructorID: action.payload,
      };
    //  case "POSTING_DATA":
    //    return {
    //      ...state,
    //      loading: true,
    //    };
    //  case "SAVING_POSTED_DATA":
    //    return {
    //      ...state,
    //      loading: false,
    //      instructorClass: action.payload,
    //    };
    //  case "POSTED_ERROR":
    //    return {
    //      ...state,
    //      loading: false,
    //    };
    default:
      return state;
  }
};
