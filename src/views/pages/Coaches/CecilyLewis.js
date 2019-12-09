import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const cecily_lewis = require("../../../assets/images/coaches/cecily_lewis.png");

const CecilyLewis = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Cecily Lewis</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${cecily_lewis})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Cecily remembers watching her older brother practice bodybuilding
          poses and trying out the Lat Spread for herself at a young age. From
          them on, Cecily was constantly active and developing a love of what
          the human body is capable of and studied health and fitness in order
          to combat her family history of autoimmune thyroid disease. Through
          her eight years of coaching, Cecily has become a specialist in
          bodybuilding, macronutrient-based nutrition coaching, and strength
          training through powerlifting and weightlifting and is passionate
          about teaching others how to build healthy relationships with their
          own bodies. “Change is constant and every ebb and flow is a learning
          experience,” says Cecily in regards to lessons she has learned as a
          coach. Truly a versatile athlete herself, Cecily employs many
          different training variations to develop her body for Bikini
          Competitions. Her favorite lift is the Deadlift for its amazing effect
          of building musculature. With a 400+ pound deadlift, she is inspiring
          to other female lifters in and out of Big Mountain Barbell.
        </p>
        <br />
        <p>
          ​ Cecily has many hobbies outside of the gym including rock climbing,
          hiking and swimming. She is also a proficient seamstress and makes her
          own lifting wrist straps and bikini suits. She was born and raised in
          the Salt Lake area and lives in South Jordan with her two dogs.
        </p>
        <br />

        <div
          style={{
            color: "grey",
            fontStyle: "italic"
          }}
        >
          <p>B.S. Exercise Science</p>
          <p>ACSM Certified Exercise Physiologist</p>
          <p>TRX Qualified Group Instructor</p>
        </div>
      </div>
      <div className="coach-divider" />
      <div className="coach-button" onClick={setOpen}>
        Book Now
      </div>
      <Modal
        open={open}
        close={() => setOpen(false)}
        header="Contact"
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Cecily Lewis.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default CecilyLewis;
