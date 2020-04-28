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

    /// adding class
    //  case "POSTING_DATA":
    //    return {
    //      ...state,
    //      loading: true,
    //    };
    //  case "SAVING_POSTED_DATA":
    //    return {
    //      ...state,
    //      loading: false,
    //    };
    //  case "POSTED_ERROR":
    //    return {
    //      ...state,
    //      loading: false,
    //    };

    // FROM instructorHomePage.js
    case "FETCHING_INSTRUCTOR_CLASSES":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_INSTRUCTOR_CLASSES":
      return {
        ...state,
        loading: false,
        instructorClass: action.payload,
      };
    case "ERROR_GETTING_CLASSES":
      return {
        ...state,
        loading: false,
      };
    // end here

    // REMOVING CLASS
    case "REMOVING_CLASS":
      return {
        ...state,
        loading: true,
      };
    case "REMOVED_CLASS":
      return {
        ...state,
        loading: false,
      };
    case "ERROR_REMOVING_CLASS":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
