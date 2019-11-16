import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavbarTab from "./navbar-tab";

import { withRouter } from "react-router-dom";

library.add(fab, faCoffee);

const Navbar = props => {
  const logo = require("../../assets/images/big-mountain-barbell-logo.jpg");
  const [scrollTrigger, setScrollTrigger] = useState(false);

  useEffect(() => {
    const calcScroll = () => {
      if (window.scrollY > 400) {
        setScrollTrigger(true);
      } else {
        setScrollTrigger(false);
      }
    };
    if (props.location.pathname === "/") {
      window.addEventListener("scroll", calcScroll);
    }
    return () => {
      window.removeEventListener("scroll", calcScroll);
    };
  }, [props.location.pathname]);

  useEffect(() => {
    if (props.location.pathname !== "/") {
      setScrollTrigger(true);
    }
  }, [props.location.pathname]);

  const navbarTabGenerator = () => {
    return props.pages.map((tab, index) => {
      return (
        <NavbarTab
          key={index}
          scrollTrigger={scrollTrigger}
          currentContent={props.currentContent}
          setCurrentContent={props.setCurrentContent}
          tab={tab}
        />
      );
    });
  };

  return (
    <div
      className="nav-bar-wrapper"
      style={scrollTrigger ? {} : { color: "white", background: "transparent" }}
    >
      <nav className="nav-bar">
        <div
          className="nav-bar-logo-wrapper"
          style={scrollTrigger ? {} : { visibility: "hidden" }}
        >
          <img className="nav-bar-logo" src={logo} alt="hello" />
          <div className="nav-bar-logo-heading-wrapper">
            <h3 className="nav-bar-logo-heading">741 Smelter Street</h3>
            <h3 className="nav-bar-logo-heading">Midvale, UT 84047</h3>
          </div>
        </div>

        <div className="nav-bar-buttons-wrapper">{navbarTabGenerator()}</div>
        <div className="nav-bar-social-wrapper">
          <a
            href="https://www.facebook.com/bigmountainbarbell/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              className="icon"
              style={scrollTrigger ? {} : { color: "white" }}
            />
          </a>
          <a
            href="https://www.instagram.com/bigmountainbarbell/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="icon"
              style={scrollTrigger ? {} : { color: "white" }}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCETBMt6vwzcI-cjxvk-rKVQ"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-wrapper"
          >
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              className="icon"
              style={scrollTrigger ? {} : { color: "white" }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
