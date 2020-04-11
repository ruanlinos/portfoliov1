import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./pages/index";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  );
}
