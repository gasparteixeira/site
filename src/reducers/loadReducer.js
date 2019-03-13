import {
  START_LOADING,
  STOP_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from "../actions/type";

const initialState = {
  loading: false,
  message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null
      };
    default:
      return state;
  }
}
