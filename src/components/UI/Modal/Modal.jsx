import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.ModalClosed} />
      <div
        className={classes.Modal}
        style={{
          msTransform: props.show ? "translateY(0)" : "translateY(-100vh)",
          display: props.show ? "inherit" : "none",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
