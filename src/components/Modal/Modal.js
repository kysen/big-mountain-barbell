import React from "react";
import Form from "../form/Form";

const Modal = ({ open, close, header = "", body, actions }) => {
  return (
    <div className="modal-root" style={open ? {} : { display: 'none'}} onClick={close}>
			<div className="modal-paper">
				<h1 className="modal-header">
					{header}
				</h1>
				<div className="modal-body" onClick={e => e.stopPropagation()}>
					<Form body={body} />
				</div>
				{actions && actions}
			</div>
    </div>
  );
};

export default Modal;
