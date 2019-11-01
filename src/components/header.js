import React from "react";
import Navbar from "./navbar";
import "../assets/styles/header.scss";

const Header = props => {
  const [page, setPage] = React.useState("home");

  return (
    <div className="header-wrapper">
      <div className="heading-wrapper">
        {/* <h1 className="heading">Call Today! (801) 673-1383</h1> */}
      </div>
      <Navbar page={page} setPage={setPage} />
    </div>
  );
};

export default Header;
