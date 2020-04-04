import React from "react";
import FourPrograms from "./FourPrograms/four-programs";
import IPhoneShots from "./IPhoneShots/IPhoneShots";

const BmbApp = () => {
  return (
    <div className="bmb-app-container">
      <IPhoneShots />
      <FourPrograms />
    </div>
  );
};

export default BmbApp;
