import React, { useState } from "react";
import { Motion, spring } from "react-motion";
import { withRouter } from "react-router-dom";
const andy_mower = require("../../../assets/images/coaches/andy_mower.png");
const anneke_cannon = require("../../../assets/images/coaches/anneke_cannon.jpg");
const ben_anderson = require("../../../assets/images/coaches/ben_anderson.jpg");
const cecily_lewis = require("../../../assets/images/coaches/cecily_lewis.png");
const devan_nielsen = require("../../../assets/images/coaches/devan_nielsen.jpg");
const hill_goldstein = require("../../../assets/images/coaches/hill_goldstein.jpg");
const jason_gonzales = require("../../../assets/images/coaches/jason_gonzales.jpg");
const katie_baretela = require("../../../assets/images/coaches/katie_baretela.jpg");
const lynndsey_eldridge = require("../../../assets/images/coaches/lynndsey_eldridge.jpg");
const megan_forrest = require("../../../assets/images/coaches/megan_forrest.jpg");
const michelle_carlson = require("../../../assets/images/coaches/michelle_carlson.jpg");
const nicky_barz = require("../../../assets/images/coaches/nicky_barz.png");
const sami_clements = require("../../../assets/images/coaches/sami_clements.png");
const taylor = require("../../../assets/images/coaches/taylor.JPG");
const braden = require("../../../assets/images/coaches/braden.jpg");
const ariana_browne = require("../../../assets/images/coaches/ariana_browne.jpg");
const christian_niederhauser = require("../../../assets/images/coaches/christian_niederhauser.jpg");
const chris_mcgrail = require("../../../assets/images/coaches/chris_mcgrail.jpg");
const erika = require("../../../assets/images/coaches/erika-square.jpg")
const zach_gee = require("../../../assets/images/coaches/zach_gee.jpg")

const Coaches = ({ history }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (routy) => {
    window.scrollTo(0,0)
    history.push(routy)
  }

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
      name: "Ben Anderson",
      img: ben_anderson,
      route: "ben-anderson"
    },
    {
      name: "Cecily Lewis",
      img: cecily_lewis,
      route: "cecily-lewis"
    },
    {
      name: "Devan Nielsen",
      img: devan_nielsen,
      route: "devan-nielsen"
    },
    // {
    //   name: "Anneke Cannon",
    //   img: anneke_cannon,
    //   route: "anneke-cannon"
    // },
    {
      name: "Hillary Goldstein",
      img: hill_goldstein,
      route: "hill-goldstein"
    },
    {
      name: "Jason Gonzales",
      img: jason_gonzales,
      route: "jason-gonzales"
    },
    {
      name: "Katie Baretela",
      img: katie_baretela,
      route: "katie-baretela"
    },
    {
      name: "Lynndsey Eldridge",
      img: lynndsey_eldridge,
      route: "lynndsey-eldridge"
    },
    {
      name: "Megan Forrest",
      img: megan_forrest,
      route: "megan-forrest"
    },
    {
      name: "Michelle Carlson",
      img: michelle_carlson,
      route: "michelle-carlson"
    },
    {
      name: "Nicky Barz",
      img: nicky_barz,
      route: "nicky-barz"
    },
    {
      name: "Sami Clements",
      img: sami_clements,
      route: "sami-clements"
    },
    {
      name: "Taylor Vigil",
      img: taylor,
      route: "taylor"
    },
    {
      name: "Braden Jenkins",
      img: braden,
      route: "braden"
    },
    {
      name: "Ariana Browne",
      img: ariana_browne,
      route: "ariana-browne"
    },
    {
      name: "Christian Niederhauser",
      img: christian_niederhauser,
      route: "christian-niederhauser"
    },
    {
      name: "Chris McGrail",
      img: chris_mcgrail,
      route: "chris-mcgrail"
    },
    {
      name: "Zach Gee",
      img: zach_gee,
      route: "zach-gee"
    },
    {
      name: "Erika Roberge",
      img: erika,
      route: "erika"
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
              onClick={() => handleClick(coach.route)}
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
