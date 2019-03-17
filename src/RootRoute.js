import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home";
import Portifolio from "./pages/porfitolio";
import NotFound from "./pages/notFound";

const RootRoute = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Portifolio} />
        <Route path="/404" component={NotFound} />
        <Redirect to={{ pathname: "/404" }} />
      </Switch>
    </div>
  );
};

export default withRouter(RootRoute);
