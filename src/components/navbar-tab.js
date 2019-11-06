import React from "react";
import { NavLink } from "react-router-dom";

const NavbarTab = props => {
  return (
    <NavLink
      className="nav-bar-button"
      activeClassName="nav-bar-button-active"
      exact
      to={props.tab}
    >
      {props.tab}
    </NavLink>
  );
};

export default NavbarTab;
