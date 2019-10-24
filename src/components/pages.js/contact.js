import React from "react";

const ContactUs = props => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-title">Contact</h1>
      <div>Map Component</div>
      <div className="contact-two-column-wrapper">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <div>address</div>
          <div>tel: {props.phoneNumber}</div>
          <div>bigmountainbarbell@gmail.com</div>
          <div>social media</div>
        </div>
        <div className="contact-right">
          <div className="contact-component">
            <div>name</div>
            <div>email</div>
            <div>subject</div>
            <div>message</div>
            <button>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
