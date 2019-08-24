import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoggerViewerComponent from "./components/LogViewerComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/" component={HomeComponent} exact={true} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/logviewer" component={LoggerViewerComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
