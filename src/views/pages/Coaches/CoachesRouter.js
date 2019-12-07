import React from "react";
import { Switch, Route } from "react-router-dom";

import Coaches from "./Coaches";
import AndyMower from "./AndyMower";

const Switchy = () => {
  return (
    <div className="pages-wrapper">
      <Switch>
        <Route exact path="/coaches" component={Coaches} />
        <Route exact path="/coaches/andy-mower" component={AndyMower} />
      </Switch>
    </div>
  );
};

export default Switchy;
