import React from "react";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="footer-wrapper">
        <div>
          <h2>GET IN TOUCH</h2>
          <h4>741 Smelter Street, Midvale, Utah 84047</h4>
          <h4>(801) 673-1383</h4>
          <h4>BigMountainBarbell@gmail.com</h4>
        </div>
        <div className="footer-form">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <textarea placeholder="Message" rows="5" />
          <button className="footer-button">send</button>
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
