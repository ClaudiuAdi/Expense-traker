import React from "react";
import "./Card.css";

// component made in order for all the components to inherit some common proprieties
function Card(props) {
  const classes = "card " + props.className;
  // displaying what is between the starting and closing tags of the card component (props.children!)
  return <div className={classes}>{props.children}</div>;
}

export default Card;
