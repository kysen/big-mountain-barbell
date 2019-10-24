import React from "react";

const Navbar = () => {
  const logo = require("../static/images/big-mountain-barbell-logo.jpg");

  return (
    <div className="nav-bar-wrapper">
      <nav className="nav-bar">
        <div className="nav-bar-logo-wrapper">
          <img className="nav-bar-logo" src={logo} alt="hello" />
          <div className="nav-bar-logo-heading-wrapper">
            <h3 className="nav-bar-logo-heading">741 Smelter Street</h3>
            <h3 className="nav-bar-logo-heading">Midvale, UT 84047</h3>
          </div>
        </div>

        <div className="nav-bar-buttons-wrapper">
          <button className="nav-bar-button">Home</button>
          <button className="nav-bar-button">About</button>
          <button className="nav-bar-button">Memberships</button>
          <button className="nav-bar-button">Facility</button>
          <button className="nav-bar-button">Services</button>
          <button className="nav-bar-button">Coaches</button>
          <button className="nav-bar-button">Contact Us</button>
        </div>

        <div className="nav-bar-social-wrapper"></div>
      </nav>
    </div>
  );
};

export default Navbar;
