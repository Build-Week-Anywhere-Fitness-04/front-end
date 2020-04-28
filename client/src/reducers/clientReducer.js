import { initialValues } from "./initialValues";

export const clientReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "SAVE_CLIENT_ID":
      return {
        ...state,
        clientID: action.payload,
      };
    default:
      return state;
  }
};
