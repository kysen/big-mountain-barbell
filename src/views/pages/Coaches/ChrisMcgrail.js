import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const chris_mcgrail = require("../../../assets/images/coaches/chris_mcgrail.jpg");

const ChrisMcgrail = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Chris McGrail</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${chris_mcgrail})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Chris McGrail graduated from the United States Military Academy at
          West Point with degrees in Engineering Management and Mechanical
          Engineering. As an Army Officer he was awarded the Bronze Star and
          Presidential Unit Citation in conjunction with his combat service in
          Iraq. His experience as a strength coach began when he was an Army
          Lieutenant. By the time he reached the rank of Major he had trained
          hundreds of active duty soldiers to achieve and maintain combat
          readiness. In addition to completing a Master of Science and Master of
          Business Administration degrees, his professional certifications
          include: US Army Master Fitness Trainer, Certified Strength &
          Conditioning Specialist (CSCS), and Certified Personal Trainer through
          the National Strength & Conditioning Association (NSCA-CPT). Chris has
          won numerous world titles in the sport of powerlifting. He has won
          gold at the Olympia Pro Invitational a record six times, to include
          “Best Overall Lifter.” He also has set Open World Records in both the
          USPA and APF federations, and has the biggest “pound-for-pound” squat
          in USPA-IPL history with 904 lbs at 181 pounds body weight. Currently
          he has the best pound-for-pound squat and deadlift in Utah state
          history (both raw and equipped). He is the only athlete in Utah to
          ever squat over 5 times his body weight, and Deadlift over 4 times his
          body weight in competition. <br /> <br />
          As a sought-after strength coach and fitness consultant, Chris has
          trained numerous athletes in various sports to include powerlifting
          and mixed martial arts (MMA) professional fighters who have competed
          in the UFC, Strikeforce, Pride, Bellator, Professional Fight League,
          Rizin and the World Series of Fighting. <br /> <br />
          Chris is also the Utah State Chairman for the U.S. Powerlifting
          Association and directs powerlifting meets from the local level to
          both National and International levels, to include the FitCon World
          Cup and the Powerlifting Grand Prix at StrengthX. He is the Executive
          Vice President of NiTOR Performance (a supplement company devoted to
          producing the highest quality supplements). Visit nitorperformance.com
          for more info.
          <br />
          <br />
          <div
            style={{
              color: "grey",
              fontStyle: "italic"
            }}
          >
            <p>M.S., CSCS, NSCA-CPT</p>
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Chris McGrail.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default ChrisMcgrail;
