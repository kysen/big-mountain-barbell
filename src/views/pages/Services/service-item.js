import React from "react";

const ServiceItem = props => {
  const open = () => {
    props.setOpen(true);
  };

  const learnMoreShow = () => {
    return (
      <a className="learn-more" href={props.url}>
        {props.learnMore}
      </a>
    );
  };

  const contactUs = () => {
    return (
      <div className="learn-more" onClick={() => open()}>
        {props.learnMore}
      </div>
    );
  };

  return (
    <div className="service-item-wrapper">
      <img src={props.image} alt="one" />
      <div className="service-item-content">
        <div className="header">{props.title}</div>
        {props.content}
        <div>{props.pricing}</div>
        {props.learnMore === "Contact Us" ? contactUs() : ""}
        {props.learnMore === "Learn More" ? learnMoreShow() : ""}
      </div>
    </div>
  );
};

export default ServiceItem;
