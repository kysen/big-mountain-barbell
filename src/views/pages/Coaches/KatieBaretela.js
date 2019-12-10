import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const katie_baretela = require("../../../assets/images/coaches/katie_baretela.jpg");

const KatieBaretela = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Katie Baretela</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${katie_baretela})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Katie Baretela an in gym trainer and one of our certified Fitbliss
          Coaches. She is known by anyone who crosses her path for having an
          upbeat, enthusiastic demeanor and attitude.
          <br />
          <br />
          As a former competitive gymnast, Katie has always led an active life.
          However, injuries sidelined her around the same time she started
          school at the University of Utah in 2012. Feeling out of shape and
          intimidated to enter the weight room coupled with being afraid of
          exacerbating her injuries, her workouts only consisted of brief
          periods of time on a cardio machine. ​
          <br />
          <br />
          Upon discovering Fitbliss, science based weight lifting and flexible
          dieting in 2014, she was ready to get back to the athleticism and
          competitive spirit that had defined her life prior to college and
          began competing in NPC Bikini and Powerlifting. As time passed Katie
          found her very own version of Fitbliss in her heart and a fire burned
          inside her to help teach other women how to healthily transform their
          bodies, minds and souls and the rest is history! ​<br />
          <br />
          Katie graduated from the University of Utah with a Bachelor’s Degree
          in Kinesiology and a minor in Nutrition in the spring of 2017.
          Additionally she is a certified as a Personal Trainer though the
          National Academy of Sports Medicine.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Katie Baretela.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default KatieBaretela;
