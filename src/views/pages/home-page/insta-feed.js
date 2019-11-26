import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import InstaItem from "./insta-item";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70vw"
  },
  postsContainer: {
    margin: "80px 0px"
  }
});

const InstaFeed = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.postsContainer}>
        {hiThere(postsArray)}
      </Grid>
    </div>
  );
};

export default InstaFeed;
