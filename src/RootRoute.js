import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home";
import Portifolio from "./pages/porfitolio";

const RootRoute = props => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Portifolio} />
        <Redirect to={{ pathname: "/" }} />
      </Switch>
    </div>
  );
};

export default withRouter(RootRoute);
