import React, { useState, useEffect } from "react";

import InstaItem from "./insta-item";

const InstaFeed = () => {
  const [postsArray, setPostsArray] = useState([]);

  var ig = require("instagram-scraping");

  useEffect(() => {
    ig.scrapeUserPage("bigmountainbarbell").then(result => {
      setPostsArray(result.medias);
    });
  }, [ig]);

  const hiThere = postsArray => {
    return postsArray.map((current, index) => {
      // TODO sort by date
      return (
        <InstaItem
          key={index}
          display_url={current.display_url}
          shortcode={current.shortcode}
          text={current.text}
        />
      );
    });
  };

  return (
    <div className="insta-feed-container">
      <div className="insta-posts-wrapper">{hiThere(postsArray)}</div>
    </div>
  );
};

export default InstaFeed;
