import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./Notification.css";

const Notification = ({
  message,
  duration = 0,
  horizontalPosition = "right",
  verticalPosition = "bottom",
}) => {
  const notification = useRef();

  useEffect(() => {
    notification.current.style[horizontalPosition] = "18px";
    notification.current.style[verticalPosition] = "18px";

    if (duration !== 0) {
      setTimeout(() => {
        notification.current.style.display = "none";
      }, duration);
    }
  }, []);

  const close = (e) => {
    notification.current.style.display = "none";
  };

  return (
    <>
      <div className="notification-container" ref={notification}>
        <span
          className="material-symbols-outlined icon-popup-remove"
          onClick={(e) => close(e)}
        >
          close
        </span>
        <p className="text">{message !== "" ? message : "message"}</p>
      </div>
    </>
  );
};

export default Notification;
