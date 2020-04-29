import { initialValues } from "./initialValues";

export const clientReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "SAVE_CLIENT_ID":
      return {
        ...state,
        clientID: action.payload,
      };
    case "FETCHING_CLIENT_CLASSES":
      return {
        ...state,
        loading: true,
      };
    case "SAVING_CLIENT_CLASSES":
      return {
        ...state,
        loading: false,
        allClasses: action.payload,
      };
    case "SAVING_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // filtered classes
    case "ADDING_SEARCH_CLASSES":
      return {
        ...state,
        filterClasses: action.payload,
      };
    default:
      return state;
  }
};
