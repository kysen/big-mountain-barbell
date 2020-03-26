import React from "react";

import { Fade } from "react-slideshow-image";

import appHome from "../../../../assets/images/iPhone-screenshots/home.png";
import appWeekly from "../../../../assets/images/iPhone-screenshots/week.png";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
};

const IPhoneShots = () => {
  return (
    <div className="iphone-shots-container">
      <div className="iphone-shots-text-left">
        <div className="app-title">
          Big Mountain
          <br /> Barbell App!
        </div>
        <div className="app-description">
          Personal training workouts written by top industry coaches and
          delivered straight to your phone through the Big Mountain Barbell App!
          Whether you’re an experienced lifter or just getting started, you can
          do our lifting classes anytime, anywhere with the guidance,
          accountability and support you need to achieve the results you want!
        </div>
      </div>
      <Fade className="fade" {...fadeProperties}>
        <div className="each-fade">
          <img
            className="iphone-image"
            src={appHome}
            alt="Iphone-Screenshots"
          ></img>
        </div>
        <div className="each-fade">
          {" "}
          <img
            className="iphone-image"
            src={appWeekly}
            alt="Iphone-Screenshots"
          ></img>
        </div>
      </Fade>
      {/* <div className="image-container">
        <img
          className="iphone-image"
          src={currentShot}
          alt="Iphone-Screenshots"
        ></img>
      </div> */}
    </div>
  );
};

export default IPhoneShots;
