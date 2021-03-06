import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = ({ footer, body, close }) => {
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(
    (form) => {
      setForm({ ...form, body });
    },
    [body]
  );

  const update = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const submit = async () => {
    try {
      let text = `${form.body}\n${form.name}\n${form.email}\n${form.phone}`;
      let result = await axios.post(
        "https://us-central1-exposure-increase.cloudfunctions.net/api/v1/emails",
        {
          subject: `Website Outreach - ${form.name}`,
          to: "bigmountainbarbell@gmail.com",
          text,
        }
      );
      console.log(result);
    } catch (e) {
      console.log(e);
    }
    // close();
    setSent(true);
  };

  return (
    <div className={footer ? "footer-form" : "form-root"}>
      <input
        name="name"
        placeholder="Name"
        onChange={(e) => update(e.target)}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={(e) => update(e.target)}
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={(e) => update(e.target)}
      />
      <textarea
        name="body"
        onChange={(e) => update(e.target)}
        placeholder="Message"
        rows={footer ? 5 : 10}
        value={form.body}
      />
      <div className="button" id="button-7" onClick={submit}>
        <div id="dub-arrow">
          <img
            src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
            alt=""
          />
        </div>
        <p>SEND</p>
      </div>
      <div
        style={{
          display: sent ? "flex" : "none",
          color: "white",
          paddingTop: 2,
          transition: ".3s ease-in-out",
        }}
      >
        SENT
      </div>
    </div>
  );
};

export default Form;
