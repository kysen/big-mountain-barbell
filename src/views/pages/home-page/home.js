import React from "react";
// import ContactUs from "./contact";
import HypeVideo from "./hype-video";
import InstaFeed from "./insta-feed";

const Home = props => {
  return (
    <div className="home-container">
      <HypeVideo />
      <div className="home-page-content">
        <div className="home-page-quote">
          "Our mission is to provide safe, efficient, effective and balanced
          fitness and nutrition coaching in a positive and welcoming environment
          using research-based programming. We ensure that all trainers are
          experienced, knowledgeable, motivating and that they truly care about
          client results."
        </div>
        <InstaFeed />
        <div className="schedule-a-tour-container">schedule a tour</div>
      </div>
    </div>
  );
};

export default Home;