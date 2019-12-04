import React from "react";

import ServiceItem from "./service-item.js";

import one from "../../../assets/images/slides/1.jpg";
import two from "../../../assets/images/slides/2.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <ServiceItem
        image={one}
        title="Chiromovement Muscle + Joint Clinic"
        content={
          <div className="content">
            <p>
              Lifting hard leaving you hurt, strained or unable to do you other
              daily activities? Are your movements restricted and keeping you
              from the top of your game? ChiroMovement is located inside Big
              Mountain Barbell and is ready to help you feel better, move better
              and recover faster. ChiroMovement is the go-to sports chiropractor
              at all Utah Powerlifting Association competitions.
            </p>
            <p>
              Dr. Bird is a local from Utah, graduating from both Salt Lake
              Community College and the University of Utah before attending the
              Cleveland University in Kansas City. As a Doctor of Chiropractic,
              he knows the importance of good movement health and each
              appointment has a personalized mix of chiropractic adjustments and
              soft tissue work. Dry needling and taping are also used when
              needed.{" "}
            </p>
            <p>
              Making an appointment is easy – visit{" "}
              <a href="https://chiromovement.janeapp.com/#/staff_member/1/treatment/1">
                chiromovement.janeapp.com
              </a>
              , call 801-251-6658, or just walk in and talk to the doctor
              yourself."
            </p>
          </div>
        }
      />
      <ServiceItem
        image={two}
        title="Custom Nutrition Coaching"
        content={
          <div className="content">
            <p>
              Interested in learning about macro based flexible dieting? We can
              help teach you all the ins and outs of macronutrients and how to
              implement this in to your life. We will work with you to customize
              a plan specifically for you and modify as needed to help you reach
              your goal.
            </p>
          </div>
        }
        pricing="$99-149/monthly"
        url={false}
      />
      <ServiceItem
        image={two}
        title="Fitbliss Fitness"
        content={
          <div className="content">
            <p>
              Interested in learning about macro based flexible dieting? We can
              help teach you all the ins and outs of macronutrients and how to
              implement this in to your life. We will work with you to customize
              a plan specifically for you and modify as needed to help you reach
              your goal.
            </p>
          </div>
        }
        url={false}
      />
      <ServiceItem
        image={two}
        title="One-On-One Personal Training"
        content={
          <div className="content">
            <p>
              Interested in learning about macro based flexible dieting? We can
              help teach you all the ins and outs of macronutrients and how to
              implement this in to your life. We will work with you to customize
              a plan specifically for you and modify as needed to help you reach
              your goal.
            </p>
          </div>
        }
        pricing="$40-$85/hr"
        url={false}
      />
      <ServiceItem
        image={two}
        title="Personalized Workout Programming"
        content={
          <div className="content">
            <p>
              Interested in learning about macro based flexible dieting? We can
              help teach you all the ins and outs of macronutrients and how to
              implement this in to your life. We will work with you to customize
              a plan specifically for you and modify as needed to help you reach
              your goal.
            </p>
          </div>
        }
        pricing="$49+/monthly"
        url={false}
      />
      <ServiceItem
        image={two}
        title="Drip Sweat"
        content={
          <div className="content">
            <p>
              Interested in learning about macro based flexible dieting? We can
              help teach you all the ins and outs of macronutrients and how to
              implement this in to your life. We will work with you to customize
              a plan specifically for you and modify as needed to help you reach
              your goal.
            </p>
          </div>
        }
        url={false}
      />
    </div>
  );
};

export default Services;
