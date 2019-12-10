import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const hill_goldstein = require("../../../assets/images/coaches/hill_goldstein.jpg");

const BenAnderson = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Hillary Goldstein</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${hill_goldstein})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          While living in the back woods of Northern Maine, I discovered how
          difficult it was to perform daily functions without a base of fitness
          and proper lifting mechanics. Cutting and stacking eight cords of
          firewood for winter, I found myself with debilitating back soreness
          and went to bed exhausted each night from my lack of physical
          conditioning. Ready to make a change, my husband and I taught
          ourselves Powerlifting with a set of dumbbells and from that point on
          lifting grew into a passionate endeavor. ​<br />​<br />
          Since entering the coaching field, I have focused mainly on helping
          individuals develop self-empowerment and mental strength through the
          process of gaining physical strength. I love watching how people first
          approach a heavy barbell. Are they timid and nervous or are they
          fierce and aggressive? Over months of working with a person, this
          often changes and their approach of the barbell begins to mirror their
          approach to their own life. ​<br />
          As a strength coach, I place an emphasis on proper technique along
          with mobility to make sure you not only get strong, but also maintain
          good range of motion and flexibility. My concern is helping you find
          longevity in your exercise so that you can continue being active well
          into the winter years of your life.
          <br />
          <br />
          My approach to nutrition focuses on educating you about how to
          structure your meals to fuel you for an active lifestyle and to help
          you develop a lean and strong physique. My highest nutrition
          philosophy influences include the latest research into the healing
          benefits of a Keto lifestyle along with the principles of the Weston
          A. Price foundation which promotes a diet devoid of any nutrient
          deficiencies. I want to educate you on the how and why so that you can
          become the MASTER OF YOUR OWN BODY.
        </p>

        <br />

        <div
          style={{
            color: "grey",
            fontStyle: "italic"
          }}
        >
          <p>
            B.A. Creative Writing, Emerson College 2009 <br />
            NSCA Certified Strength & Conditioning Specialist <br />
            Precision Nutrition L1
          </p>{" "}
          <br />
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Hillary Goldstein.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default BenAnderson;
