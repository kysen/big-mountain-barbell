import React from "react";
import "./assets/styles/main.scss";
import Header from "./components/header";
import Home from "./components/pages.js/home.js";

const App = () => {
  const phoneNumber = "(801) 673-1383";
  const [page, setPage] = React.useState("home");

  return (
    <div className="App">
      <Header phoneNumber={phoneNumber} />
      <div className="pages-wrapper">
        <Home phoneNumber={phoneNumber} />
      </div>
    </div>
  );
};

export default App;
