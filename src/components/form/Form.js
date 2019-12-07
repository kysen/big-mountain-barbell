import React from "react";

const Form = ({ footer, body }) => {
  return (
    <div className={footer ? "footer-form" : "form-root"}>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Phone" />
      <textarea placeholder="Message" rows={footer ? 5 : 10} defaultValue={body} />
      <div className="button" id="button-7">
        <div id="dub-arrow">
          <img
            src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
            alt=""
          />
        </div>
        <p>SEND</p>
      </div>
    </div>
  );
};

export default Form;
