import React from "react";
import ContactUs from "./contact";

const Home = props => {
  return (
    <div className="home-container">
      <div className="scrolling-pictures">scrolling-pictures</div>
      <div className="home-page-quote">
        "Our mission is to provide safe, efficient, effective and balanced
        fitness and nutrition coaching in a positive and welcoming environment
        using research-based programming. We ensure that all trainers are
        experienced, knowledgeable, motivating and that they truly care about
        client results."
      </div>
      <div className="schedule-a-tour-container">schedule a tour</div>
      <ContactUs phoneNumber={props.phoneNumber} />
    </div>
  );
};

export default Home;
