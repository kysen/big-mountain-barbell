import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const ben_anderson = require("../../../assets/images/coaches/ben_anderson.jpg");

const BenAnderson = () => {
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
        <p>
          “The way an individual trains mirrors the way they live their life,”
          says Ben in response to what he has learned during his time coaching.
          During his free time, Ben is typically enjoying the company of his
          wife and son or watching and studying the game of basketball. You will
          find it hard to miss this tall, blonde guy at Big Mountain Barbell who
          is sure to say Hello and flash you a friendly smile.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Ben Anderson.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default BenAnderson;
