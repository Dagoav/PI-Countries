import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="bkg-welcome">
      <div className="boxTitle-welcome">
        <h1 className="title-welcome">Henry Countries</h1>
        <Link to="/home">
          <button className="btn-w">
            Let's start!
            <span className="material-symbols-outlined arrow_forward">
              arrow_forward_ios
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
