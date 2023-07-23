import { TYPES } from "../types";
//ACTION CREATOR

export const onLogin = (param) => {
  return {
    type: TYPES.LOGIN,
    payload: param,
  };
};

export const onLogout = (param) => {
  return {
    type: TYPES.LOGOUT,
    payload: false,
  };
};
