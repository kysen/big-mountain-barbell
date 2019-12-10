import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const ben_anderson = require("../../../assets/images/coaches/ben_anderson.jpg");

const MichelleCarlson = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Ben Anderson</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${ben_anderson})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Ben Anderson approaches coaching from the perspective of a basketball
          athlete and it is easy to see how this team sport has influenced his
          methods. Ben is constantly connecting everyone in his vicinity by
          joking, laughing and sharing information about lifting, developing a
          real team atmosphere at Big Mountain Barbell. While growing up in
          Australia and New Zealand, Ben says he realized early on that there
          was a need for strength and conditioning coaches at the elite level of
          basketball and began pursuing this as a career. He has been coaching
          since 2002 and has played basketball at the Semi-Professional and
          Professional levels. Now, Ben coaches strength, general fitness and
          weight loss as well as sport specific programs. Ben’s favorite lifts
          are the deadlift, squat and close grip bench press because of their
          direct carryover into athletics and their challenging nature.
        </p>
        <br />

        <div
          style={{
            color: "grey",
            fontStyle: "italic"
          }}
        >
          <p>NESTA Certified Personal Trainer</p>
          <p>NESTA Nutrition Coach</p>
          <p>NASM Certified Personal Trainer</p>
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Michelle Carlson.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default MichelleCarlson;
