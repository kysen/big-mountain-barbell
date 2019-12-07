import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/main.scss";

import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";
import Switchy from "./views/switchy";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import ReactGA from "react-ga";

// fortawesome
library.add(fab, fas, faCoffee, faStar);

// Google Analytics
ReactGA.initialize("UA-154109407-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  const [currentContent, setCurrentContent] = React.useState("Home");

  const pages = ["/", "ABOUT", "MEMBERSHIPS", "SERVICES", "COACHES"];

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
          pages={pages}
        />
        <Switchy
          currentContent={currentContent}
          setCurrentContent={setCurrentContent}
          pages={pages}
        />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
