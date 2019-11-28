import React, { useEffect, useRef } from "react";
import vid from "../../../assets/videos/hype-vid-silent-3rd.mp4";
import ModalVideo from "react-modal-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HypeVideo = () => {
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
      <div className="link">
        <div onClick={() => setYoutubeOpen(true)}>
          Play Full Video <FontAwesomeIcon icon={["fas", "play"]} />
        </div>
      </div>
      <div className="schedule-tour-wrapper">
        <a href="#footer-container" className="schedule-tour-button">
          Schedule a Tour
        </a>
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
