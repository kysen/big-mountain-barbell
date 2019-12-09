import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import { withRouter } from "react-router-dom";
const andy_mower = require("../../../assets/images/coaches/andy_mower.png");
const anneke_cannon = require("../../../assets/images/coaches/anneke_cannon.jpg");

const Coaches = ({ history }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const coaches = [
    {
      name: "Andy Mower",
      img: andy_mower,
      route: "andy-mower"
    },
    {
      name: "Anneke Cannon",
      img: anneke_cannon,
      route: "anneke-cannon"
    },
    {
      name: "Anneke Cannon",
      img: anneke_cannon,
      route: "anneke-cannon"
    }
  ];

  return (
    <div className="coaches-root">
      <h1>MEET THE COACHES</h1>
      <div className="coaches-divider" />
      <div className="coaches-container">
        {coaches.map((coach, i) => {
          return (
            <div
              key={i}
              className="coaches-item"
              style={{
                backgroundImage: `url(${coach.img})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => history.push(`${coach.route}`)}
            >
              <div className="coaches-desktop">
                <Motion
                  defaultStyle={{ y: 300 }}
                  style={{
                    y: spring(hoveredIndex === i ? 0 : 300, {
                      stiffness: 50,
                      damping: 12
                    })
                  }}
                >
                  {style => (
                    <div
                      className="coaches-item-name"
                      style={{
                        transform: `translateY(${style.y}px)`
                      }}
                    >
                      <h1>{coach.name}</h1>
                    </div>
                  )}
                </Motion>
              </div>
              <div className="coaches-mobile">
                <div className="coaches-item-name">
                  <h1>{coach.name}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Coaches);
