import React from "react";
import WbnPLayer from "./WbnPlayer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WbnPLayer} />
      <Route exact path="/:activeVideo" component={WbnPLayer} />
    </Switch>
  </BrowserRouter>
);

export default App;
