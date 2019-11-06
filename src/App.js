import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/main.scss";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Switchy from "./components/switchy";

const App = () => {
  const [currentContent, setCurrentContent] = React.useState("Home");

  const pages = ["Home", "About", "Memberships", "Services"];

  const phoneNumber = "(801) 673-1383";

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
