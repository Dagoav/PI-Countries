import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Notification.css";

const Notification = ({
  message,
  duration = 0,
  x = "right",
  y = "bottom",
}) => {

  const [display, setDisplay] = useState(true)
  const history = useHistory();

  useEffect(() => {
    let notification = document.querySelector(".notification-container")
    notification.style[x] = "18px";
    notification.style[y] = "18px";

    if (duration !== 0) {
      setTimeout(() => {
        setDisplay(() => false)
      }, duration);
    }
  }, [])


  useEffect(() => {
    let notification = document.querySelector(".notification-container")
    if (display) {
      notification.classList.add("show")
      notification.classList.remove("hide")
    } if (!display) {
      notification.classList.remove("show")
      notification.classList.add("hide")
    }
  }, [display]);

  const close = (e) => {
    setDisplay(() => false)
    history.push("/home");
  };


  console.log(display);

  return (
    <>
      <div className="notification-container">
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
