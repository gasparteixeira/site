import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { NProgress } from "redux-nprogress";
import ReactGA from "react-ga";
import RootRoute from "./RootRoute";
import "./style.scss";

function initializeReactGA() {
  ReactGA.initialize(process.env.GA);
  ReactGA.pageview("/");
}

const App = props => {
  initializeReactGA();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <NProgress color="#9e7806" />
          <RootRoute />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
