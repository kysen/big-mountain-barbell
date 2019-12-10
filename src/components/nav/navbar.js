import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavbarTab from "./navbar-tab";

import { withRouter } from "react-router-dom";

const Navbar = props => {
  const logo = require("../../assets/images/big-logo-cropped.png");
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
          setScrollTrigger={setScrollTrigger}
          tab={tab}
        />
      );
    });
  };

  return (
    <div
      className="nav-bar-container"
      style={scrollTrigger ? {} : { height: "0px" }}
    >
      <div
        className="nav-bar-wrapper"
        style={
          scrollTrigger ? {} : { color: "white", background: "transparent" }
        }
      >
        <nav className="nav-bar">
          <div
            className="nav-bar-logo-wrapper"
            style={scrollTrigger ? {} : { display: "none" }}
          >
            <img className="nav-bar-logo" src={logo} alt="hello" />
            <div className="nav-bar-logo-heading-wrapper">
              <a
                className="nav-bar-logo-heading"
                href="https://www.google.com/maps/place/741+Smelter+St,+Midvale,+UT+84047/@40.6120876,-111.9131705,17z/data=!3m1!4b1!4m5!3m4!1s0x875288fddbea93af:0x218b4d7554fd2324!8m2!3d40.6120876!4d-111.9109818"
                target="_blank"
                rel="noopener noreferrer"
              >
                741 Smelter Street <br />
                Midvale, UT 84047
              </a>
            </div>
          </div>

          <div className="nav-bar-buttons-wrapper">{navbarTabGenerator()}</div>
          <div className="nav-bar-social-wrapper">
            <a
              href="https://www.facebook.com/bigmountainbarbell/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                scrollTrigger ? "icon-wrapper" : "icon-wrapper-invisible"
              }
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} className="icon" />
            </a>
            <a
              href="https://www.instagram.com/bigmountainbarbell/"
              target="_blank"
              rel="noopener noreferrer"
              className={
                scrollTrigger ? "icon-wrapper" : "icon-wrapper-invisible"
              }
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} className="icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCETBMt6vwzcI-cjxvk-rKVQ"
              target="_blank"
              rel="noopener noreferrer"
              className={
                scrollTrigger ? "icon-wrapper" : "icon-wrapper-invisible"
              }
            >
              <FontAwesomeIcon icon={["fab", "youtube"]} className="icon" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
