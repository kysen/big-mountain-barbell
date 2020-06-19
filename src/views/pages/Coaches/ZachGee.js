import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const zach_gee = require("../../../assets/images/coaches/zach_gee.jpg");

const ZachGee = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Zach Gee</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${zach_gee})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: 500,
          width: 335
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Zach Gee grew up in Santaquin, Utah where he grew up playing many different sports. When he was at Payson High School, his love for an active lifestyle and physical performance grew as he took his football coach, Colby Knight’s, anatomy, sports medicine, and advanced conditioning classes.  It was during this time that he knew he wanted to help people through exercise.

        </p>
        <br />
        <p>
        After graduating from high school, Zach enrolled at the University of Utah where he would end up graduating with a B.S. in Exercise and Sports Science in May 2010.  In addition to his education in the classroom, he was able to intern with the strength and conditioning staff at the University of Utah.  This not only exposed him to the training of many different athletes but also let him gain some coaching experience.  Finally, he was able to start competing in the sport of weightlifting under coach Dr. Michael Waller.

        </p>
        <br />

        <p>
        Next, Zach attended Utah State University where he served as a graduate assistant strength and conditioning coach working under Evan Simon.  Zach was the strength and conditioning coach for the women’s gymnastics team and co-strength coach, taking the lead in overseeing the throwers’ program, for the track and field team.  When not working with those teams, he also assisted in coaching athletes of many of the other varsity sports at Utah State.  Zach graduated in May 2012 with an M.Ed. in Health, Physical Education, and Recreation.  

        </p>
        <br />

        <p>
        After graduating, Zach ventured off into the private sector.  His first stop was a one-year stint working as a personal trainer at 24 Hour Fitness before venturing out on his own.  During this time, his experience grew as he was able to coach fat loss clients, weightlifters, powerlifters, and bikini competitors.  

        </p>
        <br />

        <p>
        In 2014, Zach had the opportunity to become the weight training teacher and strength and conditioning coach at Juan Diego Catholic High School.  During this time, he worked with both student-athletes and non-student athletes in the weight room.  Most notable of these students was the football team that won three straight Utah 3A State Championships from 2015-2017.  His coaching experience grew as he coached the freshman football team for four seasons and the track and field jumpers for two seasons. He would also go on to earn his teaching license in physical education by completing the state of Utah’s Alternative Route to Licensure.

        </p>
        <br />

        <p>
        In June 2020, Zach ventured back into the personal training sector where he feels like he can make the biggest impact on people’s lives.  He is not married to any specific exercise or workout program.  Instead, he believes in following certain principles that allow him to be flexible and truly shape the program to the client.

        </p>
        <br />

        <div
          style={{
            color: "grey",
            fontStyle: "italic"
          }}
        >
          <p>Certified Strength and Conditioning Specialist through the National Strength and Conditioning Association</p>
          <p>USAW Weightlifting Level 1</p>
          <p>Reflexive Performance Reset Level 1</p>
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Ben Anderson.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default ZachGee;
