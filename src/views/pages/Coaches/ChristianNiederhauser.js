import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const christian_niederhauser = require("../../../assets/images/coaches/christian_niederhauser.jpg");

const ChristianNiederhauser = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Christian Niederhauser</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${christian_niederhauser})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Christian is a performance coach and a running technique specialist.
          His performance based approach empowers his clients to overcome their
          obstacles and run injury free. There are many misperceptions and myths
          related to running. Christian brings light to the truth and teaches
          how to effectively implement proven strategies to achieve one's goals.
          <br />
          <br />
          Christian is also a practicing physical therapist assistant. He has
          over 6 years of clinical experience in the management of both healthy
          and injured athletes. As a running coach and injury rehab
          professional, he consults and treats runners of all ages and
          abilities. Christian utilizes a comprehensive approach to help his
          clients succeed; blending running technique with progressive loading
          exercise and other well researched strategies. He has proven success
          in getting people back to running, improving their performance, and
          preventing injury.
          <br />
          <br />
          In his free time, Christian enjoys trail running, backcountry skiing,
          mountain biking, and spending time with his wife and two sons.
          <br />
          <br />
          <div
            style={{
              color: "grey",
              fontStyle: "italic"
            }}
          >
            <p>Certified Running Technique Specialist</p>
            <p>Pose Method Running Coach</p>
            <p>Licensed Physical Therapist Assistant</p>
          </div>
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Christian Niederhauser.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default ChristianNiederhauser;
