import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "../types/authTypes";

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  const { type, err } = action;
  switch (type) {
    case LOGIN_ERROR:
      // console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case LOGIN_SUCCESS:
      console.log("Login success"); // later makes this as a notif ?
      return {
        ...state,
        authError: null,
      };
    case SIGNOUT_SUCCESS:
      console.log("Signout success"); // to check if it works
      return state;
    case SIGNUP_SUCCESS:
      console.log("Signup success");
      return {
        ...state,
        authError: null,
      };
    case SIGNUP_ERROR:
      console.log("Signup error");
      return {
        ...state,
        authError: err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
