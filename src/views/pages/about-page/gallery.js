import React from "react";

import ImageGallery from "react-image-gallery";

import one from "../../../assets/images/slides/1.jpg";
import two from "../../../assets/images/slides/2.jpg";
import three from "../../../assets/images/slides/3.jpg";
import four from "../../../assets/images/slides/4.jpg";
import five from "../../../assets/images/slides/5.jpg";
import six from "../../../assets/images/slides/6.jpg";
import seven from "../../../assets/images/slides/7.jpg";
import eight from "../../../assets/images/slides/8.jpg";
import nine from "../../../assets/images/slides/9.jpg";
import ten from "../../../assets/images/slides/10.jpg";
import eleven from "../../../assets/images/slides/11.jpg";
import twelve from "../../../assets/images/slides/12.jpg";
import thirteen from "../../../assets/images/slides/13.jpg";
import fourteen from "../../../assets/images/slides/14.jpg";
import fifteen from "../../../assets/images/slides/15.jpg";

const Gallery = () => {
  const render1 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={one} alt="slide-show-pic" />
      </div>
    );
  };
  const render2 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={two} alt="slide-show-pic" />
      </div>
    );
  };
  const render3 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={three}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const render4 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={four} alt="slide-show-pic" />
      </div>
    );
  };
  const render5 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={five} alt="slide-show-pic" />
      </div>
    );
  };
  const render6 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={six} alt="slide-show-pic" />
      </div>
    );
  };
  const render7 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={seven}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const render8 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={eight}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const render9 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={nine} alt="slide-show-pic" />
      </div>
    );
  };
  const render10 = () => {
    return (
      <div className="scrolling-item">
        <img className="scrolling-item-image" src={ten} alt="slide-show-pic" />
      </div>
    );
  };
  const render11 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={eleven}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const render12 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={twelve}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const render13 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={thirteen}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const render14 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={fourteen}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const render15 = () => {
    return (
      <div className="scrolling-item">
        <img
          className="scrolling-item-image"
          src={fifteen}
          alt="slide-show-pic"
        />
      </div>
    );
  };
  const images = [
    {
      renderItem: render1
    },
    {
      renderItem: render2
    },
    {
      renderItem: render3
    },
    {
      renderItem: render4
    },
    {
      renderItem: render5
    },
    {
      renderItem: render6
    },
    {
      renderItem: render7
    },
    {
      renderItem: render8
    },
    {
      renderItem: render9
    },
    {
      renderItem: render10
    },
    {
      renderItem: render11
    },
    {
      renderItem: render12
    },
    {
      renderItem: render13
    },
    {
      renderItem: render14
    },
    {
      renderItem: render15
    }
  ];

  return (
    <div className="gallery-container">
      {" "}
      <ImageGallery
        items={images}
        showThumbnails={false}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={8000}
      />
    </div>
  );
};

export default Gallery;
