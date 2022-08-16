import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Info from "../info/Info";
import SearchBar from "../searchBar/SearchBar";
import "./Nav.css";

const Nav = ({ searchBar }) => {
  const [info, showInfo] = useState({ show: false });

  const showModal = () => {
    showInfo({ show: true });
  };

  const hideModal = () => {
    showInfo({ show: false });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/home"}>
          <span className="material-symbols-outlined earth-logo">public</span>
        </Link>
      </div>
      {searchBar ? <SearchBar /> : <div></div>}

      <div className="infoBox">
        <Link to="/">
          <button className="btn-nav">Go Start</button>
        </Link>
        <button className="btn-nav" onClick={showModal}>
          About
        </button>
        <Info show={info.show} handleClose={hideModal}>
          <p>Technologies and resources</p>
        </Info>
        <Link to="/formActivity">
          <button className="btn-nav">Create Activity</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
