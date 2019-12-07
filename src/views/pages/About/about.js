import React from "react";
import TourVid from "./tour-vid";
import Gallery from "./gallery";
import Content from "./content";
import Facility from "./facility";

const About = () => {
  return (
    <div className="about-container">
      <TourVid />
      <Content />
      <Gallery />
      <Facility />
    </div>
  );
};

export default About;
