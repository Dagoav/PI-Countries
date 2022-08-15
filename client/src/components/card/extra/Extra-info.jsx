import React from "react";
import "./Extra-info.css";

const ExtraInfo = ({ capital, subregion, population, area }) => {
  return (
    <div className="extra">
      <div className="extra-title">
        <span>Capital: </span>
        <span className="extra-name">{capital ? capital : "Not capital"}</span>
      </div>

      <div className="extra-title">
        <span>Subregion: </span>
        <span className="extra-name">
          {subregion ? subregion : "Not subregion"}
        </span>
      </div>

      <div className="extra-title">
        <span>Population: </span>
        <span className="extra-name">
          {population ? population : "Not population"}
        </span>
      </div>

      <div className="extra-title">
        <span>Area: </span>
        <span className="extra-name">{area ? area : "Not area"} Km2</span>
      </div>
    </div>
  );
};

export default ExtraInfo;
