import React, { useEffect, useRef } from "react";

const HypeVideo = ({ setYoutubeOpen }) => {
  return (
    <div>
      <div className="watch-tour-video-button-container">
        <div
          className="watch-tour-video-button"
          onClick={() => setYoutubeOpen(true)}
        >
          Watch Tour Video
        </div>
      </div>{" "}
    </div>
  );
};

export default HypeVideo;
// import React, { useEffect, useRef } from "react";
// import vid from "../../../assets/videos/tour-with-black-bars.mp4";

// const HypeVideo = () => {
//   const vidRef = useRef();
//   useEffect(() => {
//     vidRef.current.play();
//   }, []);
//   return (
//     <div className="tour-video-container">
//       <video
//         ref={vidRef}
//         src={vid}
//         loop
//         muted
//         controls
//         className="hype-video"
//       />
//     </div>
//   );
// };

// export default HypeVideo;
