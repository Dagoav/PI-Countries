import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./Card.css";

const Card = ({ name, continent, flag }) => {
  let circle = useRef();

  useEffect(() => {
    if (continent) {
      let lowerContinent = continent.toLowerCase();

      switch (lowerContinent) {
        case "asia":
          circle.current.style.backgroundColor = "yellow";
          break;
        case "europe":
          circle.current.style.backgroundColor = "green";
          break;
        case "africa":
          circle.current.style.backgroundColor = "rgb(126, 123, 123)"; //black
          break;
        case "antarctica":
          circle.current.style.backgroundColor = "blue";
          break;
        case "oceania":
          circle.current.style.backgroundColor = "blue";
          break;

        default:
          circle.current.style.backgroundColor = "white";
          break;
      }
      if (lowerContinent.includes("america")) {
        circle.current.style.backgroundColor = "red";
      }
    }
  }, [circle]);

  return (
    <div className="card-box">
      <div className="flag-box">
        <img src={flag} alt="flag" />
      </div>
      <div className="card-title-box">
        <span className="country-name">{name ? name : "name"}</span>
        <div className="continent">
          <span>Continent</span>
          <span className="continent-name">
            {continent ? continent : "continenteName"}
          </span>
        </div>
        <span ref={circle} className="circleColor"></span>
      </div>
    </div>
  );
};

export default Card;
