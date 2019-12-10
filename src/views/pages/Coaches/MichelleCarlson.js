import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const michelle_carlson = require("../../../assets/images/coaches/michelle_carlson.jpg");

const MichelleCarlson = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Michelle Carlson</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${michelle_carlson})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Michelle is a coach, strength athlete, and Masters Level powerlifter
          with records in squat, bench, and overall total in USAPL.
          <br />
          <br />
          Michelle’s mission is to help others get strong and to educate clients
          with skills and tools they can take beyond their coaching sessions.
          Whether it is to get healthier and stronger or get ready for a
          competition, Michelle wants to help people tap into their potential
          and achieve their goals.
          <br />
          <br />
          Michelle has a B. A. in Psychology and Philosophy, a Masters Degree in
          Teaching, National Academy of Sports Medicine Personal Training
          Certification, and has15 years personal experience in fitness and
          strength training. She is also a nutrition coach with a background in
          plant-based nutrition for athletes.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Michelle Carlson.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default MichelleCarlson;
