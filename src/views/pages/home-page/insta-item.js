import React, { useState } from "react";

import EllipsisText from "react-ellipsis-text";
const InstaItem = props => {
  const [mouseOn, setMouseOn] = useState(false);

  const handleClick = () => {
    window.open(`https://www.instagram.com/p/${props.shortcode}/`, "instagram");
  };
  return (
    <div
      className="post-wrapper"
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      onClick={() => handleClick()}
    >
      <img
        className="insta-post-image"
        resizemode="contain"
        src={props.display_url}
        alt={props.shortcode}
        style={{ filter: mouseOn ? "brightness(50%)" : "" }}
      ></img>
      <div className="post-text" style={{ opacity: mouseOn ? "1" : "0" }}>
        <EllipsisText text={props.text} length={350} />
      </div>
    </div>
  );
};

export default InstaItem;
