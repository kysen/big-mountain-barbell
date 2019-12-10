import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const devan_nielsen = require("../../../assets/images/coaches/devan_nielsen.jpg");

const DevanNielsen = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Devan Nielsen</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${devan_nielsen})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <div
          style={{
            fontStyle: "italic",
            fontSize: "1.8em"
          }}
        >
          "hi, i’m devan i’m the exception to the rule. i’m forever in the
          process of reconstructing myself."
        </div>
        <br />
        <p>
          From MySpace to Google+ my about me has remained this one simple
          sentence.Luring in the ladies, and starting conversations, it sufficed
          for the purposes of social media, and it’s still on of the mantra’s I
          live by.
        </p>
        <br />
        <p>
          You might be wondering “Devan, What rule are you the exception to?”
          and honestly other than routinely placing e before i especially after
          c what else is there? But in all seriousness every day I learn that
          it’s not only me that’s the exception, but you as well. Everyone has
          the power to be or is the exception to the rule. All in all everyone
          is capable of way more than than they think believe they are. YOU ARE
          NOT LIVING UP TO YOUR POTENTIAL & that’s where I come in…
        </p>
        <br />
        <p>
          “You’re capable of 20X more than you currently think or believe.” –
          Mark Divine
        </p>
        <br />
        <p>
          You think you know what to do, and you might know exactly what to do,
          but you’re just like me. You fail to commit, you’re scared of success,
          you’re scared of failure, you have decision paralysis, you
          procrastinate for all of the reasons above. Now is the time to change
          all that. What you need is someone, something to hold you accountable.
          To guide you, to walk beside you, you know the whole drill. This is
          what I do. I work with you in a very close one on one relationship, to
          help you achieve what you want to achieve.
        </p>
        <br />

        <div
          style={{
            fontStyle: "bold",
            fontWeight: "900"
          }}
        >
          <p>
            Want to look good naked? I’ll be there telling you what to do, and
            that you’re fucking up.
          </p>
          <p>
            Want to score with the ladies? I’ll be there, helping you with pick
            up lines, and psychology.
          </p>
          <p>
            Want to build a tougher mind, last a little longer in an endurance
            event? We can do that.
          </p>
          <p>
            If I don’t know how to help you, I have a network of people to help
            me help you.
          </p>
        </div>
        <br />
        <p>
          I’m forever in the process of reconstructing myself, I plan on always
          learning and growing. I commit to reading, studying, learning, hanging
          around those that are better than me, taking the time to apply the
          knowledge that I come across, and teaching it to others. Teaching,
          mentoring, and coaching others is what I’m passionate about. I want to
          help you see that you can achieve a lot more than you’ve achieved so
          far. It took me far too long to get to where I am today, you can learn
          from my failures, from my mistakes. You can take the right direction.
        </p>
        <br />
        <p>
          Life isn’t easy, directions aren’t easy, and you will fail, you’ll
          fail many times over, but I’m here to help you, to pick your ass back
          up off the ground, and to keep pushing you down your path, whatever
          that may be.
        </p>
        <br />
        <div
          style={{
            color: "grey",
            fontStyle: "italic"
          }}
        >
          <p>NESTA Certified Personal Trainer</p>
          <p>NESTA Nutrition Coach</p>
          <p>NASM Certified Personal Trainer</p>
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with coach Devan Nielsen.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default DevanNielsen;
