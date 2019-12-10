import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const sami_clements = require("../../../assets/images/coaches/sami_clements.png");

const SamiClements = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Sami Clements</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${sami_clements})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Samantha Clements affectionately known as Sami G amongst the Fitbliss
          Fam lives in Salt Lake City, Utah with her husband, Tanner, son,
          Walter, and their Black Lab, Teddy. Not only is Sami a Fitbliss Online
          Coach and Personal Trainer, but she is also a 3rd Grade teacher at
          William Penn Elementary in SLC. ​<br />
          <br />
          Sami has a Bachelor’s of Science and a Master’s Degree in Education
          and she is also a certified Personal Trainer through the National
          Academy of Sports Medicine. Her teaching background coupled with her
          time with Fitbliss, has made Sami one of our most patient and
          encouraging coaches on staff. ​ ​<br />
          <br />
          Sami’s journey to becoming a Fitbliss coach started in 2014 when she
          finished college and realized how unhappy and uncomfortable she felt
          in her body. She was going back and forth between overeating and
          starving herself from foods she loved and doing a lot of cardio. When
          she did workout she had some imbalances and trouble doing proper form
          so she was very susceptible to injuries. The yo-yoing and aimless
          exercise wasn’t getting her anywhere so finally she reached out to
          Fitbliss and began the process of Flexible Dieting and lifting
          weights. ​ ​<br />
          <br />
          Fast forward a few years and Sami has transformed her body, competed
          in both Powerlifting and NPC Bikini competitions, but more importantly
          she has transformed her mindset and fully embraced the Fitbliss
          approach that will allow her to grow for the rest of her life! ​<br />
          <br />
          When asked what Fitbliss meant to her, Sam said, “Fitbliss is all
          about empowering women to find a love and passion for not only health
          and fitness, but also for their own well-being. Fitbliss is about
          educating women on the science behind fitness and nutrition that will
          help them to achieve their goals and continue to be healthy and
          successful throughout their lives! Fitbliss is not a "program" it's a
          lifestyle that is sustainable throughout your whole life! It's a
          community of supportive women who will be behind you whether you are
          looking to compete in an npc show, learn to powerlift, or just reach a
          health and fitness goal!”
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Sami Clements.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default SamiClements;
