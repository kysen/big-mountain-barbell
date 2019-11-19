import React from "react";

import ServiceItem from "./service-item.js";

import one from "../../../assets/images/slides/1.jpg";
import two from "../../../assets/images/slides/2.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <ServiceItem image={one} title="" />
      <ServiceItem image={two} />
    </div>
  );
};

export default Services;
