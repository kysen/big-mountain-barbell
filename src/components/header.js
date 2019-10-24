import React from "react";
import Navbar from "./navbar";
import "../static/styles/header.scss";
import { directive } from "@babel/types";

const Header = props => {
  return (
    <div className="header-wrapper">
      <div className="heading-wrapper">
        <h1 className="heading">Call Today! (801) 673-1383</h1>
      </div>
      <Navbar page={props.page} setPage={props.setPage} />
    </div>
  );
};

export default Header;
