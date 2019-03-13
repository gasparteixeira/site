import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { nprogressMiddleware } from "redux-nprogress";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware, nprogressMiddleware(), promise))
);

export default store;
