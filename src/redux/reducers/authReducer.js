import { TYPES } from "../types";

const initState = {
  isAuth: false,
  userName: "",
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        isAuth: action.payload,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
