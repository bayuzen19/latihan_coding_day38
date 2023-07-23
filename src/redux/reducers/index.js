import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { usersReducer } from "./usersReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  authReducer,
  productReducer,
  usersReducer,
});
