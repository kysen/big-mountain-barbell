import React from "react";

const Form = () => {
  return (
    <div className="footer-form">
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Phone" />
      <textarea placeholder="Message" rows="5" />
      <button className="footer-button">Send</button>
    </div>
  );
};

export default Form;
