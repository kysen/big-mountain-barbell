import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div>
          <h2>GET IN TOUCH</h2>
          <a
            href="https://www.google.com/maps/place/741+Smelter+St,+Midvale,+UT+84047/@40.6120876,-111.9131705,17z/data=!3m1!4b1!4m5!3m4!1s0x875288fddbea93af:0x218b4d7554fd2324!8m2!3d40.6120876!4d-111.9109818"
            target="_blank"
          >
            <h4>741 Smelter Street, Midvale, Utah 84047</h4>
          </a>
          <h4>(801) 673-1383</h4>
          <h4>BigMountainBarbell@gmail.com</h4>
        </div>
        <div className="footer-form">
          <input className="input-style" placeholder="Name" />
          <input className="input-style" placeholder="Email" />
          <input className="input-style" placeholder="Phone" />
          <textarea className="input-style" placeholder="Message" rows="5" />
          <button className="footer-button input-style">Send</button>
        </div>
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
