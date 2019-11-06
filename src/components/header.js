import React from "react";
import Navbar from "./navbar";
import "../assets/styles/header.scss";

const Header = props => {
  return (
    <div className="header-wrapper">
      <Navbar
        currentContent={props.currentContent}
        setCurrentContent={props.setCurrentContent}
        pages={props.pages}
      />
    </div>
  );
};

export default Header;
