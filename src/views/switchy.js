import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home-page/home";
import About from "./pages/about-page/about";
import Memberships from "./pages/memberships";
import Services from "./pages/services-page/services";

const Switchy = () => {
  return (
    <div className="pages-wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/memberships" component={Memberships} />
        <Route path="/services" component={Services} />
      </Switch>
    </div>
  );
};

export default Switchy;
