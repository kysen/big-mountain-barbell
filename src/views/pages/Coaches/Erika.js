import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const erika = require("../../../assets/images/coaches/erika.jpeg");

const Erika = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Erika Roberge</h1>
      <div className="coach-divider" />
      <div
        style={{
          backgroundImage: `url(${erika})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: 500,
          width: 260
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
      <p>
        Erika graduated with her PhD in Clinical Psychology from The University of Utah, making her an expert in behavior change.  She has also been training men and women of all ages (including an 80-some-year old woman who can deadlift more than her bodyweight!) to improve their strength, fitness, mobility, and self-confidence since 2017. As a Certified Functional Strength and Conditioning Coach (CFSC), she routinely completes mobility assessments to ensure the appropriate level of training for each of her clients to prevent injury and maximize progress.  
        </p>
        <br />
        <p>
        Erika is also a nationally ranked USPA powerlifter with multiple Best Lifter awards and state records.  Her favorite lift (to do and coach) is the deadlift.  As of 2020, she has the second best classic raw IPL deadlift of all time! Before powerlifting, she was a collegiate soccer player before tearing both ACLs. Having been through surgery and physical therapy, she highly values safety and injury prevention.

        </p>
        <br />

        <p>
        Erika’s primary goal as a coach is to empower each of her clients to achieve their goals, push their boundaries, and discover new abilities. She is known to be a tough coach who challenges her clients regularly and chuckles when they finish workouts with “noodle arms” or dripping in sweat on the floor. She is also known for being their #1 fans, biggest advocates, and creating an empowering atmosphere.  
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Erika Roberge.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default Erika;
