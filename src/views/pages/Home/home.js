import React, { useState } from "react";

import Modal from '../../../components/Modal/Modal';
import HypeVideo from "./hype-video";
import InstaFeed from "./insta-feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="home-container">
      <HypeVideo setOpen={setOpen} />
      <div className="home-page-content">
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
            <h1>( 90 Google Reviews )</h1>
          </div>
        </div>
        <div className="home-page-quote">
          "Our mission is to provide safe, efficient, effective and balanced
          fitness and nutrition coaching in a positive and welcoming environment
          using research-based programming. We ensure that all trainers are
          experienced, knowledgeable, motivating and that they truly care about
          client results."
        </div>
        <InstaFeed />
        <div className="schedule-a-tour-container" onClick={() => {
          setOpen(true);
          console.log('clicked');
        }}>schedule a tour</div>
        <Modal open={open} close={() => setOpen(false)} header="Contact" />
      </div>
    </div>
  );
};

export default Home;
