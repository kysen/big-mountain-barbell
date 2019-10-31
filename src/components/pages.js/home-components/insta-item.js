import React, { useState } from "react";

import EllipsisText from "react-ellipsis-text";
const InstaItem = props => {
  const [mouseOn, setMouseOn] = useState(false);
  return (
    <div
      className="post-wrapper"
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
    >
      <img
        resizeMode="contain"
        src={props.display_url}
        alt={props.shortcode}
        style={{ filter: mouseOn ? "brightness(50%)" : "" }}
      ></img>
      <div className="post-text" style={{ opacity: mouseOn ? "1" : "0" }}>
        <EllipsisText text={props.text} length={"350"} />
      </div>
    </div>
  );
};

export default InstaItem;