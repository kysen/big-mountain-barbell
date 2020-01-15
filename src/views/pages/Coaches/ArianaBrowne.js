import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
const ariana_browne = require("../../../assets/images/coaches/ariana_browne.jpg");

const ArianaBrowne = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="coach-root">
      <h1>Ariana Browne</h1>
      <div className="coach-divider" />
      <div
        className="coach-image"
        style={{
          backgroundImage: `url(${ariana_browne})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="coach-divider" />
      <div className="coach-content">
        <p>
          Ariana has been NASM certified since 2009, she specializes in athletic
          and functional training. She is a mom of 3 and 1 on the way and loves
          to play competitive sports. She is a 5 year 1st Phorm Legionnaire too
          and has hosted several fitness challenges to help keep her clients in
          shape.
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
        body={`Dear Big Mountain Barbell Team,\n\nI am interested in working with Ariana Browne.\n\nPlease contact me at your earliest convenience`}
      />
    </div>
  );
};

export default ArianaBrowne;
