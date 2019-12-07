import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Memberships from "./pages/Memberships/memberships";
import Services from "./pages/Services/services";
import Coaches from "./pages/Coaches/Coaches";
import AndyMower from "./pages/Coaches/AndyMower";

const Switchy = () => {
  return (
    <div className="pages-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/memberships" component={Memberships} />
        <Route path="/services" component={Services} />
        <Route path="/coaches" component={Coaches} />
        <Route path="/andy-mower" component={AndyMower} />
      </Switch>
    </div>
  );
};

export default Switchy;
