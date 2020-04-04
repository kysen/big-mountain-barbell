import React from "react";

import ServiceItem from "./service-item.js";

import Modal from "../../../components/Modal/Modal";

import chiro from "../../../assets/images/services/chiro.jpg";
import nutritionalCoaching from "../../../assets/images/services/nutrition.jpg";
import fitbliss from "../../../assets/images/services/fitbliss.jpg";
import personalized from "../../../assets/images/slides/4.jpg";
import oneOnOne from "../../../assets/images/slides/2.jpg";
import dripSweat from "../../../assets/images/services/drip-sweat.jpg";

const Services = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="services-container">
      <ServiceItem
        image={oneOnOne}
        title="Big Mountain Barbell Fit Club"
        learnMore={"Learn More"}
        url={"./bmb-app"}
        setOpen={setOpen}
        content={
          <div className="content">
            <div>
              Personal training workouts written by top industry coaches and
              delivered straight to your phone through the Big Mountain Barbell
              App! Whether you’re an experienced lifter or just getting started,
              you can do our lifting classes anytime, anywhere with the
              guidance, accountability and support you need to achieve the
              results you want! (link out to the BMB Fit Club tab)
            </div>
          </div>
        }
        pricing="$25/hr"
      />
      <ServiceItem
        image={oneOnOne}
        title="One-On-One Personal Training"
        learnMore={"Contact Us"}
        setOpen={setOpen}
        content={
          <div className="content">
            <div>
              This is an in gym experience with a trainer who is with you from
              your first day until you've reached your goal. After goals are
              established your trainer will then create a custom program for you
              and guidance is given throughout for additional guided workouts on
              your own.
            </div>
            <div>
              <div className="bold">
                Additional one on one training options available:
              </div>
              Partner or Couples training
              <br />
              Small group training
            </div>
          </div>
        }
        pricing="$40-$85/hr"
      />
      <ServiceItem
        image={chiro}
        title="Chiromovement Muscle + Joint Clinic"
        learnMore={"Learn More"}
        url={"https://www.chiromovement.com/"}
        content={
          <div className="content">
            <div>
              Lifting hard leaving you hurt, strained or unable to do you other
              daily activities? Are your movements restricted and keeping you
              from the top of your game? ChiroMovement is located inside Big
              Mountain Barbell and is ready to help you feel better, move better
              and recover faster. ChiroMovement is the go-to sports chiropractor
              at all Utah Powerlifting Association competitions.
            </div>
            {/* <div>
              Dr. Bird is a local from Utah, graduating from both Salt Lake
              Community College and the University of Utah before attending the
              Cleveland University in Kansas City. As a Doctor of Chiropractic,
              he knows the importance of good movement health and each
              appointment has a personalized mix of chiropractic adjustments and
              soft tissue work. Dry needling and taping are also used when
              needed.{" "}
            </div> */}
            <div>
              Making an appointment is easy – visit{" "}
              <a href="https://chiromovement.janeapp.com/#/staff_member/1/treatment/1">
                chiromovement.janeapp.com
              </a>
              , call 801-251-6658, or just walk in and talk to the doctor
              yourself."
            </div>
          </div>
        }
      />
      <ServiceItem
        image={nutritionalCoaching}
        title="Custom Nutrition Coaching"
        learnMore={"Contact Us"}
        setOpen={setOpen}
        content={
          <div className="content">
            <div>
              Interested in learning about macro based flexible dieting? We can
              help teach you all the ins and outs of macronutrients and how to
              implement this in to your life. We will work with you to customize
              a plan specifically for you and modify as needed to help you reach
              your goal.
            </div>
          </div>
        }
        pricing="$99-149/monthly"
      />
      <ServiceItem
        image={fitbliss}
        title="Fitbliss Fitness"
        url={"https://fitblissfitness.com/ladieslift"}
        learnMore={"Learn More"}
        content={
          <div className="content">
            <div className="p-bigger">
              Do you feel like it’s time to make a positive change in your life?
              Ready to be a part of an empowering group of badass women?
            </div>
          </div>
        }
      />
      <ServiceItem
        image={personalized}
        title="Personalized Workout Programming"
        learnMore={"Contact Us"}
        setOpen={setOpen}
        content={
          <div className="content">
            <div>
              Feeling lost in the gym? Just need to change up your workout
              routine? This option is for those who want to start a new workout
              routine, are looking to freshen up their current workout schedule,
              or need help achieving specific strength or physique goals. This
              option includes monthly workouts specifically created for your
              lifestyle and goals.
            </div>
          </div>
        }
        pricing="$49+/monthly"
      />
      <ServiceItem
        image={dripSweat}
        title="Drip Sweat"
        learnMore="Learn More"
        url={"https://www.vagaro.com/dripsweatboxingfitness"}
        content={
          <div className="content">
            <div>
              Drip Sweat Boxing and Fitness combines boxing fitness with
              strength and conditioning in a team environment. You’ll learn real
              boxing technique, power through circuits and get a full body
              workout in a unique way. Team boxing sessions are hour long
              sessions where groups are capped at 10 to provide individualize
              attention as well. Our trainers also offer one on one training
              sessions where you’ll be able to conquer the sweet science of
              boxing at a quicker pace. Come by and switch up your workout with
              us!
            </div>
          </div>
        }
      />
      <Modal open={open} close={() => setOpen(false)} header="Contact" />
    </div>
  );
};

export default Services;
