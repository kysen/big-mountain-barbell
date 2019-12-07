import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const andy_mower = require("../../../assets/images/coaches/andy_mower.png");

const AndyMower = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Andy Mower</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${andy_mower})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Coach Andy Mower is one of our resident powerlifting, general fitness
          and youth sports coaches. Andy has a very technical eye for form,
          particularly when it comes to the big three of powerlifting (Squat,
          Bench and Deads) and is passionate about helping his lifters have
          their most optimal form and reaching their true potential.
        </p>
        <br />
        <br />
        <p>
          Andy has 12 years of bodybuilding, strength training, and
          powerlifting. He has been coaching clients for 3 years. He is
          experienced in coaching raw, single-ply and multi-ply lifters.{" "}
        </p>
        <br />
        <br />
        <p>
          Whether you are a novice or advanced lifter, Andy treats his clients
          with the same attention to detail and respect and will help you be
          your best in and out of the gym.{" "}
        </p>
        <br />
        <br />
        <h2>Andy's Accomplishments: </h2>
        <br />
        <br />
        <p>- 2014 USPA - 1392lb Total @ 207lbs</p>
        <br />
        <br />
        <p>- 2014 APF - 1558lb total @ 220lbs Open Raw</p>
        <br />
        <br />
        <p>- 2015 Fit-Con IPL World Cup - 1559lb total @ 220lbs Open Raw </p>
        <p>1st place + 4 Utah State Records</p>
        <br />
        <br />
        <p>- 2015 IPL Worlds - 1648lb total @ 220lbs Open Raw</p>
        <p>1st place + 4 Utah State Records</p>
        <br />
        <br />
        <p>- 2016 Fit-Con IPL World Cup - 1736lb total @ 220lbs Open Raw </p>
        <p>1st place + 3 Utah State Records</p>
        <p>Wilks Score: 485</p>
        <br />
        <br />
        <p>- 2016 USPA State Championships - 1813lb total @ 220lbs Open Raw </p>
        <p>1st place + 4 Utah State Records + 3 American Records</p>
        <p>Best Raw Lifter</p>
        <p>Wilks Score: 504</p>
        <br />
        <br />
        <p>- 2016 IPL World's - 1836lb total @ 220lbs Open Raw </p>
        <p>1st place + 3 Utah State Records + 2 American Records</p>
        <p>Best Raw Lifter</p>
        <p>Wilks Score: 507</p>
        <br />
        <br />
        <p>- 2017 USPA - 1836lb total @ 220lbs Open Raw </p>
        <p>1st place + 1 Utah State Records + 1 American Record</p>
        <br />
        <br />
        <p>- 2017 IPL FitCon World Cup - 1890lb total @ 215lbs Open Raw </p>
        <p>
          1st place + 1 World Record Deadlift, American Records in Bench,
          Deadlift, and Total, 4 Utah State Records
        </p>
        <p>Best Raw Lifter</p>
        <p>Wilks Score: 527</p>
        <br />
        <br />
        <p>
          -2017 uspa nationals, Single-ply 1 World record squat 804lbs,
          single-ply 1 World record deadlift 766lbs, single-ply 1 World Record
          total 2022.{" "}
        </p>
        <br />
        <br />
        <p>
          -2017 Olympia IPL pro powerlifting, Deadlift only competition. 1st
          place Single-ply, 1 World record 839lb at 217lbs, also this is Utahs
          biggest dead-lift ever regardless of weight-class or equipment used
          done in a competition.{" "}
        </p>
        <br />
        <br />
        <p>
          -2017 UPA Utah holiday havoc, Best dead-lift overall, 1st place
          Equipped open 220 deadlift only, 1 Alltime World & American Record
          843lb dead-lift, 1 National & 1 state UPA Record, also Utah’s biggest
          dead-lift ever!{" "}
        </p>
        <br />
        <br />
        <p>
          -2018 IPL World-cup. Classic raw 242 class 1st place finish . 1935
          total @224lbs with 535 wilks score . 1 World Record Dead-lift Raw
          804lbs , ( also Utah’s biggest raw dead-lift ever ). 2 American
          sub-master Records, 3 Utah state open records, 4 Utah state sub-master
          Records.{" "}
        </p>
      </div>
      <div className="coach-divider" />
      <h2>
        Andy has small group powerlifting sessions available 2-4 days per week
        and private personal training slots available as well.
      </h2>
      <div className="coach-button" onClick={setOpen}>
        Book Now
      </div>
      <Modal
        open={open}
        close={() => setOpen(false)}
        header="Contact"
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Andy Bower.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default AndyMower;
