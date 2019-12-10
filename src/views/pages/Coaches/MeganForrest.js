import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const megan_forrest = require("../../../assets/images/coaches/megan_forrest.jpg");

const MeganForrest = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Megan Forrest</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${megan_forrest})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Megan believes that some people mistake their belief of themself as
          their true capacity. She thinks that when a woman doesn’t believe in
          herself, having someone else believe in them and show them that they
          are capable of more than they know, can completely change the
          trajectory of their life! ​<br />
          <br />
          Meg is strong, educated and experienced coach and while she brings a
          wealth of knowledge and experience to the table as a coach, it is her
          undeniable passion, patience and empathy that make her a truly one of
          a kind coach. ​<br />
          <br />
          In fact, we require each Fitbliss Coach to take the Meyer’s Briggs
          Personality test to help us determine how to place prospective clients
          with the right coach. It was no surprise that Coach Meg was an “INFJ”
          which is the same personality type of other great empaths like Mother
          Teresa and Martin Luther King Jr.. Less than 1% of people fall into
          this category and we are grateful to have Megan’s voice and
          perspective within our organization. ​<br />
          <br />
          ​Megan’s compassionate coaching and fierce strength combined with the
          Fitbliss body, mind and soul coaching philosophy, create an amazing
          foundation for a transformation that not only changes the physical
          body of her clients, but also helps them to achieve self love,
          confidence and a passion for training that they never knew they could
          have! ​<br />
          <br />
          ​Megan is a NASM and CrossFit Level 1 certified coach who specializes
          in building self love/confidence, Fatloss, Olympic Weightlifting,
          Powerliting, NPC Contest Prep, CrossFit and General Strength and
          Endurance training. ​<br />
          <br />
          She coaches our Ladies Lift barbell classes, offers one on one Olympic
          Weightlifting sessions and is a Fitbliss Online and Contest Prep
          Coach. ​<br />
          <br />
          ​Meg lives in Salt Lake City and in addition to Coaching she is a
          Nanny for an adorable family, loves dogs and outside of coaching,
          competing in Olympic Weightlifting and at the National Level as an NPC
          Competitor, she loves snowboarding, surfing, volleyball, hiking and
          scuba diving.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Megan Forrest.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default MeganForrest;
