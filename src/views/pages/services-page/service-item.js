import React from "react";

const ServiceItem = props => {
  // var d = document.getElementById("learn-more");
  // d.style.position = "absolute";
  // d.style.left = x_pos + "px";
  // d.style.top = y_pos + "px";
  return (
    <div className="service-item-wrapper">
      <img src={props.image} alt="one" />
      <div className="service-item-content">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div>{props.pricing}</div>
        <div className="learn-more">Learn More</div>
      </div>
    </div>
  );
};

export default ServiceItem;
