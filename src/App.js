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

library.add(fab, fas, faCoffee, faStar);

const App = () => {
  const [currentContent, setCurrentContent] = React.useState("Home");

  const pages = ["/", "ABOUT", "MEMBERSHIPS", "SERVICES"];

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
