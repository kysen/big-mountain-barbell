import React, { useState, useEffect } from "react";

const InstaFeed = () => {
  const [postsArray, setPostsArray] = useState([]);
  var ig = require("instagram-scraping");

  useEffect(() => {
    ig.scrapeUserPage("bigmountainbarbell").then(result => {
      setPostsArray(result.medias);
    });
  }, [ig]);

  const hiThere = postsArray => {
    console.log(postsArray);
    return postsArray.map((current, index) => {
      // TODO sort by date
      return (
        <div className="post-wrapper" key={index}>
          <img
            resizeMode="contain"
            src={current.display_url}
            alt={current.shortcode}
          ></img>
          <div className="post-text">{current.text}</div>
        </div>
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
