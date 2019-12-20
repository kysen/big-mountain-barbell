import React from "react";
import Modal from "../../../components/Modal/Modal";


const Memberships = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="memberships-container">
      <div className="img-container">
        <div className="memberships-img">
          <div className="header-wrapper">
            <h1 className="memberships-img-header">GET&nbsp;YOUR&nbsp;GYM</h1>
            <h1 className="memberships-img-header">MEMBERSHIP</h1>
            <h1 className="memberships-img-header">TODAY!</h1>
            <div className="schedule-consoltation-button" onClick={setOpen}>
              Schedule Your Free Consoltation Today!
            </div>
          </div>
        </div>
      </div>

      <div className="memberships-info-container">
        <div className="sec1 info-all">
          Are you ready to join a local gym that you can call home? Our
          Membership Cost breakdown/options are as follows:
        </div>
        <div className="sec2 info-all">$25 Membership Set Up Fee</div>
        <ul className="sec3 info-all">
          <li>Month to Month - $69/month </li>
          <li>3 Month Contract - $59/month</li>
          <li>6 Month Contract - $49/month</li>
          <li>1 Year Membership paid up front - $480</li>
          <li>6 Month Membership paid up front - $270 </li>
          <li>3 Month Membership paid up front - $160 </li>
          <li>Single Day Drop in $10/day ($5 on Sunday)</li>
        </ul>
        <div className="sec4 info-all">
          <h1>Additional Costs/Options:</h1>
          <p>
            Interested in personal training and a gym membership? If you
            purchase a training package of $200 or more each month with a
            trainer, you'll receive a discounted membership rate of $30/month!
          </p>
          <p>
            If you bring/refer a friend you will receive a $25 credit to your
            account.{" "}
          </p>
          <p>
            We do not have a manager on site at all times. Instead, we set up
            appointments to meet you at the gym, show you around and if you'd
            like to set up your membership, we will do that too!
          </p>
          <p className="bold">See you at BMB! ​</p>
        </div>
      </div>
      <Modal open={open} close={() => setOpen(false)} header="Contact" />

    </div>
  );
};

export default Memberships;
