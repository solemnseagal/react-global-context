import { constants } from "./constants";

export const initialState = {
  user: "",
  loginSuccess: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return {
        ...state,
        loginSuccess: true,
      };

    case constants.SETUSER:
      return {
        ...state,
        user: action.username,
      };
    default:
      return state;
  }
};

export default reducer;
