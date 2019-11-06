import React from "react";
import "./assets/styles/main.scss";
import Header from "./components/header";
import Home from "./components/pages.js/home.js";
import Footer from "./components/footer";

const App = () => {
  const phoneNumber = "(801) 673-1383";

  return (
    <div className="App">
      <div className="header-container">
        <Header phoneNumber={phoneNumber} />
      </div>
      <div className="pages-wrapper">
        <Home phoneNumber={phoneNumber} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
