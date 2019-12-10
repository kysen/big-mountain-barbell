import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const lynndsey_eldridge = require("../../../assets/images/coaches/lynndsey_eldridge.jpg");

const LynndseyEldridge = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Lynndsey Eldridge</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${lynndsey_eldridge})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Lynndsey Eldridge is one of our gym owners and has limited personal
          training slots available for those who want to work with her.
          <br />
          <br />
          Lynndsey graduated from Weber State University in 2011 with a BIS
          degree of English, Political Science and Interpersonal Communication
          with a minor in legal studies. After college Lynndsey became fully
          immersed in her career as a personal trainer and wellness coach after
          getting certified through the National Academy of Sports Medicine as a
          Certified Personal Trainer and Certified Fitness Nutrition Specialist
          and has attended many courses and certifications over the years.
          <br />
          <br />
          In 2012 Lynndsey founded Fitbliss Fitness, an in person and online
          training program geared toward empowering women. Fitbliss programs
          focus on the mental, physical and emotional balance. Lynndsey believes
          that optimal health starts from the inside and works it’s way out.
          <br />
          <br />
          In 2014, she and her husband Zac opened Big Mountain Barbell 1.0 out
          of a small 2000 square foot facility in Sandy. In 2017, the Eldridges
          expanded their business to the facility we are currently located in
          Midvale.
          <br />
          <br />
          She is a National level NPC Bikini Competitor, top Spartan Race
          finisher and 60kg Powerlifter and she and she and Zac are expecting
          their first baby in April 2019.
          <br />
          <br />
          She loves being outside and active in the summer sun and spends much
          of the cold winter of Utah training in the gym.
          <br />
          <br />
          She works with clients locally in Utah and all around the country to
          help them find their “Fitbliss” by acting as their coach and mentor in
          finding a more manageable and balanced fitness lifestyle.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Lynndsey Eldridge.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default LynndseyEldridge;
