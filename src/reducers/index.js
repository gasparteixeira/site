import { combineReducers } from "redux";
import { nprogress } from "redux-nprogress";

import loadReducer from "./loadReducer";

export default combineReducers({
  load: loadReducer,
  nprogress
});
