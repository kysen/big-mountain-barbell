import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const devan_nielsen = require("../../../assets/images/coaches/devan_nielsen.jpg");

const DevanNielsen = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Devan Nielsen</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${devan_nielsen})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <div
          style={{
            fontStyle: "italic",
            fontSize: "1.8em"
          }}
        >
          "hi, i’m devan i’m the exception to the rule. i’m forever in the
          process of reconstructing myself."
        </div>
        <br />
        <p>
          From MySpace to Google+ my about me has remained this one simple
          sentence.Luring in the ladies, and starting conversations, it sufficed
          for the purposes of social media, and it’s still on of the mantra’s I
          live by.
        </p>
        <br />
        <p>
          You might be wondering “Devan, What rule are you the exception to?”
          and honestly other than routinely placing e before i especially after
          c what else is there? But in all seriousness every day I learn that
          it’s not only me that’s the exception, but you as well. Everyone has
          the power to be or is the exception to the rule. All in all everyone
          is capable of way more than than they think believe they are. YOU ARE
          NOT LIVING UP TO YOUR POTENTIAL & that’s where I come in…
        </p>
        <p>
          “You’re capable of 20X more than you currently think or believe.” –
          Mark Divine
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Ben Anderson.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default DevanNielsen;
