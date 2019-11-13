import React, { useEffect, useRef } from "react";
import vid from "../../../assets/videos/hype-vid-silent-3rd.mp4";

const HypeVideo = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="hype-video-container">
      <video ref={vidRef} src={vid} loop muted className="hype-video" />
    </div>
  );
};

export default HypeVideo;
