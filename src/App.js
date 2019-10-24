import React from "react";
import logo from "./logo.svg";
import "./static/styles/main.scss";
import Header from "./components/header";
import Home from "./components/pages.js/home.js";

const App = () => {
  const [page, setPage] = React.useState("home");

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
