import React, { useEffect, useRef } from "react";
import vid from "../../../assets/videos/hype-vid-silent-3rd.mp4";

const HypeVideo = () => {
  const vidRef = useRef();
  useEffect(() => {
    console.log(vidRef.current);
    vidRef.current.play();
  }, []);
  return (
    <div className="hype-video-container">
      <video ref={vidRef} src={vid} loop muted />
    </div>
  );
};

export default HypeVideo;
