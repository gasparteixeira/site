import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));
if (module.hot) {
  module.hot.accept();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {})
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
