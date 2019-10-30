import React from "react";
import ReactPlayer from "react-player";

const HypeVideo = () => {
  return (
    <div className="hype-video-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=IRbeAfc4GDc"
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
            preload: true,
            controls: 0,
            diablekb: false
          }
        }}
        controls={false}
        playing
        loop
        volume={0}
        width="100vw"
        height="800px"
      />
    </div>
  );
};

export default HypeVideo;
