import React, { useEffect, useRef } from "react";
import vid from "../../../assets/videos/tour-with-black-bars.mp4";

const HypeVideo = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="tour-video-container">
      <video
        ref={vidRef}
        src={vid}
        loop
        muted
        controls
        className="hype-video"
      />
    </div>
  );
};

export default HypeVideo;
