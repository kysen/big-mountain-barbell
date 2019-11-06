import React from "react";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div className="about-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=eKEgbMwg8BU"
        playing
        muted
        controls={false}
      />
    </div>
  );
};

export default About;
