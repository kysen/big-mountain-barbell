import React from "react";
import Form from "../form/Form";

import Linkify from "react-linkify";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="footer-wrapper">
        <div className="footer-address">
          <h2>GET IN TOUCH</h2>
          <a
            href="https://www.google.com/maps/place/741+Smelter+St,+Midvale,+UT+84047/@40.6120876,-111.9131705,17z/data=!3m1!4b1!4m5!3m4!1s0x875288fddbea93af:0x218b4d7554fd2324!8m2!3d40.6120876!4d-111.9109818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>741 Smelter Street, Midvale, Utah 84047</h4>
          </a>
          <Linkify>
            <h4>(801)673-1383</h4>
          </Linkify>
          <Linkify>
            <h4>BigMountainBarbell@gmail.com</h4>
          </Linkify>
        </div>
        <Form footer />
      </div>
      <div className="footer-copyright">
        <p>© 2019 BIG MOUNTAIN BARBELL, LLC. All Rights Reserved.</p>
        <p>
          No imagery or logos contained within this site may be used without the
          permission of Big Mountain Barbell, LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
