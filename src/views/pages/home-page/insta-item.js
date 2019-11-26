import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import EllipsisText from "react-ellipsis-text";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    objectFit: "cover"
  },
  instaImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.3s ease-in-out"
  },
  instaText: {
    transition: "0.4s ease-in-out",
    position: "absolute",
    zIndex: "1",
    color: "white",
    width: "15vw",
    display: "flex",
    alignItems: "center",
    "&:first-child": {
      overflowWrap: "break-word",
      wordWrap: "break-word"
    }
  }
});

const InstaItem = props => {
  const classes = useStyles();
  const [mouseOn, setMouseOn] = useState(false);

  const handleClick = () => {
    window.open(`https://www.instagram.com/p/${props.shortcode}/`, "instagram");
  };
  return (
    <Grid
      item
      container
      sm={12}
      md={6}
      lg={4}
      className={classes.root}
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      onClick={() => handleClick()}
    >
      <img
        className={classes.instaImage}
        resizemode="contain"
        src={props.display_url}
        alt={props.shortcode}
        style={{ filter: mouseOn ? "brightness(50%)" : "" }}
      ></img>
      <Grid
        item
        xs={12}
        lg={12}
        className={`${classes.instaText} post-text`}
        style={{ opacity: mouseOn ? "1" : "0" }}
      >
        <EllipsisText text={props.text} length={350} />
      </Grid>
    </Grid>
  );
};

export default InstaItem;
