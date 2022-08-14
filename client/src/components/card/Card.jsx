import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import ExtraInfo from "./extra/Extra-info";

const Card = ({
  name,
  continent,
  flag,
  id,
  extraInfo,
  capital,
  subregion,
  population,
  area,
}) => {
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
  }, [continent]);

  return (
    <div className="card-box">
      <Link to={`/cardDetail/${id}`}>
        <div className="flag-box">
          <img src={flag} alt="flag" />
        </div>
      </Link>
      <div className="card-title-box">
        <span className="country-name">{name}</span>
        <div className="continent">
          <span>Continent</span>
          <span className="continent-name">
            {continent ? continent : "not Continent"}
          </span>
        </div>
        <span ref={circle} className="circleColor"></span>
      </div>
      {extraInfo && (
        <ExtraInfo
          capital={capital}
          subregion={subregion}
          population={population}
          area={area}
        />
      )}
    </div>
  );
};

export default Card;
