import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Memberships from "./pages/memberships";
import Services from "./pages/services";

const Switchy = props => {
  // const callPage = () => {
  //   if (props.currentContent === "About") {
  //     return <About />;
  //   } else if (props.currentContent === "Memberships") {
  //     return <Memberships />;
  //   } else if (props.currentContent === "Services") {
  //     return <Services />;
  //   } else {
  //     return <Home />;
  //   }
  // };

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
