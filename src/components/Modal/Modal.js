import React from "react";
import Form from "../form/Form";

const Modal = ({ open, close, header = "", body, actions }) => {
  return (
    <div
      className="modal-root"
      style={open ? {} : { display: "none" }}
      onClick={close}
    >
      <div className="modal-paper">
        <h1 className="modal-header">{header}</h1>
        <div
          className="modal-body"
          style={body ? {} : { height: 250 }}
          onClick={e => e.stopPropagation()}
        >
          {body ? body : <Form />}
        </div>
        {actions && actions}
      </div>
    </div>
  );
};

export default Modal;
