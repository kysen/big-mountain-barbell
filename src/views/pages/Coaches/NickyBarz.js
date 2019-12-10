import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const nicky_barz = require("../../../assets/images/coaches/nicky_barz.jpg");

const NickyBarz = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Nicky Barz</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${nicky_barz})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Nicky “Barz” Burgos is a world-ranked professional mixed martial arts
          (MMA) fighter with 10+ years experience in the sport, and 33+ years of
          experience in various traditional martial arts disciplines. He has
          reached expert (Black Belt) level in both Karate and Kickboxing, and
          is the top-ranked flyweight in Utah.
          <br />
          <br />
          As a coach and trainer, Nicky Barz has trained hundreds of kids and
          adults in combative sports such as boxing, kickboxing, MMA, and
          traditional martial arts. He was the head of the kids MMA program at
          Elite Performance MMA, and currently manages the youth boxing program
          for the city of South Salt Lake. His training credentials include the
          Modern Army Combatives Instructor certification from the Department of
          the Army, and is a Master Fitness Trainer.
          <br />
          <br />
          Nicky Barz is a Navy veteran who has experience training military
          personnel to pass the military standard fitness tests, and to be “fit
          for duty” in combat. He has trained dozens of military, law
          enforcement and fire service members to be fit for their respective
          professions. His current fitness program he teaches, “Fight for Fit,”
          is a martial arts based fitness program for kids and adults of all
          ages and experience levels. He developed this unique style of
          boot-camp inspired combatives fitness training by incorporating his
          years of fitness, military, and martial arts experience/training into
          a fast-paced and fun program.
          <br />
          <br />
          Nicky’s program is called The Fight for Fit program circuit-training
          based program is an hour long each session, and primarily focuses on
          calisthenics and combatives techniques such as boxing, kickboxing and
          karate. Although the primary objective is to focus on balancing all
          five major components of fitness, i.e. muscular strength, muscular
          endurance, cardiovascular,flexibility and body composition;
          participants will learn real-world practical martial arts techniques
          such as how to properly deliver effective striking skills (boxing,
          kickboxing, karate). A typical session will commence with a warm-up
          session such as Jump Rope for “rounds” similar to time limits
          simulating boxing rounds. This is immediately followed by “Pad Work”
          for rounds, and then a form of upper/lower body circuit training. A
          typical group training session will have approximately five
          individuals training concurrently. One-on-one private training
          sessions are also available with Nicky Barz.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Nicky Barz.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default NickyBarz;
