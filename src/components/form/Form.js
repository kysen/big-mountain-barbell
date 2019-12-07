import React from "react";

const Form = () => {
  const handleClick = e => {
    // e.stopPropagation();
  };

  return (
    <div className="footer-form">
      <input onClick={handleClick} placeholder="Name" />
      <input onClick={handleClick} placeholder="Email" />
      <input onClick={handleClick} placeholder="Phone" />
      <textarea onClick={handleClick} placeholder="Message" rows="5" />
      <div class="button" id="button-7">
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
