import React from "react";
import TourVid from "./tour-vid";
import Gallery from "./gallery";
import Content from "./content";

const About = () => {
  return (
    <div className="about-container">
      <TourVid />
      <Content />
      <Gallery />
    </div>
  );
};

export default About;
