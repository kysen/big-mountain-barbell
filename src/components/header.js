import React from "react";
import Navbar from "./navbar";
import "../assets/styles/header.scss";

const Header = () => {
  const [page, setPage] = React.useState("home");

  return (
    <div className="header-wrapper">
      <Navbar page={page} setPage={setPage} />
    </div>
  );
};

export default Header;
