import React from "react";

const Modal = ({ selectedImg }) => {
  return (
    <div className="backdrop">
      <mg src={selectedImg} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
