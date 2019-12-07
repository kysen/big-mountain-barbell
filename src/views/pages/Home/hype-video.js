import React, { useEffect, useRef } from "react";
import vid from "../../../assets/videos/hype-vid-silent-3rd.mp4";
import ModalVideo from "react-modal-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HypeVideo = ({ setOpen }) => {
  const [youtubeOpen, setYoutubeOpen] = React.useState(false);

  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div className="hype-video-wrapper">
      <div className="hype-video-container">
        <video ref={vidRef} src={vid} loop muted className="hype-video" />
      </div>
      <div className="play-full-video-wrapper">
        <div className="play-wrapper" onClick={() => setYoutubeOpen(true)}>
          <div> Play Full Video </div>
          &nbsp;
          <FontAwesomeIcon icon={["fas", "play"]} />
        </div>
      </div>
      <div className="schedule-tour-wrapper">
        <div className="schedule-tour-button" onClick={setOpen}>
          Schedule a Tour
        </div>
        <div></div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={youtubeOpen}
        videoId="Svmyj56TqrQ"
        onClose={() => setYoutubeOpen(false)}
      />
    </div>
  );
};

export default HypeVideo;
