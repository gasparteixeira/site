import { beginTask, endTask } from "redux-nprogress";
import _ from "lodash";

import {
  START_LOADING,
  STOP_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from "./type";

export const startLoading = () => dispatch => {
  dispatch(beginTask());
  dispatch({ type: START_LOADING });
};

export const stopLoading = () => dispatch => {
  dispatch(endTask());
  dispatch({ type: STOP_LOADING });
};

export const setMessage = message => dispatch => {
  dispatch({ type: SET_MESSAGE, payload: message });
};

export const clearMessage = () => dispatch => {
  dispatch({ type: CLEAR_MESSAGE });
};
