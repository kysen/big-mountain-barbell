import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/main.scss";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Switchy from "./components/switchy";

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
