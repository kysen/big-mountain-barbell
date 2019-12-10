import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Memberships from "./pages/Memberships/memberships";
import Services from "./pages/Services/services";
import Coaches from "./pages/Coaches/Coaches";
import AndyMower from "./pages/Coaches/AndyMower";
import AnnekeCannon from "./pages/Coaches/AnnekeCannon";
import BenAnderson from "./pages/Coaches/BenAnderson";
import CecilyLewis from "./pages/Coaches/CecilyLewis";
import DevanNielsen from "./pages/Coaches/DevanNielsen";
import HillaryGoldstein from "./pages/Coaches/HillaryGoldstein";
import JasonGonzales from "./pages/Coaches/JasonGonzales";
import KatieBaretela from "./pages/Coaches/KatieBaretela";
import LynndseyEldridge from "./pages/Coaches/LynndseyEldridge";
import MeganForrest from "./pages/Coaches/MeganForrest";
import MichelleCarlson from "./pages/Coaches/MichelleCarlson";
import NickyBarz from "./pages/Coaches/NickyBarz";
import SamiClements from "./pages/Coaches/SamiClements";
import Taylor from "./pages/Coaches/Taylor";
import Braden from "./pages/Coaches/Braden";

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
        <Route path="/anneke-cannon" component={AnnekeCannon} />
        <Route path="/ben-anderson" component={BenAnderson} />
        <Route path="/cecily-lewis" component={CecilyLewis} />
        <Route path="/devan-nielsen" component={DevanNielsen} />
        <Route path="/hill-goldstein" component={HillaryGoldstein} />
        <Route path="/jason-gonzales" component={JasonGonzales} />
        <Route path="/katie-baretela" component={KatieBaretela} />
        <Route path="/lynndsey-eldridge" component={LynndseyEldridge} />
        <Route path="/megan-forrest" component={MeganForrest} />
        <Route path="/michelle-carlson" component={MichelleCarlson} />
        <Route path="/nicky-barz" component={NickyBarz} />
        <Route path="/sami-clements" component={SamiClements} />
        <Route path="/taylor" component={Taylor} />
        <Route path="/braden" component={Braden} />
      </Switch>
    </div>
  );
};

export default Switchy;
