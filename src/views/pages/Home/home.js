import React, { useState } from "react";

import Modal from "../../../components/Modal/Modal";
import HypeVideo from "./hype-video";
import InstaFeed from "./insta-feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="home-container">
      <HypeVideo setOpen={setOpen} />
      <div className="home-page-content">
        <div className="home-page-quote" style={{ marginTop: "40px" }}>
          We are a Private Gym who serves a diverse community of athletes and
          members from all ages, backgrounds and skill levels.
          <br />
          <br />
          We offer private personal training, sport specific coaching, group
          classes, 24/7 access monthly gym memberships and good vibes.
        </div>

        <div className="home-page-quote">
          "Our mission is to provide safe, efficient, effective and balanced
          fitness and nutrition coaching in a positive and welcoming environment
          using research-based programming. We ensure that all trainers are
          experienced, knowledgeable, motivating and that they truly care about
          client results."
        </div>
        <div className="reviews-container">
          <div className="reviews-header">
            <h1>Overall Customer Rating:</h1>
          </div>
          <div className="stars-container">
            <div className="stars">
              <FontAwesomeIcon icon={["fas", "star"]} className="icon star" />
              <FontAwesomeIcon icon={["fas", "star"]} className="icon star" />
              <FontAwesomeIcon icon={["fas", "star"]} className="icon star" />
              <FontAwesomeIcon icon={["fas", "star"]} className="icon star" />
              <FontAwesomeIcon icon={["fas", "star"]} className="icon star" />
            </div>
            <div className="num-container">
              <h1 className="num">5.0</h1>
            </div>
          </div>
          <div className="total">
            <h1>
              95 Reviews click{" "}
              <a
                className="reviews-here"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/search?q=bigmountainbarbell+google+reviews&rlz=1C1CHBF_enUS839US839&oq=bigmountainbarbell+google+reviews&aqs=chrome..69i57.9279j0j7&sourceid=chrome&ie=UTF-8#lrd=0x87528862c59104b7:0x11c2551e25dfc20d,1,,,"
              >
                here
              </a>{" "}
              to read
            </h1>
          </div>
        </div>
        <InstaFeed />

        <Modal open={open} close={() => setOpen(false)} header="Contact" />
      </div>
    </div>
  );
};

export default Home;
