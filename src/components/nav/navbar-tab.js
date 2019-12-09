import React from "react";
import { NavLink } from "react-router-dom";

const NavbarTab = props => {
  return (
    <NavLink
      className={
        props.scrollTrigger ? "nav-bar-button" : "nav-bar-button-invisible"
      }
      activeClassName={
        props.scrollTrigger
          ? "nav-bar-button-active"
          : "nav-bar-button-invisible-active"
      }
      exact
      to={props.tab.toLowerCase()}
      onClick={() => {props.setScrollTrigger(true)}}
    >
      {props.tab === "/" ? "HOME" : props.tab}
    </NavLink>
  );
};

export default NavbarTab;
