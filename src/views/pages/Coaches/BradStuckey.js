import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const brad_stuckey = require("../../../assets/images/coaches/brad_stuckey.jpg");

const BenAnderson = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Brad Stuckey</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${brad_stuckey})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Brad Stuckey graduated from California State University San Marcos in
          2009 with a Bachelors in Communication and a Minor in Spanish. Brad
          has always been a fan of organized sports and weightlifting, but truly
          became passionate about health and fitness after turning 30 and seeing
          a picture from a recent vacation. Brad used that picture as motivation
          to make fitness a priority in his life and developed a desire to help
          others achieve their goals also. His love for all things outdoor
          brought him to Utah where he spends his time with his little boy and
          his beautiful mother, hiking, snowboarding, golfing, and enjoying a
          cold beer with friends. Brad is a Certified Personal Trainer and
          Certified Nutritional Coach through the National Academy of Sports
          Medicine. Brad enjoys working with people in all stages of their
          fitness journeys and likes to pair nutrition and exercise in a
          customized plan to help clients reach their fitness goals. He
          specializes in increasing muscle mass through hypertrophy training as
          well as functional training utilizing a lot of core strength to help
          people perform well in their daily activities. Walter Payton is quoted
          as saying, “When you’re good at something, you’ll tell everyone. When
          you’re great at something, they’ll tell you.” Brad uses this quote
          every day to constantly strive to set and achieve new personal goals
          and implements the same passion in helping clients achieve theirs as
          well.
        </p>
        <br />
      </div>
      <div className="coach-divider" />
      <div className="coach-button" onClick={setOpen}>
        Book Now
      </div>
      <Modal
        open={open}
        close={() => setOpen(false)}
        header="Contact"
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Brad Stuckey.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default BenAnderson;
