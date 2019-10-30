import React from "react";
// import { useNavigation, useNavigationParam } from "react-navigation-hooks";

const Navbar = props => {
  const logo = require("../assets/images/big-mountain-barbell-logo.jpg");
  // const { navigate } = useNavigation();

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
          {/* <button className="nav-bar-button" onClick={() => navigate("Home")}>
            Home
          </button> */}

          <button
            className={`nav-bar-button ${
              props.page === "home" ? "active" : ""
            }`}
            onClick={() => props.setPage("home")}
          >
            About
          </button>

          <button
            className={`nav-bar-button ${
              props.page === "memberships" ? "active" : ""
            }`}
            onClick={() => props.setPage("memberships")}
          >
            Memberships
          </button>

          <button
            className={`nav-bar-button ${
              props.page === "facility" ? "active" : ""
            }`}
            onClick={() => props.setPage("facility")}
          >
            Facility
          </button>

          <button
            className={`nav-bar-button ${
              props.page === "services" ? "active" : ""
            }`}
            onClick={() => props.setPage("services")}
          >
            Services
          </button>

          <button
            className={`nav-bar-button ${
              props.page === "coaches" ? "active" : ""
            }`}
            onClick={() => props.setPage("coaches")}
          >
            Coaches
          </button>

          <button
            className={`nav-bar-button ${
              props.page === "contact" ? "active" : ""
            }`}
            onClick={() => props.setPage("contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="nav-bar-social-wrapper">
          <div className="facebook">facebook</div>
          <div className="instagram">instagram</div>
          <div className="twitter">twitter</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
