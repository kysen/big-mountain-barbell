import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const andy_mower = require("../../../assets/images/coaches/andy_mower.png");

const AnnekeCannon = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Anneke Cannon</h1>
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
          Anneke (pronounced like Monica without the M) graduated with a
          Bachelor's Degree in Sociology from the University of Utah. While
          completing all of the pre-requisites to enter medical school she began
          to exercise to minimize the stress that came with having a full-time
          job, being a full-time student and to control unwanted weight gain. It
          was then that she realized that with her medical education she wanted
          to have a career that focused her time on health and wellness as
          opposed to sickness and disease. Anneke made a slight course
          adjustment after 5 years in the medical field and she found her true
          passion helping people with their health through physical fitness and
          proper nutrition.
        </p>

        <br />

        <p>
          Anneke became a Certified Personal Trainer through the National
          Academy of Sports Medicine in 2013. Since her certification she has
          spent countless hours, in the gym and online, training a variety of
          wonderful clients. She is also a certified USPA Powerlifting
          instructor.
        </p>

        <br />

        <p>
          Anneke&rsquo;s main goal with all of her clients is to help them to
          see the true strength that each and every person has inside of them.
          She believes that you can achieve anything that you set your mind to
          if you just work for it!
        </p>

        <p> </p>

        <p>
          She is an elite level, nationally qualified raw powerlifter and NPC
          Bikini Competitor. Anneke lives near Salt Lake City, UT with her
          husband, Ryan, her son, Miles, and their bulldog, Rooney. As a new
          mother, she stays busy between keeping up with Miles, running all of
          the behind the scenes work for Fitbliss, and coaching clients &amp;
          herself in the gym.
        </p>

        <p>&#8203;</p>
        <div
          style={{
            color: "grey",
            fontStyle: "italic"
          }}
        >
          <p>NASM CPT</p>
          <p>GGS Pre/Postnatal Specialist</p>

          <p>USPA Powerlifting Coach</p>
        </div>
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Anneke Cannon.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default AnnekeCannon;
