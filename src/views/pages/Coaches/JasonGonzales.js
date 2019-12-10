import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const jason_gonzales = require("../../../assets/images/coaches/jason_gonzales.jpg");

const JasonGonzales = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Jason Gonzales</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${jason_gonzales})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Known by his reputation as a movement and mobility guru, Jason is
          always ready to offer advice to his fellow lifters about technique or
          corrective exercises. Jason’s coaching philosophy revolves around
          helping people to move more effortlessly in order to prevent injury,
          improve athletic performance and build strength. “I’ve never heard
          anyone complain of being too strong,” says Jason, who uses heavy
          resistance training to help his clients build confidence in and out of
          the gym.
          <br /> <br />​ Jason, a world record holder in the raw Bench Press, is
          always versed in the latest strength and conditioning research and is
          a self-proclaimed nerd for fitness information. His passion for
          helping people move better and get stronger is reflected in his
          information-packed Instagram page where, daily, he breaks down the
          biomechanics of Powerlifting movements. Jason Gonzales truly embodies
          the supple leopard.
        </p>
        <br />

        <div
          style={{
            color: "grey",
            fontStyle: "italic"
          }}
        >
          <p>
            NASM Certified Person Trainer <br />
            NASM Fitness Nutrition, Weight Loss Specialist
            <br />
            NASM Corrective Exercise Specialist
          </p>
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Jason Gonzales.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default JasonGonzales;
