import { combineReducers } from "redux";
import userReducer from "./userReducer";
import fetchReducer from "./fetchReducer";

export default combineReducers({
  user: userReducer,
  fetch: fetchReducer,
});
