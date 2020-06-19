import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const taylor = require("../../../assets/images/coaches/taylor.JPG");

const Taylor = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Taylor Vigil</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${taylor})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Strength and Powerlifting Training for 3 years.
          <br />
          <br />
          Fitbliss Fitness Coach for 2.5 years.
          <br />
          <br />
          Nutrition Coach - NASM Certified Fitness Nutrition Specialist
          <br />
          <br />
          Raw and Equipped Powerlifter.
          <br />
          <br />
          16 World Records 30 National Records 22 State Records
          <br />
          <br />
          Best Lifts Raw:
          <br /> 308lbs Squat
          <br /> 180lbs Bench
          <br /> 320lbs Deadlift
          <br />
          <br />
          Best Lifts Equipped:
          <br /> 402lbs Squat
          <br /> 264lbs Bench
          <br /> 375lbs Deadlift
          <br />
          <br />
          Availability: Private Personal Training - 1-3 sessions per week. Group
          Sessions. 1-3 sessions per week. Online Coaching and Programming.
          <br />
          <br />
          My goal is to make a change in the world. I believe I can best fulfill
          that goal by helping others. Having the opportunity to transform lives
          with my knowledge and experience is what I am most passionate about. I
          give my all to every single one of my clients knowing that they are
          putting their trust in me.
        </p>
      </div>
      <div className="coach-divider" />
      <div className="coach-button" onClick={setOpen}>
        Book Now
      </div>
      <Modal
        open={open}
        close={() => setOpen(false)}
        header="Contact"
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Taylor Vigil.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default Taylor;
