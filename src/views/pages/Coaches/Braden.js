import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const braden = require("../../../assets/images/coaches/braden.jpg");

const Braden = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Braden Jenkins</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${braden})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Braden began developing his love for athletics, movement and mindset
          when he discovered the sport of Rugby in high school. There were no
          teams around him, so he organized and put together a team called the
          South County Crusaders. Braden played Rugby for 5 years and in that
          time he captained his team to two Regional victories as well as
          becoming State Champions in 2012.
          <br />
          <br />
          At the end of his Rugby career is when Braden was introduced to
          Olympic Lifting. He soon began coaching and competing, excited to find
          a new passion that matched what he had while playing Rugby. Braden
          continued to coach the Rugby team he created for another year, and
          aided in the growth of the South County Crusaders through Olympic
          Lifting and Athletic Training, helping them secure a Regional win and
          a 2nd place finish in the 2014 State Championships. Braden has since
          worked with many youth and highschool teams across a wide-variety of
          sports; athletics, proper mechanical movement and mind becoming his
          passion.
          <br />
          <br />
          That passion has grown into 7 years of experience working with coaches
          from all levels for his personal athletic goals. His passion for
          weightlifting became a two-sided coin. In his search to master is own
          movement and mechanical effeciency, a desire of teaching and coaching
          Olympic Weightlifting came with it. What Braden began to realize is
          that the base of movement intention within training should not and
          does not change from athlete to athlete or person to person. Instead,
          training must be looked at from a personal perspective of movement
          ability and mental understanding of what’s happening behind your
          training, and the concepts required for Strength Training. Braden
          share’s these concepts through a method of understanding he’s defined
          has “The 4 Pillars of Weight Training”.
          <br />
          <br />
          Braden’s own Olympic lifting career consists of numerous 1st place
          finishes at local meets, 14+ broken State Records across two weight
          classes, and becoming a USAW Junior National 3rd place medalist in
          2015. In his Coaching Career he has coached Crossfit Games Athletes,
          an ex-NFL athlete, generated International Olympic Weightlifting
          Athletes/Qualifiers, a Team USA athlete, generated a top ranking
          Senior USAW National Athlete, coached athletes to 7 USAW Youth
          National Medals with Championship Titles in Olympic Weightlifting,
          coached athletes to 30+ broken State Records in Olympic Weightlifting
          and Powerlifting, attained a handful of Coaching Certifications, and
          has worked with 100’s of individuals from all backgrounds to aid in
          movement, lifestyle, and training progression.
          <br />
          <br />
          His goals are to continue his love for competing and Strength
          Training, perfect and progress his coaching ability, and continue
          learning how to unlock the harder side of weightlifting and life - the
          mind.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Braden Jenkins.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default Braden;
