/// react II only
const initalValue = {
  clientID: 0,
  instructorID: 0,
  loading: false,
  data: [],
  error: "",
};

export const userReducer = (state = initalValue, action) => {
  switch (action.type) {
    case "SAVE_USER_ID":
      return {
        ...state,
        instructorID: action.payload,
      };
    default:
      return state;
  }
};
